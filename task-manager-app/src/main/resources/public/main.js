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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myTask\" (submit)=\"onSubmit()\">\n  <div formGroupName=\"add\">\n    <p>\n    <table>\n      <tr>\n        <td>\n          <label for=\"title\">Task</label>\n        </td>\n        <td>\n          <input type=\"text\" class=\"form-control\" id=\"task\" name=\"task\" formControlName=\"task\">\n        </td>\n        <td>\n          <small *ngIf=\"!myTask.controls['add'].controls['task'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"priority\">Priority</label>\n        </td>\n        <td>\n          <input type=\"range\" id=\"priority\" name=\"priority\" min=\"0\" max=\"30\" value=\"5\" formControlName=\"priority\">\n        </td>\n        <td>\n          <label for=\"priority\">{{myTask.value.add.priority}}</label>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"parent\">Parent Task</label>\n        </td>\n        <td>\n          <input type=\"text\" class=\"form-control\" id=\"parent\" name=\"parent\" formControlName=\"parent\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"title\">Start date</label>\n        </td>\n        <td>\n          <input type=\"date\" class=\"form-control\" formControlName=\"startDate\" id=\"startDate\" name=\"startDate\">\n        </td>\n        <td>\n          <small *ngIf=\"!myTask.controls['add'].controls['startDate'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"title\">End date</label>\n        </td>\n        <td>\n          <input type=\"date\" class=\"form-control\" formControlName=\"endDate\" id=\"endDate\" name=\"endDate\">\n        </td>\n        <td>\n          <small *ngIf=\"!myTask.controls['add'].controls['endDate'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n<p>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myTask.valid\">Add Task</button>\n  <p><output >{{msg}}</output></p>\n  <form>"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task.service */ "./src/app/add-task/add-task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(service) {
        this.service = service;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.myTask = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'add': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'task': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('5', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'parent': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
                'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pipe.transform(Date.now(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.pipe.transform(Date.now(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            })
        });
    };
    AddTaskComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.myTask);
        console.log(this.myTask.value);
        this.service.addTask({
            id: 1,
            task: this.myTask.value.add.task,
            parentTask: this.myTask.value.add.parent,
            startDate: this.myTask.value.add.startDate,
            priority: this.myTask.value.add.priority,
            endDate: this.myTask.value.add.endDate,
            endTask: 0
        })
            .subscribe(function (data) { _this.showMessage(data.status, data.message); });
        this.showMessage(true, 'Task added sucessfully');
        this.ngOnInit();
    };
    AddTaskComponent.prototype.showMessage = function (status, message) {
        this.msg = message;
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")],
            providers: [_add_task_service__WEBPACK_IMPORTED_MODULE_3__["AddTaskService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_add_task_service__WEBPACK_IMPORTED_MODULE_3__["AddTaskService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/add-task/add-task.service.ts":
/*!**********************************************!*\
  !*** ./src/app/add-task/add-task.service.ts ***!
  \**********************************************/
/*! exports provided: AddTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskService", function() { return AddTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTaskService = /** @class */ (function () {
    function AddTaskService(http) {
        this.http = http;
    }
    AddTaskService.prototype.addTask = function (taskDetails) {
        console.log('Inside service' + taskDetails.task);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/addTask', taskDetails);
    };
    AddTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddTaskService);
    return AddTaskService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
/* harmony import */ var _delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-task/delete-task.component */ "./src/app/delete-task/delete-task.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/add', pathMatch: 'full' },
    { path: 'add', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"] },
    { path: 'view', component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__["ViewTaskComponent"] },
    { path: 'update', component: _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ng5_slider__WEBPACK_IMPORTED_MODULE_9__["Ng5SliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"], _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_5__["ViewTaskComponent"], _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"],
                _delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_7__["DeleteTaskComponent"]]
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

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 100%;\r\n  }\r\nh2, h3 {\r\n    color: #444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n  }\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div style=\"text-align:left\">\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/add\">Add Task</a> |\n      <a routerLink=\"/view\">View Task</a>\n    </nav>\n\n    <div class=\"container\">\n      \n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Task Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-task/delete-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/delete-task/delete-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-task/delete-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/delete-task/delete-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-task works!\n</p>\n"

/***/ }),

/***/ "./src/app/delete-task/delete-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/delete-task/delete-task.component.ts ***!
  \******************************************************/
/*! exports provided: DeleteTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTaskComponent", function() { return DeleteTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteTaskComponent = /** @class */ (function () {
    function DeleteTaskComponent() {
    }
    DeleteTaskComponent.prototype.ngOnInit = function () {
    };
    DeleteTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-task',
            template: __webpack_require__(/*! ./delete-task.component.html */ "./src/app/delete-task/delete-task.component.html"),
            styles: [__webpack_require__(/*! ./delete-task.component.css */ "./src/app/delete-task/delete-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteTaskComponent);
    return DeleteTaskComponent;
}());



/***/ }),

/***/ "./src/app/edit-task/edit-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"edit\" (submit)=\"onSubmit()\">\n  <div formGroupName=\"edit\">\n    <p>\n    <table>\n      <tr>\n        <td>\n          <label for=\"title\">Task</label>\n        </td>\n        <td>\n          <input type=\"text\" class=\"form-control\" id=\"task\" name=\"task\" formControlName=\"task\">\n        </td>\n        <td>\n          <small *ngIf=\"!edit.controls['edit'].controls['task'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"priority\">Priority</label>\n        </td>\n        <td>\n          <input type=\"range\" id=\"priority\" name=\"priority\" min=\"0\" max=\"30\" value=\"5\" formControlName=\"priority\">\n        </td>\n        <td>\n          <label for=\"priority\">{{edit.value.edit.priority}}</label>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"parent\">Parent Task</label>\n        </td>\n        <td>\n          <input type=\"text\" class=\"form-control\" id=\"parent\" name=\"parent\" formControlName=\"parent\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"title\">Start date</label>\n        </td>\n        <td>\n          <input type=\"date\" class=\"form-control\" formControlName=\"startDate\" id=\"startDate\" name=\"startDate\">\n        </td>\n        <td>\n          <small *ngIf=\"!edit.controls['edit'].controls['startDate'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <label for=\"title\">End date</label>\n        </td>\n        <td>\n          <input type=\"date\" class=\"form-control\" formControlName=\"endDate\" id=\"endDate\" name=\"endDate\">\n        </td>\n        <td>\n          <small *ngIf=\"!edit.controls['edit'].controls['endDate'].valid\">Task is required!!</small>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n<p>\n  <button type=\"submit\" (click)=\"update()\" class=\"btn btn-primary\" [disabled]=\"!edit.valid\">Update Task</button>\n  <form>"

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-task.service */ "./src/app/edit-task/edit-task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(service, router, route) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
        console.log(this.route);
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.task = params['task'];
            _this.priority = params['priority'];
            _this.startDate = params['startDate'];
            _this.endDate = params['endDate'];
            _this.parentTask = params['parentTask'];
        });
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        this.edit = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'edit': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'task': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.task, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.priority, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'parent': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.parentTask, []),
                'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.pipe.transform(this.startDate, 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.pipe.transform(this.endDate, 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            })
        });
    };
    EditTaskComponent.prototype.update = function () {
        var _this = this;
        console.log('Update');
        this.service.editTask({
            id: this.id,
            task: this.edit.value.edit.task,
            parentTask: this.edit.value.edit.parent,
            startDate: this.edit.value.edit.startDate,
            priority: this.edit.value.edit.priority,
            endDate: this.edit.value.edit.endDate,
            endTask: 1
        }).subscribe(function (data) { return _this.msg; });
        this.router.navigate(['/view', { message: this.msg }]);
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.css */ "./src/app/edit-task/edit-task.component.css")],
            providers: [_edit_task_service__WEBPACK_IMPORTED_MODULE_4__["EditTaskService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_edit_task_service__WEBPACK_IMPORTED_MODULE_4__["EditTaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/edit-task/edit-task.service.ts":
/*!************************************************!*\
  !*** ./src/app/edit-task/edit-task.service.ts ***!
  \************************************************/
/*! exports provided: EditTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskService", function() { return EditTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditTaskService = /** @class */ (function () {
    function EditTaskService(http) {
        this.http = http;
    }
    EditTaskService.prototype.editTask = function (taskDetails) {
        console.log('Update service');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/updateTask', taskDetails);
    };
    EditTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditTaskService);
    return EditTaskService;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table>\n    <tr>\n      <td>Task:</td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"task\" id=\"task\">\n      </td>\n      <td>Parent Task:</td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"parentTask\" id=\"parentTask\">\n      </td>\n    </tr>\n    <tr>\n      <td>Priority From:</td>\n      <td>\n        <input type=\"number\" [(ngModel)]=\"priorityFrom\" id=\"priorityFrom\">\n      </td>\n      <td>Priority To:</td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"priorityTo\" id=\"priorityTo\">\n      </td>\n      <td>Start Date:</td>\n      <td>\n        <input type=\"date\" [(ngModel)]=\"startDate\" id=\"startDate\">\n      </td>\n      <td>End Date:</td>\n      <td>\n        <input type=\"date\" [(ngModel)]=\"endDate\" id=\"endDate\">\n      </td>\n    </tr>\n\n  </table>\n  <p>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"search()\">Search</button>\n  </p>\n  <div>\n    <output ng-show=\"hide\" g-value=\"message\"></output>\n  </div>\n  <div >Search Results</div>\n  <table>\n    <tr *ngFor=\"let result of results; let i=index\">\n      <table style=\"width:50%\">\n        <tr>\n          <th>Task</th>\n          <th>Parent Task</th>\n          <th>Priority</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n        </tr>\n        <tr>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"result.task\" disabled=\"true\" >\n          </td>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"result.parentTask\" disabled=\"true\">\n          </td>\n          <td>\n            <output>{{result.priority}}</output>\n          </td>\n\n          <td>\n            <output type=\"date\" disabled=\"true\">{{result.startDate | date:'MM/dd/yyyy'}}</output>\n          </td>\n\n          <td>\n            <output type=\"date\" disabled=\"true\">{{result.endDate | date:'MM/dd/yyyy'}}</output>\n          </td>\n          <td>\n              <button type=\"submit\" [disabled]=\"result.endTask=='1'\" class=\"btn btn-primary\" (click)=\"edit(i)\">Edit</button>\n          </td>\n          <td><button type=\"submit\" [disabled]=\"result.endTask=='1'\" (click)=\"endTask(i)\" class=\"btn btn-primary\" >End Task</button></td>\n        </tr>\n      </table>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-task.service */ "./src/app/view-task/view-task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(service, router, route) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.message = params['message'];
        });
        if (null === this.message) {
            this.hide = true;
        }
        else {
            this.hide = false;
        }
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.priorityFrom = 0;
        this.priorityTo = 30;
        this.startDate = new Date();
        this.endDate = new Date();
    };
    ViewTaskComponent.prototype.search = function () {
        var _this = this;
        this.hide = false;
        this.service.viewTask({
            task: this.task,
            parentTask: this.parentTask,
            priorityFrom: this.priorityFrom,
            priorityTo: this.priorityTo,
            startDate: this.startDate,
            endDate: this.endDate
        }).subscribe(function (data) { _this.results = data; });
        console.log(this.results);
    };
    ViewTaskComponent.prototype.disableEdit = function (i) {
        if (this.results[i].endTask === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    ViewTaskComponent.prototype.edit = function (i) {
        console.log(this.results[i]);
        this.router.navigate(['/update', {
                id: this.results[i].id,
                task: this.results[i].task,
                priority: this.results[i].priority,
                startDate: this.results[i].startDate,
                endDate: this.results[i].endDate,
                parentTask: this.results[i].parentTask
            }]);
    };
    ViewTaskComponent.prototype.endTask = function (i) {
        var _this = this;
        this.service.endTask(this.results[i].id).subscribe(function (data) { return _this.msg; });
        this.results[i].endTask = 1;
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")],
            providers: [_view_task_service__WEBPACK_IMPORTED_MODULE_1__["ViewTaskService"]]
        }),
        __metadata("design:paramtypes", [_view_task_service__WEBPACK_IMPORTED_MODULE_1__["ViewTaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.service.ts":
/*!************************************************!*\
  !*** ./src/app/view-task/view-task.service.ts ***!
  \************************************************/
/*! exports provided: ViewTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskService", function() { return ViewTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTaskService = /** @class */ (function () {
    function ViewTaskService(http) {
        this.http = http;
    }
    ViewTaskService.prototype.viewTask = function (searchParam) {
        console.log('Inside view service' + searchParam.task);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/viewTask', searchParam);
    };
    ViewTaskService.prototype.endTask = function (taskId) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('taskId', taskId.toString());
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/endTask', { params: httpParams });
    };
    ViewTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ViewTaskService);
    return ViewTaskService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:9000/task-manager-app-0.0.1-SNAPSHOT'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\task-manager-js\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map