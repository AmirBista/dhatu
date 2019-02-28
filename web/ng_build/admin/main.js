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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/wallet/wallet.module */ "./src/app/components/wallet/wallet.module.ts");
/* harmony import */ var _components_market_market_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/market/market.module */ "./src/app/components/market/market.module.ts");
/* harmony import */ var _components_client_client_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client/client.module */ "./src/app/components/client/client.module.ts");
/* harmony import */ var _components_trade_history_trade_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/trade-history/trade-history.component */ "./src/app/components/trade-history/trade-history.component.ts");
/* harmony import */ var _components_node_server_node_server_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/node-server/node-server.component */ "./src/app/components/node-server/node-server.component.ts");
/* harmony import */ var _components_network_settings_network_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/network-settings/network-settings.component */ "./src/app/components/network-settings/network-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'wallet', loadChildren: function () { return _components_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_3__["WalletModule"]; } },
    { path: 'market', loadChildren: function () { return _components_market_market_module__WEBPACK_IMPORTED_MODULE_4__["MarketModule"]; } },
    { path: 'client', loadChildren: function () { return _components_client_client_module__WEBPACK_IMPORTED_MODULE_5__["ClientModule"]; } },
    { path: 'tradeHistory', component: _components_trade_history_trade_history_component__WEBPACK_IMPORTED_MODULE_6__["TradeHistoryComponent"] },
    { path: 'nodeServer', component: _components_node_server_node_server_component__WEBPACK_IMPORTED_MODULE_7__["NodeServerComponent"] },
    { path: 'networkSettings', component: _components_network_settings_network_settings_component__WEBPACK_IMPORTED_MODULE_8__["NetworkSettingsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'ng-bitbase-backend';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wallet/wallet.module */ "./src/app/components/wallet/wallet.module.ts");
/* harmony import */ var _components_market_market_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/market/market.module */ "./src/app/components/market/market.module.ts");
/* harmony import */ var _components_client_client_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/client/client.module */ "./src/app/components/client/client.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _components_ng_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ng-modal/modal.component */ "./src/app/components/ng-modal/modal.component.ts");
/* harmony import */ var _components_trade_history_trade_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/trade-history/trade-history.component */ "./src/app/components/trade-history/trade-history.component.ts");
/* harmony import */ var _components_order_detail_modal_order_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/order-detail-modal/order-detail-modal.component */ "./src/app/components/order-detail-modal/order-detail-modal.component.ts");
/* harmony import */ var _components_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/order-cancel-modal/order-cancel-modal.component */ "./src/app/components/order-cancel-modal/order-cancel-modal.component.ts");
/* harmony import */ var _components_node_server_node_server_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/node-server/node-server.component */ "./src/app/components/node-server/node-server.component.ts");
/* harmony import */ var _components_network_settings_network_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/network-settings/network-settings.component */ "./src/app/components/network-settings/network-settings.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_ng_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _components_trade_history_trade_history_component__WEBPACK_IMPORTED_MODULE_14__["TradeHistoryComponent"],
                _components_order_detail_modal_order_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailModalComponent"],
                _components_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderCancelModalComponent"],
                _components_node_server_node_server_component__WEBPACK_IMPORTED_MODULE_17__["NodeServerComponent"],
                _components_network_settings_network_settings_component__WEBPACK_IMPORTED_MODULE_18__["NetworkSettingsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_6__["WalletModule"],
                _components_market_market_module__WEBPACK_IMPORTED_MODULE_7__["MarketModule"],
                _components_client_client_module__WEBPACK_IMPORTED_MODULE_8__["ClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot()
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span *ngIf=\"isNew\" >New</span>\r\n\t\t<span *ngIf=\"!isNew\">Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Client</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Client</h4>\r\n\t\t<div class=\"error-message-container\">\r\n\t\t<span class=\"error\" *ngFor = \"let item of formErrors | keyvalue\"> {{item.value}} </span>\r\n\t\t</div>\r\n\t\t<ul class=\"nav nav-tabs form-tabs\" id=\"client-form-tabs\" role=\"tablist\">\r\n\t\t\t<li [ngClass]=\"{'active': tabCount>=1}\" class=\"nav-item active\" (click)='onTabChange(1)'>\r\n\t\t\t\t<a class=\"nav-link active\" id=\"client-basic-tab\" data-toggle=\"tab\" href=\"#client-basic\" role=\"tab\" aria-controls=\"client-basic\" aria-selected=\"true\">General</a>\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': tabCount>=2}\" class=\"nav-item\" (click)='onTabChange(2)' >\r\n\t\t\t\t<a class=\"nav-link\" id=\"client-address-tab\" data-toggle=\"tab\" href=\"#client-address\" role=\"tab\" aria-controls=\"client-address\" aria-selected=\"true\">Address</a>\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': tabCount>=3}\" class=\"nav-item\" (click)='onTabChange(3)'>\r\n\t\t\t\t<a class=\"nav-link\" id=\"client-contact-tab\" data-toggle=\"tab\" href=\"#client-contact\" role=\"tab\" aria-controls=\"client-contact\" aria-selected=\"true\">Contact</a>\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': tabCount>=4}\" class=\"nav-item\" (click)='onTabChange(4)'>\r\n\t\t\t\t<a class=\"nav-link\" id=\"client-misc-tab\" data-toggle=\"tab\" href=\"#client-misc\" role=\"tab\" aria-controls=\"client-misc\" aria-selected=\"true\">Miscellaneous</a>\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': tabCount>=5}\" class=\"nav-item\" (click)='onTabChange(5)'>\r\n\t\t\t\t<a class=\"nav-link\" id=\"client-login-tab\" data-toggle=\"tab\" href=\"#client-login\" role=\"tab\" aria-controls=\"client-login\" aria-selected=\"true\">User Login</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<!-- general-settings form -->\r\n\t\t<form  *ngIf=\"tabId == 1\" [formGroup]=\"clientForm\" class=\"form-horizontal\"  method=\"POST\">\r\n\r\n\t\t\t<div class=\"tab-content\" id=\"client-form-tabs-content\">\r\n\t\t\t\t<div class=\" active in\" id=\"client-basic\" role=\"tabpanel\" aria-labelledby=\"client-basic-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-username\">Client Code:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Client Code\" type=\"text\" formControlName=\"client_code\" class=\"form-control\" id=\"client_code\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['client_code']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-type\">Client Type:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Client Type\" type=\"text\" formControlName=\"client_type\" class=\"form-control\" id=\"client-type\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['client_type']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-name-en\">Client Name EN: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Client Name EN\" type=\"text\" formControlName=\"client_name_en\" class=\"form-control\" id=\"client-name-en\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['client_name_en']}}</span></div> -->\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-name-ja\">Client Name JA: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Client Name JA\" type=\"text\" formControlName=\"client_name_ja\" class=\"form-control\" id=\"client-name-ja\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['client_name_ja']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t<button *ngIf='!isNew' type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t\t<button *ngIf='isNew' (click)=\"onNextBtnClick(2)\" type=\"button\" class=\"btn btn-primary\">Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t</form>\r\n\r\n\t\t<!-- address-info form -->\r\n\t\t<form *ngIf=\"tabId == 2\" [formGroup]=\"addressForm\" class=\"form-horizontal\"  method=\"POST\">\r\n\t\t\t<div class=\"\" id=\"client-address\" role=\"tabpanel\" aria-labelledby=\"client-address-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"address-1\">Address Line 1: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Address 1\" type=\"text\" formControlName=\"address_line1\" class=\"form-control\" id=\"address1\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['address_line1']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"address-2\">Address Line 2:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Address 2\" type=\"text\" formControlName=\"address_line2\" class=\"form-control\" id=\"address2\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['address_line2']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"zip-code\">Zip Code:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Zip Code\" type=\"text\" formControlName=\"zip_code\" class=\"form-control\" id=\"zip-code\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['zip_code']}}</span></div> -->\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"city\">City:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"City\" type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['city']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">State:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"State\" type=\"text\" formControlName=\"state\" class=\"form-control\" id=\"state\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['state']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Country:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select type=\"text\" formControlName=\"country\" class=\"form-control\" id=\"country\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" label=\"Select a Country\"></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of country\" [value]=\"item.country_code\">{{item.country_name}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['country']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t\t<button *ngIf='!isNew' type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t\t\t<button *ngIf='isNew' (click)=\"onNextBtnClick(3)\" type=\"button\" class=\"btn btn-primary\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t</form>\r\n\r\n\t\t<!-- contact-info form -->\r\n\t\t<form *ngIf=\"tabId == 3\"[formGroup]=\"contactForm\" class=\"form-horizontal\"  method=\"POST\">\r\n\t\t\t<div class=\"\" id=\"client-contact\" role=\"tabpanel\" aria-labelledby=\"client-contact-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Phone:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Phone Number\" type=\"text\" formControlName=\"phone_no\" class=\"form-control\" id=\"phone\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['phone_no']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Mobile:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Mobile Number\" type=\"text\" formControlName=\"mobile_no\" class=\"form-control\" id=\"mobile\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['mobile_no']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Fax:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Fax\" type=\"text\" formControlName=\"fax\" class=\"form-control\" id=\"fax\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['fax']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Email: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Email\" type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['email']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Homepage Url:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Homepage Url\" type=\"text\" formControlName=\"homepage_url\" class=\"form-control\" id=\"url\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['homepage_url']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Contact Person:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Contact Person\" type=\"text\" formControlName=\"contact_person\" class=\"form-control\" id=\"contact-person\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['contact_person']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Contact Person Phone:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Contact Person's Phone\" type=\"text\" formControlName=\"contact_person_phone_no\" class=\"form-control\" id=\"contact-person-phone\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['contact_person_phone_no']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Contact Person Email:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Contact Person's Email\" type=\"text\" formControlName=\"contact_person_email\" class=\"form-control\" id=\"contact-person-email\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['contact_person_email']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t\t<button *ngIf='!isNew' type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t\t\t<button *ngIf='isNew' (click)=\"onNextBtnClick(4)\" type=\"button\" class=\"btn btn-primary\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t</form>\r\n\r\n\t\t<!-- miscellaneous-info form -->\r\n\t\t<form *ngIf=\"tabId == 4\" [formGroup]=\"miscForm\" class=\"form-horizontal\"  method=\"POST\">\r\n\t\t\t<div class=\"\" id=\"client-misc\" role=\"tabpanel\" aria-labelledby=\"client-misc-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-addr2\">Default Wallet: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select type=\"text\" formControlName=\"default_wallet_id\" class=\"form-control\" id=\"default_wallet_id\">\r\n\t\t\t\t\t\t\t\t<option  *ngFor=\"let item of walletList\" [value]=\"item.id\" >{{item.code}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['default_wallet_id']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\">Status: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['status']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"state\">Trade Click Limit <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Trade Click Limit\" type=\"number\" min=\"1\" formControlName=\"trade_click_limit\" class=\"form-control\" id=\"trade_click_limit\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['trade_click_limit']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"enble-single-trade\">Enable Single Trade: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"single_trade\">\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['single_trade']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"enable-single-trade\">Enable Trade Amout Click Sound: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"enable_trade_amout_click_sound\">\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['enable_trade_amout_click_sound']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"enable-alert-sound\">Enable Alert Sound: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"enable_alert_sound\">\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['enable_alert_sound']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"enable-trade-confirmation-modal\">Enable Trade Confirmation Modal: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"enable_trade_confirmation_modal\">\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['enable_trade_confirmation_modal']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"enble-single-trade\">Enable Minimum Spread Sound: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"enable_min_spred_sound\">\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['enable_min_spred_sound']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"default-theme\">Default Theme: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select type=\"text\" formControlName=\"default_theme\" class=\"form-control\" id=\"default_theme\">\r\n\t\t\t\t\t\t\t\t<option  *ngFor=\"let item of defaultTheme\" [value]=\"item.id\" >{{item.code}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['default_theme']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t\t<button *ngIf='!isNew' type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t\t\t<button *ngIf='isNew' (click)=\"onNextBtnClick(5)\" type=\"button\" class=\"btn btn-primary\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t</form>\r\n\r\n\t\t<!-- login-setting form -->\r\n\t\t<form *ngIf=\"tabId == 5\" [formGroup]=\"loginForm\" class=\"form-horizontal\"  method=\"POST\">\r\n\t\t\t<div class=\"\" id=\"client-login\" role=\"tabpanel\" aria-labelledby=\"client-login-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-username\">Username: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Username\" type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"client-username\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['username']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"client-type\">Password:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Password\" type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"client-password\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\">{{formErrors['password']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</form>\r\n\t\t<hr>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-md-offset-3 col-md-9\">\r\n\t\t\t\t<button *ngIf=\"!isNew || tabId == 5\" type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t<button *ngIf=\"isNew && tabId !=5\" type=\"button\" class=\"btn btn-primary\" (click)=\"onNextBtnClick()\">Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/client/client-form/client-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/client/client-form/client-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function() { return ClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientFormComponent = /** @class */ (function () {
    function ClientFormComponent(router, walletApi, clientApi, route, fb) {
        this.router = router;
        this.walletApi = walletApi;
        this.clientApi = clientApi;
        this.route = route;
        this.fb = fb;
        this.isNew = true;
        this.formErrors = {};
        this.walletList = [];
        this.defaultTheme = [];
        this.tabId = 1;
        this.tabCount = 1;
    }
    ClientFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
            this.clientApi.getCountryList().subscribe(function (result) {
                _this.country = result['data'];
            });
            this.getWalletList();
            this.getDefaultTheme();
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                this.clientApi.getEntyData(id, 'client').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        data['password'] = "";
                        _this.setFormValues(data);
                        // this.clientForm.setValue(data);
                        _this.country = result['country_list'];
                        _this.getWalletList();
                        _this.getDefaultTheme();
                    }
                    else {
                        _this.router.navigate(['/client/list']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    ClientFormComponent.prototype.setFormValues = function (data) {
        this.clientForm.controls['id'].setValue(data['id']);
        this.clientForm.controls['client_code'].setValue(data['client_code']);
        this.clientForm.controls['client_type'].setValue(data['client_type']);
        this.clientForm.controls['client_name_en'].setValue(data['client_name_en']);
        this.clientForm.controls['client_name_ja'].setValue(data['client_name_ja']);
        this.addressForm.controls['address_line1'].setValue(data['address_line1']);
        this.addressForm.controls['address_line2'].setValue(data['address_line2']);
        this.addressForm.controls['zip_code'].setValue(data['zip_code']);
        this.addressForm.controls['city'].setValue(data['cityline']);
        this.addressForm.controls['state'].setValue(data['state_line1']);
        this.addressForm.controls['country'].setValue(data['country']);
        this.contactForm.controls['phone_no'].setValue(data['phone_no']);
        this.contactForm.controls['mobile_no'].setValue(data['mobile_no']);
        this.contactForm.controls['fax'].setValue(data['fax']);
        this.contactForm.controls['email'].setValue(data['email']);
        this.contactForm.controls['homepage_url'].setValue(data['homepage_url']);
        this.contactForm.controls['contact_person'].setValue(data['contact_person']);
        this.contactForm.controls['contact_person_phone_no'].setValue(data['contact_person_phone_no']);
        this.contactForm.controls['contact_person_email'].setValue(data['contact_person_email']);
        this.miscForm.controls['status'].setValue(data['status']);
        this.miscForm.controls['min_spred_percent'].setValue(data['min_spred_percent']);
        this.miscForm.controls['default_wallet_id'].setValue(data['default_wallet_id']);
        this.miscForm.controls['trade_click_limit'].setValue(data['trade_click_limit']);
        this.miscForm.controls['single_trade'].setValue(data['single_trade']);
        this.miscForm.controls['enable_trade_amout_click_sound'].setValue(data['enable_trade_amout_click_sound']);
        this.miscForm.controls['enable_alert_sound'].setValue(data['enable_alert_sound']);
        this.miscForm.controls['enable_min_spred_sound'].setValue(data['enable_min_spred_sound']);
        this.miscForm.controls['enable_trade_confirmation_modal'].setValue(data['enable_trade_confirmation_modal']);
        this.miscForm.controls['default_theme'].setValue(data['default_theme']);
        this.loginForm.controls['username'].setValue(data['username']);
    };
    ClientFormComponent.prototype.getWalletList = function () {
        var _this = this;
        var params = { 'pnl_id': 2 };
        this.walletApi.getWalletList(params).subscribe(function (result) {
            _this.walletList = result['data'];
        });
    };
    ClientFormComponent.prototype.getDefaultTheme = function () {
        this.defaultTheme = _config_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_THEME"];
    };
    ClientFormComponent.prototype.createForm = function () {
        this.clientForm = this.fb.group({
            id: [''],
            client_code: [''],
            client_type: [''],
            client_name_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            client_name_ja: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.addressForm = this.fb.group({
            address_line1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address_line2: [''],
            zip_code: [''],
            city: [''],
            state: [''],
            country: ['']
        });
        this.contactForm = this.fb.group({
            phone_no: [''],
            mobile_no: [''],
            fax: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            homepage_url: [''],
            contact_person: [''],
            contact_person_phone_no: [''],
            contact_person_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
        });
        this.miscForm = this.fb.group({
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            min_spred_percent: [''],
            default_wallet_id: [_config_constant__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_WALLET_ID"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trade_click_limit: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9\.]/)]],
            single_trade: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enable_trade_amout_click_sound: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enable_alert_sound: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // enable_error_sound            : ['0',Validators.required],
            enable_min_spred_sound: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enable_trade_confirmation_modal: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            default_theme: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [''],
        });
    };
    ClientFormComponent.prototype.onTabChange = function (tabId) {
        if (this.isNew) {
            if (this.tabCount >= tabId) {
                this.tabId = tabId;
            }
        }
        else {
            this.tabId = tabId;
        }
    };
    ClientFormComponent.prototype.resetFormErrors = function () {
        if (this.clientForm.valid || this.addressForm.valid || this.contactForm.valid || this.miscForm.valid || this.loginForm.valid) {
            this.formErrors = [];
        }
    };
    ClientFormComponent.prototype.onNextBtnClick = function () {
        this.resetFormErrors();
        if (this.tabId == 1) {
            if (!this.clientForm.valid) {
                this.formErrors = {};
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.clientForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.tabCount = this.tabId;
            }
        }
        else if (this.tabId == 2) {
            if (!this.addressForm.valid) {
                this.formErrors = {};
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.addressForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.tabCount = this.tabId;
            }
        }
        else if (this.tabId == 3) {
            if (!this.contactForm.valid) {
                this.formErrors = {};
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.contactForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.tabCount = this.tabId;
            }
        }
        else if (this.tabId == 4) {
            if (!this.miscForm.valid) {
                this.formErrors = {};
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.miscForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.tabCount = this.tabId;
            }
        }
    };
    ClientFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        this.formErrors = {};
        if (!this.clientForm.valid) {
            this.setFormErrorsMsg(this.clientForm);
            return;
        }
        if (!this.addressForm.valid) {
            this.setFormErrorsMsg(this.addressForm);
            return;
        }
        if (!this.contactForm.valid) {
            this.setFormErrorsMsg(this.contactForm);
            return;
        }
        if (!this.miscForm.valid) {
            this.setFormErrorsMsg(this.miscForm);
            return;
        }
        if (!this.loginForm.valid) {
            this.setFormErrorsMsg(this.loginForm);
            return;
        }
        // else{
        var body = {
            // 'Client[id]'                         :this.clientForm.value.id,
            'Client[client_code]': this.clientForm.value.client_code,
            'Client[client_type]': this.clientForm.value.client_type,
            'Client[client_name_en]': this.clientForm.value.client_name_en,
            'Client[client_name_ja]': this.clientForm.value.client_name_ja,
            'Client[address_line1]': this.addressForm.value.address_line1,
            'Client[address_line2]': this.addressForm.value.address_line2,
            'Client[zip_code]': this.addressForm.value.zip_code,
            'Client[city]': this.addressForm.value.city,
            'Client[state]': this.addressForm.value.state,
            'Client[country]': this.addressForm.value.country,
            'Client[phone_no]': this.contactForm.value.phone_no,
            'Client[mobile_no]': this.contactForm.value.mobile_no,
            'Client[fax]': this.contactForm.value.fax,
            'Client[email]': this.contactForm.value.email,
            'Client[homepage_url]': this.contactForm.value.homepage_url,
            'Client[contact_person]': this.contactForm.value.contact_person,
            'Client[contact_person_phone_no]': this.contactForm.value.contact_person_phone_no,
            'Client[contact_person_email]': this.contactForm.value.contact_person_email,
            'Client[is_locked]': this.miscForm.value.status ? 0 : 1,
            'Client[username]': this.loginForm.value.username,
            'Client[default_wallet_id]': this.miscForm.value.default_wallet_id,
            'Client[trade_click_limit]': this.miscForm.value.trade_click_limit,
            'Client[enable_single_trade]': this.miscForm.value.single_trade ? 1 : 0,
            'Client[enable_trade_amout_click_sound]': this.miscForm.value.enable_trade_amout_click_sound ? 1 : 0,
            'Client[enable_alert_sound]': this.miscForm.value.enable_alert_sound ? 1 : 0,
            'Client[enable_trade_confirmation_modal]': this.miscForm.value.enable_trade_confirmation_modal ? 1 : 0,
            'Client[enable_min_spred_sound]': this.miscForm.value.enable_min_spred_sound ? 1 : 0,
            'Client[default_theme]': this.miscForm.value.default_theme
            // 'Client[password]'                   :this.clientForm.value.password
        };
        if (!this.isNew) {
            body['Client[id]'] = this.clientForm.value.id;
        }
        if (this.loginForm.value.password.length > 0) {
            body['Client[password]'] = this.loginForm.value.password;
        }
        this.clientApi.clientSave(body).subscribe(function (response) {
            if (response['success']) {
                _this.router.navigate(['client/list']);
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
                if (response['errors']) {
                    Object.assign(_this.formErrors, response['errors']);
                }
            }
        });
        // }
    };
    ClientFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/client/list']);
            }
            else {
                // debugger;
            }
        });
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Set error message for timeShift and jobType if those fields are invalid
     */
    ClientFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.clientForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = key + ' can not be blank.';
                }
                else if (obj.hasOwnProperty('email')) {
                    this.formErrors[key] = 'Please Enter a valid email address.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = key + ' value must be greater than ' + obj['min']['min'] + '.';
                }
                else {
                }
            }
        }
    };
    ClientFormComponent.prototype.setFormErrorsMsg = function (form) {
        var errors = this.getFormErrors(form);
        for (var key in errors) {
            if (errors[key] != null) {
                var label = key.replace(/[_]/g, ' ');
                label = label.toLowerCase()
                    .split(' ')
                    .map(function (s) { return s.charAt(0).toUpperCase() + s.substring(1); })
                    .join(' ');
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = label + ' can not be blank.';
                }
                else if (obj.hasOwnProperty('email')) {
                    this.formErrors[key] = 'Please enter a valid email address.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = label + ' value must be greater than ' + obj['min']['min'] + '.';
                }
                else {
                }
            }
        }
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Fetch all form errors
     * @param {FormGroup} formGroup [Staff Detail Form]
     * @returns {[Object]} errors
     */
    ClientFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    ClientFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-form',
            template: __webpack_require__(/*! ./client-form.component.html */ "./src/app/components/client/client-form/client-form.component.html"),
            styles: [__webpack_require__(/*! ./client-form.component.css */ "./src/app/components/client/client-form/client-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientFormComponent);
    return ClientFormComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-row td {\r\n\tbackground: #ccc;\r\n}"

/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>List</span>\r\n\t</div>\r\n</div>\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"status-index\">\r\n\t\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t\t<span class=\"unpublished\">Inactive</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\" datatable [dtOptions]=\"dtOptions\" id=\"client-table\">\r\n\t\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t\t<col width=\"100px\">\r\n\t\t\t\t\t\t\t<col width=\"90px\">\r\n\t\t\t\t\t\t\t<col width=\"130px\">\r\n\t\t\t\t\t\t\t<col width=\"130px\">\r\n\t\t\t\t\t\t\t<col width=\"70px\">\r\n\t\t\t\t\t\t\t<col width=\"80px\">\r\n\t\t\t\t\t\t\t<col width=\"175px\">\r\n\t\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<!-- <thead> -->\r\n\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t<th style=\"width: 20px;\"><input type=\"checkbox\" class=\"select-all\"><label class=\"select-area head\"></label></th>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">UserName</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bid-notifier head\">Client Type</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">Client Name EN</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Client Name JA</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Status</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t<!-- </thead> -->\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr (click)=\"onClientSelect(list.id,indx)\"  *ngFor=\"let list of clientList;let indx = index\" class=\"entry-row\" [class.active-row]=\"indx == activeRowIdx\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t<!-- <td><span class=\"select-area\"><input type=\"checkbox\" ></span></td> -->\r\n\t\t\t\t\t\t\t<td>{{list.username}}</td>\r\n\t\t\t\t\t\t\t<td>{{list.client_type}}</td>\r\n\t\t\t\t\t\t\t<td>{{list.client_name_en}}</td>\r\n\t\t\t\t\t\t\t<td>{{list.client_name_ja}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"list.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffClientStatusChange(list.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffClientStatusChange(list.id)\">\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>{{list.trade_counter}}/{{list.trade_click_limit}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(list.id)\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"delete(list.id)\" ><i class=\"fa fa-trash\"></i></button>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Client Wallet\" (click)=\"walletlist(list.id)\"><i class=\"fa fa-briefcase\" style=\"font-size:16px\"></i></button>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Client Market\" (click)=\"marketlist(list.id)\"><i class=\"fa fa-university\" style=\"font-size:16px\"></i></button>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Client Market Wallet\" (click)=\"marketWalletlist(list.id)\"><i class=\"fa fa-credit-card\" style=\"font-size:16px\"></i></button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"width: 100%\"><input type=\"text\" name=\"username\" class=\"filter-input\"></td>\r\n\t\t\t\t\t\t\t<td style=\"width: 100%\"><input type=\"text\" name=\"client_type\" class=\"filter-input\"></td>\r\n\t\t\t\t\t\t\t<td style=\"width: 100%\"><input type=\"text\" name=\"client_name_en\" class=\"filter-input\"></td>\r\n\t\t\t\t\t\t\t<td style=\"width: 100%\"><input type=\"text\" name=\"client_name_ja\" class=\"filter-input\"></td>\r\n\t\t\t\t\t\t\t<td style=\"width: 100%\">\r\n\t\t\t\t\t\t\t\t<select name=\"is_locked\" class=\"filter-input is_locked\" style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let item of client_status | keyvalue\"  value=\"{{item.key}}\">{{item.value}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<td style=\"width: 100%\"><input type=\"text\" name=\"trade_count\" class=\"filter-input\"></td>\r\n\t\t\t\t\t\t\t\t<td style=\"width: 100%\"></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3 client-market-wallet-records pl-0\">\r\n\t\t\t<div class=\"client-market-list-container\">\r\n\t\t\t\t<div class=\"market-view\">\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#markets\"><i class=\"fa fa-briefcase\"></i> Wallets</a></li>\r\n\t\t\t\t\t\t<!-- <li><a data-toggle=\"tab\" href=\"#Wallet\">Wallet</a></li> -->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<div id=\"markets\" class=\"tab-pane fade in active\">\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 60px;\"><label class=\"crypt-market-img head\">Code</label></th>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"ask-notifier head\">Name</label></th>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 40px;\"><label class=\"ask-notifier head\">Status</label></th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<!-- <ng-template *ngFor=\"let item of walletList;\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"item.length == 0\"> No results </div>\r\n\t\t\t\t\t\t\t\t\t</ng-template> -->\r\n\t\t\t\t\t\t\t\t\t<tr *ngIf=\"walletList.length == 0 && showLoadingGIf == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">No Records</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr *ngIf=\"showLoadingGIf == true\">\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\"><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<ng-template ngFor let-list [ngForOf]= \"walletList\" let-indx=\"index\" *ngIf=\"showLoadingGIf == false\"> \r\n\t\t\t\t\t\t\t\t\t\t<tr style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{list.name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{list.name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"d-none\">{{list.is_locked}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"list.is_locked == 0; else offExchangeMarket\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffClientWalletStatusChange(list.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #offExchangeMarket>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffClientWalletStatusChange(list.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div id=\"Wallet\" class=\"tab-pane fade\">\r\n\t\t\t\t\t\t\t<p>Wallet Page</p>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"client-market-list-container mt-15\">\r\n\t\t\t\t<div class=\"market-view\">\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#markets\"><i class=\"fa fa-university\"></i> Markets</a></li>\r\n\t\t\t\t\t\t<!-- <li><a data-toggle=\"tab\" href=\"#Wallet\">Wallet</a></li> -->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<div id=\"markets\" class=\"tab-pane fade in active\">\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 60px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"ask-notifier head\">Country</label></th>\r\n\t\t\t\t\t\t\t\t\t\t<th style=\"width: 40px;\"><label class=\"ask-notifier head\">Status</label></th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngIf=\"marketList.length == 0 && showLoadingGIf == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">No Records</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<!-- <ng-template *ngIf=\"marketList.length == 0\">\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"showLoadingGIf == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">No Records</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</ng-template> -->\r\n\t\t\t\t\t\t\t\t\t<tr *ngIf=\"showLoadingGIf == true\">\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\"><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<ng-template ngFor let-list [ngForOf]= \"marketList\" let-indx=\"index\" *ngIf=\"showLoadingGIf == false\"> \r\n\t\t\t\t\t\t\t\t\t\t<tr style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td><img src=\"{{clientApi.BASE_URL}}images/{{list.image}}\" alt=\"{{list.code}}\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><img src=\"{{clientApi.BASE_URL}}images/flags/{{list.country}}.png\" alt=\"{{list.country}}\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"list.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffClientMarketStatusChange(list.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffClientMarketStatusChange(list.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div id=\"Wallet\" class=\"tab-pane fade\">\r\n\t\t\t\t\t\t\t<p>Wallet Page</p>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-list/client-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/client/client-list/client-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(router, route, clientApi) {
        this.router = router;
        this.route = route;
        this.clientApi = clientApi;
        this.clientList = [];
        this.marketList = [];
        this.walletList = [];
        this.sColumn = null;
        this.activeRowIdx = 0;
        this.mask_txt = "Loading...";
        this.showLoadingGIf = true;
        this.client_status = Orbit['CLIENT_LOCKED_STATUS'];
        this.dtOptions = {};
        this.cols = [
            { title: 'User Name', data: 'username' },
            { title: 'Client Type', data: 'client_type' },
            { title: 'Client Name EN', data: 'client_name_en' },
            { title: 'Client Name JA', data: 'client_name_ja' },
            { title: 'Status', data: 'is_locked', sortable: false },
            { title: 'Trade Count', data: 'trade_counter' },
            { title: 'Action', data: 'id', sortable: false }
        ];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.route.snapshot.routeConfig.path);
        var me = this;
        // this.getClientList();
        this.dtOptions = {
            pagingType: 'simple_numbers',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_4__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            bLengthChange: true,
            aaSorting: [[3, "desc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "search": " ",
                "emptyTable": "No records found",
                "lengthMenu": "Page Size _MENU_ "
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (tablesParameters, callback) {
                tablesParameters.pnl_id = 1;
                $('.filter-input').on('keyup change', function (e) {
                    me.sColumn = e.target.name;
                });
                tablesParameters['sColumn'] = _this.sColumn;
                _this.activeRowIdx = 0;
                _this.clientApi.getClientList(tablesParameters).subscribe(function (res) {
                    _this.clientList = res.data;
                    if (res.data.length != 0) {
                        _this.selectedClient = res.data[0].id;
                    }
                    else {
                        _this.selectedClient = 0;
                    }
                    _this.showLoadingGIf = true;
                    _this.getClientWallet();
                    _this.getClientMarket();
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                    $('#client-table tfoot tr').appendTo('#client-table thead');
                });
            },
            columns: this.cols
        };
    };
    ClientListComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        this.datatablesFilterProcessing();
    };
    ClientListComponent.prototype.getClientWallet = function () {
        var _this = this;
        this.showLoadingGIf = true;
        var params = {
            client_id: this.selectedClient,
            pnl_id: 1
        };
        this.clientApi.getClientWallet(params).subscribe(function (response) {
            _this.walletList = response['data'];
            _this.showLoadingGIf = false;
        });
    };
    ClientListComponent.prototype.getClientMarket = function () {
        var _this = this;
        this.showLoadingGIf = true;
        var params = {
            client_id: this.selectedClient,
            pnl_id: 1
        };
        this.clientApi.getClientMarket(params).subscribe(function (response) {
            _this.marketList = response['data'];
            _this.showLoadingGIf = false;
        });
    };
    ClientListComponent.prototype.datatablesFilterProcessing = function () {
        var me = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        if (that.search() !== this['value']) {
                            // me.search['type'] = me.sColumn == 'trade_base_amount' || me.sColumn == 'spred_percent'? 'num' : null;
                            that
                                .search(this['value'])
                                .draw();
                        }
                    }
                    else if (e.keyCode == 8 || e.keyCode == 48) {
                        if ((this['value']) == '') {
                            //reload datatable
                            dtInstance
                                .cell(that)
                                .search('')
                                .draw();
                        }
                    }
                });
                $('.is_locked', this.footer()).on('change', function (e) {
                    if (that.search() !== this['value']) {
                        // me.search['type'] = me.sColumn == 'trade_base_amount' || me.sColumn == 'spred_percent'? 'num' : null;
                        that
                            .search(this['value'])
                            .draw();
                    }
                    // if(e.keyCode == 13){
                    // }else if(e.keyCode == 8 || e.keyCode == 48){
                    //   if((this['value']) == ''){
                    //     //reload datatable
                    //     dtInstance
                    //       .cell(that)
                    //       .search('')
                    //       .draw();
                    //   }
                    // }
                });
            });
        });
    };
    ClientListComponent.prototype.onDatatableReload = function () {
        // me.sColumn = $(this).attr('name');
        $('#client-table').DataTable().draw();
    };
    ClientListComponent.prototype.getClientList = function () {
        var _this = this;
        var params = { pnl_id: 1 };
        this.clientApi.getClientList(params).subscribe(function (res) {
            _this.clientList = res["data"];
        });
    };
    ClientListComponent.prototype.edit = function (id) {
        this.router.navigate(["client/edit/" + id]);
    };
    ClientListComponent.prototype.walletlist = function (id) {
        this.router.navigate(["client/walletList/" + id]);
    };
    ClientListComponent.prototype.marketlist = function (id) {
        this.router.navigate(["client/marketList/" + id]);
    };
    ClientListComponent.prototype.marketWalletlist = function (id) {
        this.router.navigate(["client/marketWalletList/" + id]);
    };
    ClientListComponent.prototype.delete = function (id) {
        var me = this;
        var message = "Do you want to delete this record?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.clientApi.deleteClient(id).subscribe(function (response) {
                    if (response['success'] == true) {
                        // me.getClientList();
                        me.reloadDataTable();
                        alertify.success(response['message']);
                    }
                    else {
                        alertify.error(response['message']);
                    }
                });
            }
            else {
                // debugger;
            }
        });
    };
    ClientListComponent.prototype.onClientSelect = function (id, indx) {
        this.selectedClient = id;
        this.activeRowIdx = indx;
        this.showLoadingGIf = true;
        this.getClientWallet();
        this.getClientMarket();
    };
    ClientListComponent.prototype.onOffClientStatusChange = function (id) {
        var controllerName = 'client';
        var me = this;
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
                // this.getClientWallet();
                // this.getClientMarket();
                //me.reloadDataTable();
            }
            else {
                alertify.error(res['message']);
                // this.getClientList();
            }
        });
    };
    ClientListComponent.prototype.onOffClientWalletStatusChange = function (id) {
        var controllerName = 'client-wallet';
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (response) {
            if (response['success'] == true) {
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
        });
    };
    ClientListComponent.prototype.onOffClientMarketStatusChange = function (id) {
        var controllerName = 'client-market';
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
            }
        });
    };
    ClientListComponent.prototype.reloadDataTable = function () {
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a) === "function" && _a || Object)
    ], ClientListComponent.prototype, "datatableElement", void 0);
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/components/client/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.css */ "./src/app/components/client/client-list/client-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientListComponent);
    return ClientListComponent;
    var _a;
}()); // CLOSE COMPONENT



/***/ }),

/***/ "./src/app/components/client/client-market-form/client-market-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/client/client-market-form/client-market-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client-market-form/client-market-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/client/client-market-form/client-market-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client/marketList']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Client Market</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Client Market</h4>\r\n\t\t<form [formGroup]=\"clientForm\" class=\"form-horizontal\"  method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Client:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"client_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedClient\" [value]=\"item.id\">{{item.client_name_en}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Market:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"market_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedMarket\" [value]=\"item.id\">{{item.code}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\">Status:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-market-form/client-market-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/client/client-market-form/client-market-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientMarketFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMarketFormComponent", function() { return ClientMarketFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientMarketFormComponent = /** @class */ (function () {
    function ClientMarketFormComponent(router, clientApi, route, fb) {
        this.router = router;
        this.clientApi = clientApi;
        this.route = route;
        this.fb = fb;
        this.formErrors = {};
        this.isNew = true;
    }
    ClientMarketFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                this.clientApi.getEMarketEdit(id, 'client').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        _this.clientForm.setValue(data);
                        _this.selectedClient = result['client_list']['data'];
                        _this.selectedMarket = result['market_list']['data'];
                    }
                    else {
                        _this.router.navigate(['/client/marketList']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    ClientMarketFormComponent.prototype.createForm = function () {
        this.clientForm = this.fb.group({
            id: [''],
            client_id: [''],
            market_id: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ClientMarketFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        if (!this.clientForm.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var body = {
                'Client[id]': me.clientForm.value.id,
                'Client[client_id]': me.clientForm.value.client_id,
                'Client[market_id]': me.clientForm.value.market_id,
                'Client[is_locked]': me.clientForm.value.status ? 0 : 1
            };
            if (!this.isNew) {
                body['Client[id]'] = me.clientForm.value.id;
            }
            this.clientApi.saveMarket(body).subscribe(function (response) {
                if (response['success']) {
                    _this.router.navigate(['client/marketList']);
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                }
            });
        }
    };
    ClientMarketFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.clientForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
            }
        }
    };
    ClientMarketFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    ClientMarketFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/client/marketList']);
            }
            else {
                // debugger;
            }
        });
    };
    ClientMarketFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-market-form',
            template: __webpack_require__(/*! ./client-market-form.component.html */ "./src/app/components/client/client-market-form/client-market-form.component.html"),
            styles: [__webpack_require__(/*! ./client-market-form.component.css */ "./src/app/components/client/client-market-form/client-market-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientMarketFormComponent);
    return ClientMarketFormComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-market-list/client-market-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/client/client-market-list/client-market-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-row {\r\n    background-color: #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/components/client/client-market-list/client-market-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/client/client-market-list/client-market-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Market List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\" style=\"float: right\">\r\n\t\t\t<button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveClientMarket()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t<div class=\"status-index\">\r\n\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\" datatable [dtOptions]=\"dtOptions\" id=\"client-table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<!-- <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client</label></th> -->\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_txt\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of clientList;let indx = index\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\" class=\"entry-row\" [class.active-row]=\"indx == activeRowIdx\" (click)=\"onClientItemClick(item,indx)\">{{item.client_name_en}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" name=\"client-name\" id='client-name'></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<!-- <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveClientMarket()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t\t\t<div class=\"status-index\">\r\n\t\t\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n\t\t\t\t\t\t\t<!-- \t<th style=\"width: 110px;\"><label class=\"bid-notifier head\">Btc Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">ETH Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">JPY Balance</label></th> -->\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Status</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"clientMarketlist.length == 0 && showClientMarketGif ==false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"4\">No Records</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"showClientMarketGif == true\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"4\"><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-template ngFor let-item [ngForOf]= \"clientMarketlist\" let-indx=\"index\">\r\n\t\t\t\t\t\t\t<tr *ngIf=\"item.is_deleted!=1 && showClientMarketGif == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td>{{item.client_name_en}}</td>\r\n\t\t\t\t\t\t\t\t<td><img src=\"{{marketApi.BASE_URL}}images/{{item.image}}\" alt=\"{{item.code}}\"></td>\r\n\t\t\t\t\t\t\t\t<!-- <td>{{item.btc_balance}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.eth_balance}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.jpy_balance}}</td> -->\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(item.id)\" ><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"deleteItem(indx)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market List</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_txt\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of marketList;let indx = index\" style=\"text-align: left\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\"><button class=\"btn btn-secondary bnt-sm\" (click)=\"moveMarketWallet(item)\"><i class=\"fa fa-caret-left\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<span>{{item.market_name_en}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/client/client-market-list/client-market-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/client/client-market-list/client-market-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientMarketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMarketListComponent", function() { return ClientMarketListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientMarketListComponent = /** @class */ (function () {
    function ClientMarketListComponent(route, path, clientApi, marketApi) {
        this.route = route;
        this.path = path;
        this.clientApi = clientApi;
        this.marketApi = marketApi;
        this.clientMarketlist = [];
        this.moveClientMarketlist = [];
        this.clientList = [];
        this.marketList = [];
        this.selectedClient = {};
        this.activeRowIdx = 0;
        this.mask_txt = 'Loading...';
        this.dtOptions = {};
        this.cols = [
            { title: 'Id', data: 'id', visible: false },
            { title: 'Client', data: 'client_name_en' }
        ];
    }
    ClientMarketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getClientMasterList();
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_6__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            bInfo: false,
            bLengthChange: true,
            aaSorting: [[0, "desc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "emptyTable": "No records found",
                "search": " ",
                "paginate": {
                    "previous": "<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>",
                    "next": "<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"
                },
                "lengthMenu": "Page Size _MENU_ ",
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters['pnl_id'] = 2;
                if (_this.path.snapshot.params.id) {
                    var id = _this.path.snapshot.params.id;
                    dataTablesParameters['id'] = parseInt(id);
                }
                // let params:any = {pnl_id : 2};
                _this.clientApi.getClientList(dataTablesParameters).subscribe(function (res) {
                    _this.selectedClient['id'] = 0;
                    _this.clientList = res['data'];
                    _this.selectedClient = res['data'].length > 0 ? res['data'][0] : {};
                    _this.showLoadingGIf = false;
                    _this.getClientMarketList();
                    // if(res['data'].length != 0){
                    //   if (this.path.snapshot.params.id)
                    //   {
                    //     let id = this.path.snapshot.params.id;
                    //     this.clientApi.getClientData(id,'client').subscribe(result => {
                    //        this.clientList     = [result['data']];
                    //        this.selectedClient = result['data'];
                    //        this.getClientMarketList();
                    //     });
                    //   }
                    //   else{
                    //     this.clientList       = res['data'];
                    //     this.selectedClient   = res['data'][0];
                    //     this.activeRowIdx = 0;
                    //     // $('#client-name').val(res.data[0].client_name_en);
                    //     this.getClientMarketList();
                    //   }
                    // }
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                    $('#client-table tfoot tr').appendTo('#client-table thead');
                });
            },
            columns: this.cols
        };
        this.getMarketMasterList();
        // this.getClientMarketList();
    };
    ClientMarketListComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        if (that.search() !== this['value']) {
                            dtInstance.cell(that).search(this['value']).draw();
                        }
                    }
                    else if (e.keyCode == 8 || e.keyCode == 46) {
                        if ((this['value']) == '') {
                            //reload datatable
                            dtInstance.cell(that).search('').draw();
                        }
                    }
                });
            });
        });
    };
    ClientMarketListComponent.prototype.getClientMasterList = function () {
        var _this = this;
        this.showLoadingGIf = true;
        this.showClientMarketGif = true;
        var params = { pnl_id: 2 };
        this.clientApi.getClientList(params).subscribe(function (res) {
            _this.clientList = res['data'];
            _this.selectedClient = res['data'][0];
            _this.showLoadingGIf = false;
            _this.getClientMarketList();
        });
    };
    ClientMarketListComponent.prototype.getMarketMasterList = function () {
        var _this = this;
        var params = { pnl_id: 2 };
        this.marketApi.getMarketList(params).subscribe(function (res) {
            _this.marketList = res['data'];
        });
    };
    ClientMarketListComponent.prototype.getClientMarketList = function () {
        var _this = this;
        this.showClientMarketGif = true;
        var params = {
            client_id: this.selectedClient['id'],
            pnl_id: 1
        };
        this.clientApi.getClientMarket(params).subscribe(function (res) {
            _this.clientMarketlist = res["data"];
            _this.showClientMarketGif = false;
        });
    };
    ClientMarketListComponent.prototype.edit = function (id) {
        if (id == null) {
            alertify.error('Please save the record');
        }
        else {
            this.route.navigate(["client/market/edit/" + id]);
        }
    };
    ClientMarketListComponent.prototype.deleteItem = function (idx) {
        var _this = this;
        alertify.confirm('Do you want to delete this record?', function () {
            _this.clientMarketlist[idx]['is_deleted'] = 1;
        });
    };
    ClientMarketListComponent.prototype.moveMarketWallet = function (item) {
        var obj = {
            client_id: this.selectedClient.id,
            client_name_en: this.selectedClient.client_name_en,
            code: item.code,
            country: item.country,
            image: 'markets/' + item.code + '.png',
            market_id: item.id,
            market_name_en: item.market_name_en,
            market_name_ja: item.market_name_ja,
            is_new: 1,
            is_deleted: 0,
            is_locked: 0
        };
        var hasDuplicateRec = this.clientMarketlist.some(function (rec) { return rec.market_id === obj.market_id; });
        if (hasDuplicateRec) {
            alertify.error('Record Already Exist');
        }
        else {
            this.clientMarketlist.push(obj);
        }
    };
    ClientMarketListComponent.prototype.onClientItemClick = function (item, indx) {
        // $('#client-name').val(item.client_name_en);
        this.selectedClient = item;
        this.activeRowIdx = indx;
        this.getClientMarketList();
    };
    ClientMarketListComponent.prototype.saveClientMarket = function () {
        var _this = this;
        var newRecords = this.clientMarketlist.filter(function (item) {
            return item.is_new == 1;
        });
        var deletedRecords = this.clientMarketlist.filter(function (item) {
            return item.is_deleted == 1;
        });
        var records = { new_records: JSON.stringify(newRecords), deleted_records: JSON.stringify(deletedRecords) };
        this.clientApi.saveClient(records).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
                _this.getClientMarketList();
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    ClientMarketListComponent.prototype.onOffStatusChange = function (id) {
        var _this = this;
        var controllerName = 'client-market';
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
                _this.getClientMarketList();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default.a) === "function" && _a || Object)
    ], ClientMarketListComponent.prototype, "datatableElement", void 0);
    ClientMarketListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-market-list',
            template: __webpack_require__(/*! ./client-market-list.component.html */ "./src/app/components/client/client-market-list/client-market-list.component.html"),
            styles: [__webpack_require__(/*! ./client-market-list.component.css */ "./src/app/components/client/client-market-list/client-market-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_market_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"]])
    ], ClientMarketListComponent);
    return ClientMarketListComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client/marketWalletList']\">Market Wallet List</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Client Market Wallet</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Client Market Wallet</h4>\r\n\t\t<form [formGroup]=\"clientForm\" class=\"form-horizontal\"  method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Wallet:</label>\r\n\t\t\t\t <div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"wallet_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedWallet\" [value]=\"item.id\">{{item.name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Client Market:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"market_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedMarket\" [value]=\"item.market_id\">{{item.market_name_en}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-wallet-registration-fee\">Registration Fee:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<input placeholder=\"Registration fee\" type=\"number\" min=\"1\" formControlName=\"registration_fee\" class=\"form-control\" id=\"wallet-registration-fee\" />\r\n\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['registration_fee']}}</span></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\">Status:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\">Trade Status:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"enable_trade\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['enable_trade']}}</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ClientMarketWalletFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMarketWalletFormComponent", function() { return ClientMarketWalletFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientMarketWalletFormComponent = /** @class */ (function () {
    function ClientMarketWalletFormComponent(router, clientApi, route, fb) {
        this.router = router;
        this.clientApi = clientApi;
        this.route = route;
        this.fb = fb;
        this.formErrors = {};
        this.isNew = true;
    }
    ClientMarketWalletFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                this.clientApi.getClientMarketWallet(id, 'client-market-wallet').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        _this.clientForm.setValue(data);
                        _this.selectedMarket = result['market_list'];
                        _this.selectedWallet = result['wallet_list'];
                    }
                    else {
                        _this.router.navigate(['/client/marketWalletList']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    ClientMarketWalletFormComponent.prototype.createForm = function () {
        this.clientForm = this.fb.group({
            id: [''],
            wallet_id: [''],
            market_id: [''],
            client_id: [''],
            registration_fee: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enable_trade: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ClientMarketWalletFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        if (!this.clientForm.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var body = {
                'MarketWallet[id]': me.clientForm.value.id,
                'MarketWallet[wallet_id]': me.clientForm.value.wallet_id,
                'MarketWallet[market_id]': me.clientForm.value.market_id,
                'MarketWallet[client_id]': me.clientForm.value.client_id,
                'MarketWallet[registration_fee]': me.clientForm.value.registration_fee,
                'MarketWallet[is_locked]': me.clientForm.value.status ? 0 : 1,
                'MarketWallet[enable_trade]': me.clientForm.value.enable_trade ? 1 : 0
            };
            if (!this.isNew) {
                body['MarketWallet[id]'] = me.clientForm.value.id;
            }
            this.clientApi.saveMarketWallet(body).subscribe(function (response) {
                if (response['success']) {
                    _this.router.navigate(['client/marketWalletList']);
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                }
            });
        }
    };
    ClientMarketWalletFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.clientForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater or equal to ' + obj['min']['min'] + '.';
                }
            }
        }
    };
    ClientMarketWalletFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    ClientMarketWalletFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/client/marketWalletList']);
            }
            else {
                // debugger;
            }
        });
    };
    ClientMarketWalletFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-market-wallet-form',
            template: __webpack_require__(/*! ./client-market-wallet-form.component.html */ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.html"),
            styles: [__webpack_require__(/*! ./client-market-wallet-form.component.css */ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientMarketWalletFormComponent);
    return ClientMarketWalletFormComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-combogrid table tr.highlight{\r\n    background-color: #ccc;\r\n}\r\n.fa-sort-desc {\r\n    background: #303030;\r\n    padding: 5px 10px 10px;\r\n    height: 100%;\r\n    position: relative;\r\n    vertical-align: top;\r\n    color: #fff;\r\n}\r\n.fa-sort-desc:hover{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #inputTxt type=\"text\" [value]=\"model.client_name_en\" class=\"input-combogrid\" placeholder=\"Select a client\" id=\"searchVal\"\r\n  (click)=\"onClientComboClick()\"\r\n  (input)=\"onClientFieldChange($event)\"\r\n  (keyup.enter)=\"onEnterKeyPress()\" />\r\n<span (click)=\"onDropDownClick()\" class=\"dropIcon\"><i class=\"fa fa-sort-desc\"></i></span>\r\n<div class=\"client-combogrid\" *ngIf=\"__clientPicker.state=='open'\">\r\n\t<div class=\"combo-header d-flex\">\r\n\t\t<p class=\"text-center\">Code</p>\r\n\t\t<p class=\"text-center\">Name</p>\r\n\t</div>\r\n\t<div class=\"combo-body\">\r\n\t\t<app-loading-mask *ngIf=\"showLoadingGif == true\" [mask_text] =\"clientApi.mask_text\"></app-loading-mask>\r\n\t\t<div *ngIf=\"showLoadingGif == false\">\r\n\t\t    <p class=\"d-flex text-center\" *ngFor=\"let item of __clientPicker.selectionItems;let rowIdx=index\" (click)=\"onClientItemClick(item, rowIdx)\"\r\n\t\t      [ngClass] = \"{'selected' : item.id == __clientPicker.highlightedId, 'active' : item.id == __clientPicker.selectedId }\">\r\n\t\t\t\t\t<span>{{item.client_code}}</span>\r\n\t\t\t\t\t<span>{{item.client_name_en}}</span>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<p *ngIf=\"__clientPicker.selectionItems?.length == 0 && showLoadingGif == false\">\r\n\t\t\t<span class=\"text-danger\">No records found.</span>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"combo-footer d-flex text-center\">\r\n\t\t<p (click)=\"onFirstBtnClick($event)\"><a href=\"javascript:void(0);\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i></a></p>\r\n\t\t<p (click) =\"onPrevBtnClick($event)\"><a href=\"javascript:void(0);\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a></p>\r\n\t\t<p class=\"page-input\">\r\n\t\t\t<label>Page</label>\r\n\t\t\t<span>\r\n\t\t\t\t<input size=\"1\" type=\"text\" [value]=\"__clientPicker.pagination.page\" (keyup.enter)=\"onPageNumberChange($event)\">\r\n\t\t\t\t/ {{__clientPicker.pagination.totalPages}}\r\n\t\t\t</span>\r\n\t\t</p>\r\n\t\t<p (click) =\"onNextBtnClick($event)\"><a href=\"javascript:void(0);\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></p>\r\n\t\t<p (click) =\"onLastBtnClick($event)\"><a href=\"javascript:void(0);\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i></a></p>\r\n\t\t<p (click) =\"onReloadBtnClick($event)\"><a href=\"javascript:void(0);\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></a></p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ClientCombogridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCombogridComponent", function() { return ClientCombogridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _models_ClientCombo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/ClientCombo */ "./src/app/models/ClientCombo.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ClientMarketWalletListComponent } from '../client-market-wallet-list.component';
var ClientCombogridComponent = /** @class */ (function () {
    // clientList: any       = [];
    // // COMBOGRID VARIABLE DECLARE.
    // public openCloseStatus: boolean = false;
    // highlightIndex: any;
    // keyword: String;
    function ClientCombogridComponent(_elementRef, clientApi, path) {
        this._elementRef = _elementRef;
        this.clientApi = clientApi;
        this.path = path;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.draw = 0;
        this.__clientPicker = new _models_ClientCombo__WEBPACK_IMPORTED_MODULE_2__["ClientPicker"]();
        //    debugger;
        this.keyword = '';
        this.noDataMsg = '';
    }
    ClientCombogridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientApi.mask_text = "Loading...";
        if (this.path.snapshot.params.id) {
            var id_1 = this.path.snapshot.params.id;
            this.clientApi.getClientData(id_1, 'client').subscribe(function (result) {
                _this.clientApi.setClientSelectionModel(result['data']);
                _this.model = result['data'];
                _this.__clientPicker.selectedRecord = result['data'];
                _this.__clientPicker.selectedId = id_1;
                _this.modelChange.next(result['data']);
            });
        }
        // const config: any = {
        //   pageSize : this.__clientPicker.pagination.pageSize,
        //   pnl_id   : this.__clientPicker.pagination.pnl_id,
        //   page     : 1
        // };
        // this.getClientList(config, true);
        // this.highlightIndex = 0;
    };
    ClientCombogridComponent.prototype.getClientList = function (config) {
        var _this = this;
        this.showLoadingGif = true;
        this.clientApi.getClientList(config).subscribe(function (res) {
            if (_this.__clientPicker.state !== 'open') {
                _this.__clientPicker.toggleState();
            }
            // this.clientList = res['data'];
            // this.clientList.total = res['recordsTotal'];
            if (_this.draw == res['draw']) {
                _this.__clientPicker.selectionItems = res['data'];
            }
            // this.__clientPicker.pagination.totalPages = Math.round(res['recordsTotal'] / this.__clientPicker.pagination.pageSize);
            var totalPages = res['recordsTotal'] / _this.__clientPicker.pagination.pageSize;
            _this.__clientPicker.pagination.totalPages = totalPages > 1 ? Math.round(totalPages) : 1;
            _this.__clientPicker.lastQuery = '';
            // if (res['recordsTotal'] % this.__clientPicker.pagination.pageSize !== 0 ) {
            //   this.__clientPicker.pagination.totalPages = this.__clientPicker.pagination.totalPages + 1;
            // }
            _this.showLoadingGif = false;
            if (res['data'].length === 0) {
                _this.noDataMsg = 'No Records Found';
            }
            var me = _this;
            setTimeout(function () {
                me.focusInput(0);
            }, 100);
        });
    };
    ClientCombogridComponent.prototype.onClientComboClick = function () {
        if (this.__clientPicker.state !== 'open') {
            this.__clientPicker.toggleState();
            var me_1 = this;
            setTimeout(function () {
                me_1.focusInput(0);
            }, 100);
        }
        if (this.__clientPicker.state === 'open' && this.__clientPicker.lastQuery === null) {
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: this.__clientPicker.pagination.page
            };
            // this.__clientPicker.setPaginationConfig(config);
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onDropDownClick = function () {
        if (this.__clientPicker.lastQuery === null) {
            this.onClientComboClick();
        }
        else {
            this.__clientPicker.toggleState();
        }
    };
    ClientCombogridComponent.prototype.onClientFieldChange = function (event) {
        this.keyword = event.target.value;
        this.draw = this.draw + 1;
        var config = {
            pageSize: this.__clientPicker.pagination.pageSize,
            pnl_id: this.__clientPicker.pagination.pnl_id,
            page: this.__clientPicker.pagination.page,
            search: event.target.value,
            draw: this.draw
        };
        // this.__clientPicker.setPaginationConfig(config);
        this.getClientList(config);
    };
    // highlightRow(rowIdx) {
    //   // this.highlightIndex = rowIdx;
    // }
    // onClickCombogrid() {
    //   // this.openCloseStatus= true;
    // }
    ClientCombogridComponent.prototype.onClientItemClick = function (item, rowIdx) {
        this.clientApi.setClientSelectionModel(item);
        this.model = item;
        this.__clientPicker.selectedRecord = item;
        this.__clientPicker.selectedId = item.id;
        this.__clientPicker.toggleState();
        this.__clientPicker.lastQuery = this.keyword == "" ? "" : null;
        this.keyword = '';
        this.modelChange.next(item);
        // this.clientMarketWallet.onClientChange();
    };
    ClientCombogridComponent.prototype.onEnterKeyPress = function () {
        this.onClientItemClick(this.__clientPicker.highlightedRecord, this.__clientPicker.highlightedRowIdx);
    };
    ClientCombogridComponent.prototype.onPageNumberChange = function (event) {
        var val = parseInt(event.target.value);
        if (val == this.__clientPicker.pagination.page) {
            //do nothing
            return;
        }
        if (isNaN(val) || val > this.__clientPicker.pagination.totalPages) {
            // do nothing
        }
        else {
            this.__clientPicker.pagination.page = val;
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: val
            };
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onFirstBtnClick = function (event) {
        var page = this.__clientPicker.pagination.page;
        var val = this.inputTxt.nativeElement.value;
        if (page == 1) {
            //do nothing
        }
        else {
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: 1
            };
            this.__clientPicker.setPaginationConfig(config);
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onPrevBtnClick = function (event) {
        var page = this.__clientPicker.pagination.page - 1;
        var val = this.inputTxt.nativeElement.value;
        if (this.__clientPicker.pagination.page == 1) {
            //do nothing
        }
        else {
            page = page < 1 ? 1 : page;
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: page,
            };
            this.__clientPicker.setPaginationConfig(config);
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onNextBtnClick = function (event) {
        var page = this.__clientPicker.pagination.page + 1;
        var val = this.inputTxt.nativeElement.value;
        if (page > this.__clientPicker.pagination.totalPages) {
            //do nothing
        }
        else {
            // page = page > this.__clientPicker.pagination.totalPages ? this.__clientPicker.pagination.totalPages : page;
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: page,
            };
            this.__clientPicker.setPaginationConfig(config);
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onLastBtnClick = function (event) {
        var page = this.__clientPicker.pagination.page;
        if (page == this.__clientPicker.pagination.totalPages) {
            //do nothing;
        }
        else {
            this.__clientPicker.pagination.page = this.__clientPicker.pagination.totalPages;
            var val = this.inputTxt.nativeElement.value;
            var config = {
                pageSize: this.__clientPicker.pagination.pageSize,
                pnl_id: this.__clientPicker.pagination.pnl_id,
                page: this.__clientPicker.pagination.totalPages,
            };
            this.__clientPicker.setPaginationConfig(config);
            this.getClientList(config);
        }
    };
    ClientCombogridComponent.prototype.onReloadBtnClick = function (event) {
        this.__clientPicker.pagination.page = 1;
        var config = {
            pageSize: this.__clientPicker.pagination.pageSize,
            pnl_id: this.__clientPicker.pagination.pnl_id,
            page: this.__clientPicker.pagination.page
        };
        this.getClientList(config);
    };
    ClientCombogridComponent.prototype.focusInput = function (rowIdx) {
        // convert ViewChildren querylist to an array to access by index
        var inputEls = this.boundList.toArray();
        if (this.__clientPicker.selectionItems.length === 0) {
            return;
        }
        this.__clientPicker.highlightedRecord = this.__clientPicker.selectionItems[rowIdx];
        this.__clientPicker.highlightedId = this.__clientPicker.selectionItems[rowIdx].id;
        this.__clientPicker.highlightedRowIdx = rowIdx;
        // this.highlightIndex = rowIdx;
        this.inputTxt.nativeElement.focus();
    };
    ClientCombogridComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.__clientPicker.state = 'closed';
        }
    };
    ClientCombogridComponent.prototype.onArrowUp = function (event, targetElement) {
        if (this.__clientPicker.state === 'open') {
            // if(this.highlightIndex !=0 ){
            //   this.highlightIndex = this.highlightIndex - 1;
            // }
            var rowIdx = this.__clientPicker.highlightedRowIdx;
            rowIdx = Math.max(0, rowIdx - 1);
            this.focusInput(rowIdx);
        }
    };
    ClientCombogridComponent.prototype.onArrowDown = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (this.__clientPicker.state === 'open') {
            // if(this.highlightIndex < (this.__clientPicker.selectionItems.length) - 1){
            //   this.highlightIndex = this.highlightIndex +1;
            // }
            var rowIdx = this.__clientPicker.highlightedRowIdx;
            rowIdx = Math.min(rowIdx + 1, this.__clientPicker.selectionItems.length - 1);
            this.focusInput(rowIdx);
        }
        else if (clickedInside && this.__clientPicker.state !== 'open') {
            // this.__clientPicker.toggleState();
            this.onClientComboClick();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientCombogridComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientCombogridComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('boundList'),
        __metadata("design:type", Object)
    ], ClientCombogridComponent.prototype, "boundList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputTxt'),
        __metadata("design:type", Object)
    ], ClientCombogridComponent.prototype, "inputTxt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClientCombogridComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.arrowup', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClientCombogridComponent.prototype, "onArrowUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.arrowdown', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClientCombogridComponent.prototype, "onArrowDown", null);
    ClientCombogridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-combogrid',
            template: __webpack_require__(/*! ./client-combogrid.component.html */ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.html"),
            styles: [__webpack_require__(/*! ./client-combogrid.component.css */ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ClientCombogridComponent);
    return ClientCombogridComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-row {\r\n    background-color: #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Market Wallet List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<label class=\"client-section-label\">Client</label>\r\n\t\t\t<!-- <select (change)=\"onClientSelect($event.target.value)\">\r\n\t\t\t\t<option value=\"\" selected>--Select Client--</option>\r\n\t\t\t\t<option *ngFor=\"let item of clientList;let idx=index\" [value]=\"idx\">{{item.client_name_en}}</option>\r\n\t\t\t</select> -->\r\n\t\t\t<app-client-combogrid (modelChange)=\"onClientChange()\" [model]=\"clientInfo\"></app-client-combogrid>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"status-index\">\r\n\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t\t<button class=\"btn btn-primary btn-sm save-client pull-right\" (click)=\"saveWallet()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client Wallet</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<!-- <app-loading-mask *ngIf=\"clientApi.isDataLoaded == false\" [mask_text] =\"clientApi.mask_text\"></app-loading-mask> -->\r\n\t\t\t\t\t\t\t<tr *ngIf=\"showWalletLoadingGif == true\">\r\n\t\t\t\t\t\t\t\t<td><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"walletList.length == 0 && showWalletLoadingGif == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td>No Records</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<ng-template ngFor let-item [ngForOf]= \"walletList\" let-indx=\"index\" *ngIf=\"showWalletLoadingGif == false\">\r\n\t\t\t\t\t\t\t\t<tr style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"entry-row\" [class.active-row]=\"indx == activeRowIdx\" (click)=\"onClientWalletSelectionChange(item,indx)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.name}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 px-0\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Wallet</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n\t\t\t\t\t\t\t\t<!-- <th style=\"width: 110px;\"><label class=\"bid-notifier head\">Btc Balance</label></th> -->\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"crypt-market-img head\">Registration Fee</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"bid-notifier head\">Status</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"bid-notifier head\">Trade Status</label></th>\r\n\t\t\t\t\t\t\t\t<!-- <th style=\"width: 110px;\"><label class=\"ask-notifier head\">ETH Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">JPY Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Symbol</label></th>-->\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t\t\t<!-- <ng-template ngFor let-item [ngForOf]= \"cliMarketWalletList\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"item.length == 0\"> No results </div>\r\n\t\t\t\t\t\t\t</ng-template> -->\r\n\t\t\t\t\t\t\t<tr *ngIf=\"cliMarketWalletList.length == 0 && showLoadingGIf == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"6\">No Records</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"showLoadingGIf == true\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"6\"><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t<ng-template ngFor let-item [ngForOf]= \"cliMarketWalletList\" let-indx=\"index\" *ngIf=\"showLoadingGIf == false\" >\r\n\t\t\t\t\t\t\t\t<tr *ngIf=\"item.is_deleted!=1\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t<td>{{item.symbol}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><img src=\"{{marketApi.BASE_URL}}images/{{item.image}}\" alt=\"{{item.code}}\"></td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td>{{item.btc_balance}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.eth_balance}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.jpy_balance}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.symbol}}</td> -->\r\n\t\t\t\t\t\t\t\t\t<td>{{item.registration_fee}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.enable_trade == 1; else offTrade\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffTradeStatusChange(item.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #offTrade>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffTradeStatusChange(item.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"editItem(item.id)\" ><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"deleteItem(indx)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client Market</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"clientApi.mask_text\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"clientMarketList.length == 0 && showLoadingGIf == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td>No Records</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr  *ngFor=\"let item of clientMarketList\" style=\"text-align: left\" >\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\"><button class=\"btn btn-secondary bnt-sm\" (click)=\"moveMarketWallet(item)\"><i class=\"fa fa-caret-left\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<span >{{item.market_name_en}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n"

/***/ }),

/***/ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ClientMarketWalletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMarketWalletListComponent", function() { return ClientMarketWalletListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientMarketWalletListComponent = /** @class */ (function () {
    function ClientMarketWalletListComponent(route, walletApi, clientApi, marketApi, _elementRef) {
        this.route = route;
        this.walletApi = walletApi;
        this.clientApi = clientApi;
        this.marketApi = marketApi;
        this._elementRef = _elementRef;
        this.cliMarketWalletList = [];
        this.marketWalletList = [];
        this.clientList = [];
        this.clientMarketList = [];
        this.walletList = [];
        this.mask_txt = "Loading...";
        this.showLoadingGIf = false;
        this.showWalletLoadingGif = false;
        this.activeRowIdx = 0;
        this.selectedWallet = {};
        this.selectedClient = {};
        this.clientInfo = { id: 0, client_code: null, client_name_en: null, client_name_ja: 'Select Client' };
    }
    ClientMarketWalletListComponent.prototype.ngOnInit = function () {
        // this.clientApi.mask_text = "Loading...";
        // this.getClientMarketWalletList();
        // this.getWalletList();
        // this.getMarketWalletList();
        // this.getClientList();
        // this.getClientList();
        // this.getClientMarket();
    };
    /* Fetch Wallet Master List */
    ClientMarketWalletListComponent.prototype.getWalletList = function () {
        var _this = this;
        var client_id = this.clientApi.clientSelectModel.id || 0;
        var params = { 'pnl_id': 1, client_id: client_id };
        this.clientApi.getClientWalletList(params).subscribe(function (res) {
            _this.walletList = res["data"];
            _this.selectedWallet = res['data'].length == 0 ? {} : res['data'][0];
            _this.showWalletLoadingGif = false;
            _this.getClientMarketList(_this.marketParams());
            _this.getClientMarketWalletList(_this.marketWalletParams());
            // console.log(this.clientApi.clientSelectModel);
            // this.selectedClient = this.clientList[record];
        });
    };
    /* Fetch Client Master List */
    ClientMarketWalletListComponent.prototype.getClientList = function () {
        var _this = this;
        var params = { 'pnl_id': 2 };
        this.clientApi.getClientList(params).subscribe(function (res) {
            _this.clientList = res["data"];
        });
    };
    ClientMarketWalletListComponent.prototype.getClientMarketList = function (params) {
        var _this = this;
        this.showLoadingGIf = true;
        this.clientApi.getClientMarket(params).subscribe(function (res) {
            _this.clientMarketList = res['data'];
            _this.showLoadingGIf = false;
        });
        // this.getClientMarketWalletList(this.marketParams());
    };
    ClientMarketWalletListComponent.prototype.getClientMarketWalletList = function (params) {
        var _this = this;
        // let params:any = {
        //   wallet_id : this.selectedWallet['id'],
        //   client_id : this.selectedClient.hasOwnProperty('id') ? this.selectedClient['id'] : 0
        // };
        this.showLoadingGIf = true;
        this.clientApi.clientMarketWalletList(params).subscribe(function (res) {
            _this.cliMarketWalletList = res["data"];
            _this.clientMarketList['count'] = res['data'].length;
            _this.showLoadingGIf = false;
        });
    };
    ClientMarketWalletListComponent.prototype.deleteItem = function (idx) {
        var _this = this;
        alertify.confirm('Do you want to delete this record?', function () {
            _this.cliMarketWalletList[idx]['is_deleted'] = 1;
        });
    };
    ClientMarketWalletListComponent.prototype.delete = function (id) {
        this.route.navigate(["client/marketWallet/delete/" + id]);
    };
    ClientMarketWalletListComponent.prototype.onClientWalletSelectionChange = function (item, indx) {
        if (this.activeRowIdx != indx) {
            this.showLoadingGIf = true;
            this.selectedWallet = item;
            this.activeRowIdx = indx;
            this.getClientMarketList(this.marketParams());
            this.getClientMarketWalletList(this.marketWalletParams());
        }
    };
    ClientMarketWalletListComponent.prototype.onClientSelect = function (idx) {
        this.selectedClient = this.clientList[idx];
        this.getClientMarketList(this.marketParams());
    };
    ClientMarketWalletListComponent.prototype.moveMarketWallet = function (item) {
        var obj = {
            client_id: this.clientApi.clientSelectModel.id,
            client_name_en: this.clientApi.clientSelectModel.client_name_en,
            market_id: item.market_id,
            code: item.code,
            wallet_id: this.selectedWallet.wallet_id,
            market_name_en: item.market_name_en,
            symbol: this.selectedWallet.code,
            country: item.country,
            image: 'markets/' + item.code + '.png',
            is_new: 1,
            is_deleted: 0,
            is_locked: 0,
            enable_trade: 1,
            registration_fee: 0
        };
        if (this.cliMarketWalletList.some(function (e) { return e.client_id === obj.client_id && e.market_id === item.market_id; })) {
            alertify.error('Record Already Exist');
        }
        else {
            this.cliMarketWalletList.push(obj);
        }
    };
    ClientMarketWalletListComponent.prototype.marketParams = function () {
        var client_id = this.clientApi.clientSelectModel.id || 0, wallet_id = this.selectedWallet['wallet_id'] || 0;
        if (client_id == 0 || wallet_id == 0) {
            return;
        }
        var obj = {
            client_id: client_id,
            wallet_id: wallet_id,
            pnl_id: 2
        };
        return obj;
    };
    ClientMarketWalletListComponent.prototype.marketWalletParams = function () {
        var client_id = this.clientApi.clientSelectModel.id || 0, wallet_id = this.selectedWallet['wallet_id'] || 0;
        if (client_id == 0 || wallet_id == 0) {
            return;
        }
        var obj = {
            client_id: client_id,
            wallet_id: wallet_id,
            pnl_id: 1
        };
        return obj;
    };
    ClientMarketWalletListComponent.prototype.saveWallet = function () {
        var _this = this;
        var newRecords = this.cliMarketWalletList.filter(function (item) {
            return item.is_new == 1;
        });
        var deletedRecords = this.cliMarketWalletList.filter(function (item) {
            return item.is_deleted == 1;
        });
        var records = { new_records: JSON.stringify(newRecords), deleted_records: JSON.stringify(deletedRecords) };
        this.clientApi.saveClientWallet(records).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
                _this.getClientMarketWalletList(_this.marketWalletParams());
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    ClientMarketWalletListComponent.prototype.onOffStatusChange = function (id) {
        var _this = this;
        var controllerName = 'client-market-wallet';
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
                _this.getClientMarketList(_this.marketParams());
            }
        });
    };
    ClientMarketWalletListComponent.prototype.onOffTradeStatusChange = function (id) {
        var _this = this;
        var controllerName = 'client-market-wallet';
        this.clientApi.toggleTradeStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
                _this.getClientMarketList(_this.marketParams());
            }
        });
    };
    ClientMarketWalletListComponent.prototype.editItem = function (id) {
        this.route.navigate(["client/marketWalletList/edit/" + id]);
    };
    ClientMarketWalletListComponent.prototype.onClientChange = function () {
        this.activeRowIdx = 0;
        this.showWalletLoadingGif = true;
        this.getWalletList();
        // const config = this.marketParams();
        // // console.log(this.clientApi.clientSelectModel);
        // // this.selectedClient = this.clientList[record];
        // this.getClientMarketList(this.marketParams());
        // this.getClientMarketWalletList(this.marketParams());
        // this.showLoadingGIf = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ClientMarketWalletListComponent.prototype, "model", void 0);
    ClientMarketWalletListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-market-wallet-list',
            template: __webpack_require__(/*! ./client-market-wallet-list.component.html */ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.html"),
            styles: [__webpack_require__(/*! ./client-market-wallet-list.component.css */ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClientMarketWalletListComponent);
    return ClientMarketWalletListComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/client/client-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/components/client/client-list/client-list.component.ts");
/* harmony import */ var _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-form/client-form.component */ "./src/app/components/client/client-form/client-form.component.ts");
/* harmony import */ var _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-market-list/client-market-list.component */ "./src/app/components/client/client-market-list/client-market-list.component.ts");
/* harmony import */ var _client_market_form_client_market_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-market-form/client-market-form.component */ "./src/app/components/client/client-market-form/client-market-form.component.ts");
/* harmony import */ var _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-market-wallet-list/client-market-wallet-list.component */ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.ts");
/* harmony import */ var _client_market_wallet_form_client_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-market-wallet-form/client-market-wallet-form.component */ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.ts");
/* harmony import */ var _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-wallet-list/client-wallet-list.component */ "./src/app/components/client/client-wallet-list/client-wallet-list.component.ts");
/* harmony import */ var _client_wallet_form_client_wallet_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-wallet-form/client-wallet-form.component */ "./src/app/components/client/client-wallet-form/client-wallet-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_2__["ClientListComponent"], pathMatch: 'prefix' },
    { path: 'new', component: _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_3__["ClientFormComponent"], pathMatch: 'prefix' },
    { path: 'edit/:id', component: _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_3__["ClientFormComponent"], pathMatch: 'prefix' },
    { path: 'delete/:id', component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_2__["ClientListComponent"], pathMatch: 'prefix' },
    { path: 'marketList', component: _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientMarketListComponent"], pathMatch: 'prefix' },
    { path: 'marketList/:id', component: _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientMarketListComponent"], pathMatch: 'prefix' },
    { path: 'market/new', component: _client_market_form_client_market_form_component__WEBPACK_IMPORTED_MODULE_5__["ClientMarketFormComponent"], pathMatch: 'prefix' },
    { path: 'client/market/edit/:id', component: _client_market_form_client_market_form_component__WEBPACK_IMPORTED_MODULE_5__["ClientMarketFormComponent"], pathMatch: 'prefix' },
    { path: 'client/marketWalletList/edit/:id', component: _client_market_wallet_form_client_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_7__["ClientMarketWalletFormComponent"], pathMatch: 'prefix' },
    { path: 'market/delete/:id', component: _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientMarketListComponent"], pathMatch: 'prefix' },
    { path: 'marketWalletList', component: _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'marketWallet/new', component: _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'marketWallet/edit/:id', component: _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'marketWalletList/:id', component: _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'marketWallet/delete/:id', component: _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'walletList', component: _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__["ClientWalletListComponent"], pathMatch: 'prefix' },
    { path: 'walletList/:id', component: _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__["ClientWalletListComponent"], pathMatch: 'prefix' },
    { path: 'wallet/new', component: _client_wallet_form_client_wallet_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientWalletFormComponent"], pathMatch: 'prefix' },
    { path: 'client/wallet/edit/:id', component: _client_wallet_form_client_wallet_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientWalletFormComponent"], pathMatch: 'prefix' },
    { path: 'wallet/delete/:id', component: _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__["ClientWalletListComponent"], pathMatch: 'prefix' },
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/client/client-wallet-form/client-wallet-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-form/client-wallet-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client-wallet-form/client-wallet-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-form/client-wallet-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n    <a [routerLink]=\"['/client/walletList']\">Wallet</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Client Wallet</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Client Wallet</h4>\r\n\t\t<form [formGroup]=\"clientForm\" class=\"form-horizontal\"  method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Client:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"client_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedClient\" [value]=\"item.id\">{{item.client_name_en}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Wallet:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"wallet_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedWallet\" [value]=\"item.id\">{{item.code}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"wallet-registration-fee\">Registration Fee:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<input placeholder=\"Registration fee\" type=\"number\" min=\"1\" formControlName=\"registration_fee\" class=\"form-control\" id=\"wallet-registration-fee\" />\r\n\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['registration_fee']}}</span></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\">Status:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-wallet-form/client-wallet-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-form/client-wallet-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientWalletFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientWalletFormComponent", function() { return ClientWalletFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientWalletFormComponent = /** @class */ (function () {
    function ClientWalletFormComponent(router, clientApi, route, fb) {
        this.router = router;
        this.clientApi = clientApi;
        this.route = route;
        this.fb = fb;
        this.formErrors = {};
        this.isNew = true;
    }
    ClientWalletFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                this.clientApi.getCWalletEdit(id, 'client-wallet').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        _this.clientForm.setValue(data);
                        _this.selectedClient = result['client_list']['data'];
                        _this.selectedWallet = result['wallet_list']['data'];
                    }
                    else {
                        _this.router.navigate(['/client/walletList']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    ClientWalletFormComponent.prototype.createForm = function () {
        this.clientForm = this.fb.group({
            id: [''],
            code: [''],
            client_id: [''],
            wallet_id: [''],
            client_name_ja: [''],
            client_name_en: [''],
            registration_fee: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ClientWalletFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        if (!this.clientForm.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var body = {
                'Client[id]': me.clientForm.value.id,
                'Client[client_id]': me.clientForm.value.client_id,
                'Client[wallet_id]': me.clientForm.value.wallet_id,
                'Client[registration_fee]': me.clientForm.value.registration_fee,
                'Client[is_locked]': me.clientForm.value.status ? 0 : 1
            };
            if (!this.isNew) {
                body['Client[id]'] = me.clientForm.value.id;
            }
            this.clientApi.saveCWalletForm(body).subscribe(function (response) {
                if (response['success']) {
                    _this.router.navigate(['client/walletList']);
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                }
            });
        }
    };
    ClientWalletFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.clientForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater or equal to ' + obj['min']['min'] + '.';
                }
            }
        }
    };
    ClientWalletFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    ClientWalletFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/client/walletList']);
            }
            else {
                // debugger;
            }
        });
    };
    ClientWalletFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-wallet-form',
            template: __webpack_require__(/*! ./client-wallet-form.component.html */ "./src/app/components/client/client-wallet-form/client-wallet-form.component.html"),
            styles: [__webpack_require__(/*! ./client-wallet-form.component.css */ "./src/app/components/client/client-wallet-form/client-wallet-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ClientWalletFormComponent);
    return ClientWalletFormComponent;
}());



/***/ }),

/***/ "./src/app/components/client/client-wallet-list/client-wallet-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-list/client-wallet-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-row {\r\n    background-color: #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/components/client/client-wallet-list/client-wallet-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-list/client-wallet-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/client']\">Client</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Wallet List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\" style=\"float: right\">\r\n\t\t\t<button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveClientWallet()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t<div class=\"status-index\">\r\n\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\" datatable [dtOptions]=\"dtOptions\" id=\"client-table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<!-- <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client</label></th> -->\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_txt\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of clientList;let indx = index\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\" class=\"entry-row\" [class.active-row]=\"indx == activeRowIdx\" (click)=\"onClientItemClick(item,indx)\">{{item.client_name_en}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" name=\"client-name\" id='client-name'></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<!-- <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveClientMarket()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t\t\t<div class=\"status-index\">\r\n\t\t\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Client</label></th>\r\n\t\t\t\t\t\t\t\t<!-- <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th> -->\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Wallet</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Fee</label></th>\r\n\t\t\t\t\t\t\t<!-- \t<th style=\"width: 110px;\"><label class=\"bid-notifier head\">Btc Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">ETH Balance</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">JPY Balance</label></th> -->\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Status</label></th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"clientWalletList.length == 0 && showClientWalletGif ==false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"5\">No Records</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr *ngIf=\"showClientWalletGif == true\">\r\n\t\t\t\t\t\t\t\t<td colspan=\"5\"><app-loading-mask  [mask_text] =\"mask_txt\"></app-loading-mask></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-template ngFor let-item [ngForOf]= \"clientWalletList\" let-indx=\"index\">\r\n\t\t\t\t\t\t\t<tr *ngIf=\"item.is_deleted!=1 && showClientWalletGif == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td>{{item.client_name_en}}</td>\r\n\t\t\t\t\t\t\t\t<!-- <td><img src=\"{{marketApi.BASE_URL}}images/{{item.image}}\" alt=\"{{item.code}}\"></td> -->\r\n\t\t\t\t\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.registration_fee}}</td>\r\n\t\t\t\t\t\t\t\t<!-- <td>{{item.eth_balance}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.jpy_balance}}</td> -->\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(item.id)\" ><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"deleteItem(indx)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Wallet Name</label></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_txt\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of walletList;let indx = index\" style=\"text-align: left\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\"><button class=\"btn btn-secondary bnt-sm\" (click)=\"moveWallet(item)\"><i class=\"fa fa-caret-left\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<span>{{item.name}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/client/client-wallet-list/client-wallet-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/client/client-wallet-list/client-wallet-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientWalletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientWalletListComponent", function() { return ClientWalletListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientWalletListComponent = /** @class */ (function () {
    function ClientWalletListComponent(route, path, clientApi, walletApi) {
        this.route = route;
        this.path = path;
        this.clientApi = clientApi;
        this.walletApi = walletApi;
        this.clientWalletList = [];
        this.moveclientWalletList = [];
        this.clientList = [];
        this.walletList = [];
        this.selectedClient = {};
        this.activeRowIdx = 0;
        this.mask_txt = 'Loading...';
        this.dtOptions = {};
        this.cols = [
            { title: 'Id', data: 'id', visible: false },
            { title: 'Client', data: 'client_name_en' }
        ];
    }
    ClientWalletListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // GET WALLET MASTER LIST
        this.getWalletMasterList();
        // this.getClientMasterList();
        this.dtOptions = {
            pagingType: 'simple',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_6__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            bInfo: false,
            bLengthChange: true,
            aaSorting: [[0, "desc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "emptyTable": "No records found",
                "search": " ",
                "paginate": {
                    "previous": "<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>",
                    "next": "<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"
                },
                "lengthMenu": "Page Size _MENU_ ",
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters['pnl_id'] = 2;
                var params = { pnl_id: 2 };
                if (_this.path.snapshot.params.id) {
                    dataTablesParameters['id'] = parseInt(_this.path.snapshot.params.id);
                }
                _this.clientApi.getClientList(dataTablesParameters).subscribe(function (res) {
                    _this.clientList = res['data'];
                    _this.selectedClient = res['data'].length > 0 ? res['data'][0] : {};
                    _this.showLoadingGIf = false;
                    _this.getClientWalletList();
                    // this.selectedClient['id'] = 0;
                    // if(res['data'].length != 0){
                    //   if (this.path.snapshot.params.id){
                    //     let id = this.path.snapshot.params.id;
                    //     // this.clientApi.getClientData(id,'client').subscribe(result => {
                    //     //    this.clientList     = [result['data']];
                    //     //    this.selectedClient = result['data'];
                    //     //    this.getClientWalletList();
                    //     // });
                    //     this.clientApi.getClientList(params).subscribe(res=>{
                    //       this.clientList       = res['data'];
                    //       this.selectedClient   = res['data'][0];
                    //       this.showLoadingGIf = false;
                    //       this.getClientWalletList();
                    //     });
                    //   }
                    //   else{
                    //     this.clientList       = res['data'];
                    //     this.selectedClient   = res['data'][0];
                    //     this.activeRowIdx = 0;
                    //     // $('#client-name').val(res.data[0].client_name_en);
                    //     this.getClientWalletList();
                    //   }
                    // }
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                    $('#client-table tfoot tr').appendTo('#client-table thead');
                });
            },
            columns: this.cols
        };
        // this.getclientWalletList();
    };
    ClientWalletListComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        if (that.search() !== this['value']) {
                            dtInstance.cell(that).search(this['value']).draw();
                        }
                    }
                    else if (e.keyCode == 8 || e.keyCode == 46) {
                        if ((this['value']) == '') {
                            //reload datatable
                            dtInstance.cell(that).search('').draw();
                        }
                    }
                });
            });
        });
    };
    ClientWalletListComponent.prototype.getClientMasterList = function () {
        var _this = this;
        this.showLoadingGIf = true;
        this.showClientWalletGif = true;
        var params = { pnl_id: 2 };
        this.clientApi.getClientList(params).subscribe(function (res) {
            _this.clientList = res['data'];
            _this.selectedClient = res['data'][0];
            _this.showLoadingGIf = false;
            _this.getClientWalletList();
        });
    };
    ClientWalletListComponent.prototype.getClientWalletList = function () {
        var _this = this;
        this.showClientWalletGif = true;
        var params = {
            client_id: this.selectedClient['id'],
            pnl_id: 1
        };
        this.clientApi.getClientWallet(params).subscribe(function (res) {
            _this.clientWalletList = res["data"];
            _this.showClientWalletGif = false;
        });
    };
    ClientWalletListComponent.prototype.getWalletMasterList = function () {
        var _this = this;
        var params = { pnl_id: 2 };
        this.walletApi.getWalletList(params).subscribe(function (res) {
            _this.walletList = res['data'];
        });
    };
    ClientWalletListComponent.prototype.edit = function (id) {
        if (id == null) {
            alertify.error('Please save the record');
        }
        else {
            this.route.navigate(["client/wallet/edit/" + id]);
        }
    };
    ClientWalletListComponent.prototype.deleteItem = function (idx) {
        var _this = this;
        alertify.confirm('Do you want to delete this record?', function () {
            _this.clientWalletList[idx]['is_deleted'] = 1;
        });
    };
    ClientWalletListComponent.prototype.moveWallet = function (item) {
        var obj = {
            client_id: this.selectedClient.id,
            client_name_en: this.selectedClient.client_name_en,
            code: item.code,
            name: item.name,
            wallet_id: item.id,
            registration_fee: item.registration_fee,
            is_new: 1,
            is_deleted: 0,
            is_locked: 0
        };
        if (this.clientWalletList.some(function (e) { return e.client_id === obj.client_id && e.wallet_id === item.id; })) {
            alertify.error('Record Already Exist');
        }
        else {
            this.clientWalletList.push(obj);
        }
    };
    ClientWalletListComponent.prototype.onClientItemClick = function (item, indx) {
        // $('#client-name').val(item.client_name_en);
        this.selectedClient = item;
        this.activeRowIdx = indx;
        this.getClientWalletList();
    };
    ClientWalletListComponent.prototype.saveClientWallet = function () {
        var _this = this;
        var newRecords = this.clientWalletList.filter(function (item) {
            return item.is_new == 1;
        });
        var deletedRecords = this.clientWalletList.filter(function (item) {
            return item.is_deleted == 1;
        });
        var records = { new_records: JSON.stringify(newRecords), deleted_records: JSON.stringify(deletedRecords) };
        this.clientApi.saveCWallet(records).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
                _this.getClientWalletList();
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    ClientWalletListComponent.prototype.onOffStatusChange = function (id) {
        var _this = this;
        var controllerName = 'client-wallet';
        this.clientApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
                _this.getClientWalletList();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_4___default.a) === "function" && _a || Object)
    ], ClientWalletListComponent.prototype, "datatableElement", void 0);
    ClientWalletListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-wallet-list',
            template: __webpack_require__(/*! ./client-wallet-list.component.html */ "./src/app/components/client/client-wallet-list/client-wallet-list.component.html"),
            styles: [__webpack_require__(/*! ./client-wallet-list.component.css */ "./src/app/components/client/client-wallet-list/client-wallet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"],
            _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]])
    ], ClientWalletListComponent);
    return ClientWalletListComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/client/client.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/client/client.module.ts ***!
  \****************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/components/client/client-routing.module.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/components/client/client-list/client-list.component.ts");
/* harmony import */ var _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-form/client-form.component */ "./src/app/components/client/client-form/client-form.component.ts");
/* harmony import */ var _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-market-list/client-market-list.component */ "./src/app/components/client/client-market-list/client-market-list.component.ts");
/* harmony import */ var _client_market_form_client_market_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-market-form/client-market-form.component */ "./src/app/components/client/client-market-form/client-market-form.component.ts");
/* harmony import */ var _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-market-wallet-list/client-market-wallet-list.component */ "./src/app/components/client/client-market-wallet-list/client-market-wallet-list.component.ts");
/* harmony import */ var _client_market_wallet_form_client_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-market-wallet-form/client-market-wallet-form.component */ "./src/app/components/client/client-market-wallet-form/client-market-wallet-form.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _client_market_wallet_list_client_combogrid_client_combogrid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-market-wallet-list/client-combogrid/client-combogrid.component */ "./src/app/components/client/client-market-wallet-list/client-combogrid/client-combogrid.component.ts");
/* harmony import */ var _common_loading_mask_loading_mask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/loading-mask/loading-mask.component */ "./src/app/components/common/loading-mask/loading-mask.component.ts");
/* harmony import */ var _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-wallet-list/client-wallet-list.component */ "./src/app/components/client/client-wallet-list/client-wallet-list.component.ts");
/* harmony import */ var _client_wallet_form_client_wallet_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client-wallet-form/client-wallet-form.component */ "./src/app/components/client/client-wallet-form/client-wallet-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]
            ],
            declarations: [_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientListComponent"], _client_form_client_form_component__WEBPACK_IMPORTED_MODULE_5__["ClientFormComponent"], _client_market_list_client_market_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientMarketListComponent"], _client_market_form_client_market_form_component__WEBPACK_IMPORTED_MODULE_7__["ClientMarketFormComponent"], _client_market_wallet_list_client_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_8__["ClientMarketWalletListComponent"], _client_market_wallet_form_client_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientMarketWalletFormComponent"], _client_market_wallet_list_client_combogrid_client_combogrid_component__WEBPACK_IMPORTED_MODULE_11__["ClientCombogridComponent"], _common_loading_mask_loading_mask_component__WEBPACK_IMPORTED_MODULE_12__["LoadingMaskComponent"], _client_wallet_list_client_wallet_list_component__WEBPACK_IMPORTED_MODULE_13__["ClientWalletListComponent"], _client_wallet_form_client_wallet_form_component__WEBPACK_IMPORTED_MODULE_14__["ClientWalletFormComponent"]],
            exports: [_client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"], _common_loading_mask_loading_mask_component__WEBPACK_IMPORTED_MODULE_12__["LoadingMaskComponent"], _client_market_wallet_list_client_combogrid_client_combogrid_component__WEBPACK_IMPORTED_MODULE_11__["ClientCombogridComponent"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/components/common/loading-mask/loading-mask.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/common/loading-mask/loading-mask.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/loading-mask/loading-mask.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/loading-mask/loading-mask.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-screen\">\r\n\t<p>\r\n\t\t<img src=\"{{clientApi.BASE_URL}}images/processing.gif\" alt=\"\">\r\n\t\t<span>{{mask_text}}</span>\r\n\t</p>\r\n</div> "

/***/ }),

/***/ "./src/app/components/common/loading-mask/loading-mask.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/loading-mask/loading-mask.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoadingMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMaskComponent", function() { return LoadingMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingMaskComponent = /** @class */ (function () {
    function LoadingMaskComponent(clientApi) {
        this.clientApi = clientApi;
    }
    LoadingMaskComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingMaskComponent.prototype, "mask_text", void 0);
    LoadingMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-mask',
            template: __webpack_require__(/*! ./loading-mask.component.html */ "./src/app/components/common/loading-mask/loading-mask.component.html"),
            styles: [__webpack_require__(/*! ./loading-mask.component.css */ "./src/app/components/common/loading-mask/loading-mask.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], LoadingMaskComponent);
    return LoadingMaskComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"loading-screen\">\r\n\t<p>\r\n\t\t<span><i class=\"fa fa-spin fa-spinner\"></i> Loading</span>\r\n\t</p>\r\n</div> -->\r\n<div  class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"row tile_count\">\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-success\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-briefcase\"></i> Total Wallets</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalWallet}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-warning\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-bank\"></i> Total Markets</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalMarket}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-danger\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Clients</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalClient}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-success\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-money\"></i> Total Transactions</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalTransaction}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-info\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-btc\"></i> Total Buy</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalBuy}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\r\n\t\t\t\t<div class=\"count-wrap alert-warning\">\r\n\t\t\t\t\t<span class=\"count_top\"><i class=\"fa fa-usd\"></i> Total Sale</span>\r\n\t\t\t\t\t<div class=\"count\">{{totalRecord.totalSell}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<!-- chart start here -->\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t<div class=\"dashboard_graph\">\r\n\t\t\t<div class=\"row x_title\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<h3>Transaction History <small>Trade log for buy and sell</small></h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div id=\"reportrange\" class=\"pull-right\">\r\n\t\t\t\t\t\t<!-- <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i> -->\r\n\t\t\t\t\t\t<!-- <span>August 2, 2018 - August 31, 2018</span> <b class=\"caret\"></b> -->\r\n\t\t\t\t\t\t<!-- <app-datepicker (modelChange)=\"onMonthChange($event)\" [model]=\"selectedDate\"></app-datepicker> -->\r\n\t\t\t\t\t\t<!-- <ng-datepicker [(ngModel)]=\"date\" [options]=\"options\" (ngModelChange)=\"onMonthChange($event)\"></ng-datepicker> -->\r\n\t\t\t\t\t\t<label class=\"ele-label\">Date From:</label> &nbsp;&nbsp;\r\n\t\t\t\t\t\t<input type=\"text\" id=\"dateFrom\" class=\"datepicker\">&nbsp;&nbsp;\r\n\t\t\t\t\t\t<label class=\"ele-label\">Date To:</label>&nbsp;&nbsp;\r\n\t\t\t\t\t\t<input type=\"text\" id=\"dateTo\" class=\"datepicker\">\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\t\t\t<!-- <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n\t\t\t\t<div id=\"chart_plot_01\" class=\"demo-placeholder\" style=\"padding: 0px; position: relative;\">\r\n\t\t\t\t\t<canvas class=\"flot-base\" width=\"1330\" height=\"280\" style=\"direction: ltr; position: absolute; left: 0px; top: 0px; width: 1330px; height: 280px;\"></canvas>\r\n\t\t\t\t\t<div class=\"flot-text\" style=\"position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);\">\r\n\t\t\t\t\t\t<div class=\"flot-x-axis flot-x1-axis xAxis x1Axis\" style=\"position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;\">\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 59px; text-align: center;\">Jan 01</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 274px; text-align: center;\">Jan 02</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 489px; text-align: center;\">Jan 03</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 703px; text-align: center;\">Jan 04</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 918px; text-align: center;\">Jan 05</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; max-width: 151px; top: 264px; left: 1133px; text-align: center;\">Jan 06</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"flot-y-axis flot-y1-axis yAxis y1Axis\" style=\"position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;\">\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 252px; left: 13px; text-align: right;\">0</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 232px; left: 7px; text-align: right;\">10</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 213px; left: 7px; text-align: right;\">20</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 194px; left: 7px; text-align: right;\">30</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 174px; left: 7px; text-align: right;\">40</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 155px; left: 7px; text-align: right;\">50</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 136px; left: 7px; text-align: right;\">60</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 116px; left: 7px; text-align: right;\">70</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 97px; left: 7px; text-align: right;\">80</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 78px; left: 7px; text-align: right;\">90</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 58px; left: 1px; text-align: right;\">100</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 39px; left: 2px; text-align: right;\">110</div>\r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 20px; left: 1px; text-align: right;\">120</div> \r\n\t\t\t\t\t\t\t<div class=\"flot-tick-label tickLabel\" style=\"position: absolute; top: 1px; left: 1px; text-align: right;\">130</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<canvas class=\"flot-overlay\" width=\"1330\" height=\"280\" style=\"direction: ltr; position: absolute; left: 0px; top: 0px; width: 1330px; height: 280px;\"></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 bg-white\">\r\n\t\t\t\t<div class=\"x_title\">\r\n\t\t\t\t\t<h2>Trade Type</h2>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-6\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p>Buy</p>\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<div class=\"progress progress_sm\" style=\"width: 76%;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"80\" aria-valuenow=\"79\" style=\"width: 80%;\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p>Sell</p>\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<div class=\"progress progress_sm\" style=\"width: 76%;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"60\" aria-valuenow=\"59\" style=\"width: 60%;\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-6\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p>Conventional Media</p>\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<div class=\"progress progress_sm\" style=\"width: 76%;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"40\" aria-valuenow=\"39\" style=\"width: 40%;\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p>Bill boards</p>\r\n\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t<div class=\"progress progress_sm\" style=\"width: 76%;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"50\" aria-valuenow=\"49\" style=\"width: 50%;\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div> -->\r\n\t\t\t<div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    // options: NgDatepickerModule  = {
    //     minYear: 1970,
    //     maxYear: 2030,
    //     displayFormat: 'YYYY-MM-DD',
    //     // barTitleFormat: 'MMMM YYYY',
    //     // dayNamesFormat: 'dd',
    //     firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    //   };
    function HomeComponent(apiHome) {
        this.apiHome = apiHome;
        this.totalRecord = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var me = this;
        this.date = new Date();
        this.getTotalRecord();
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var getFirstDay = new Date(y, m, 1);
        this.fromDate = new Date(getFirstDay);
        this.toDate = new Date();
        $(document).ready(function () {
            me.datePickerConfig();
            me.setChangedDate();
        });
    };
    HomeComponent.prototype.datePickerConfig = function () {
        var me = this;
        $(".datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            showOn: "none",
            showAnim: 'slideDown',
            buttonImageOnly: true,
            showButtonPanel: true,
            autoSize: true,
            closeText: "Clear",
            maxDate: new Date(),
        });
        //show datepicker on click
        $('#dateFrom').click(function () {
            $('#dateFrom').datepicker('show');
        });
        $('#dateTo').click(function () {
            $('#dateTo').datepicker('show');
        });
        //filter on date change
        $('#dateFrom').on('change', function (e) {
            me.onFromMonthChange(e);
        });
        $('#dateTo').on('change', function (e) {
            me.onToMonthChange(e);
        });
    };
    HomeComponent.prototype.setChangedDate = function () {
        $("#dateFrom").datepicker("setDate", this.formatDate(this.fromDate));
        $("#dateTo").datepicker("setDate", this.formatDate(this.toDate));
    };
    HomeComponent.prototype.onFromMonthChange = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'from';
        this.changeDate(event);
        this.fromDate = this.formatDate(event); //event+'-01';
        this.renderChart();
    };
    HomeComponent.prototype.onToMonthChange = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'to';
        this.changeDate(event);
        this.toDate = this.formatDate(event);
        this.renderChart();
    };
    HomeComponent.prototype.changeDate = function (argDate) {
        var todayDate = new Date(), dtFrom, dtTo, getFirstDay, getLastDay, year, month;
        dtFrom = new Date(this.fromDate);
        dtTo = new Date(argDate);
        year = dtTo.getFullYear();
        month = dtTo.getMonth();
        if (this.changeDateStatus == 'from') {
            dtFrom = new Date(argDate);
            dtTo = new Date(this.toDate);
            year = dtFrom.getFullYear();
            month = dtFrom.getMonth();
        }
        getFirstDay = new Date(dtFrom);
        getLastDay = new Date(dtTo);
        if (dtFrom.getTime() > dtTo.getTime()) {
            getFirstDay = new Date(year, month, 1);
            if (this.changeDateStatus == 'from' && dtFrom.getTime() > dtTo.getTime()) {
                getFirstDay = dtFrom;
                getLastDay = new Date(year, month + 1, 0);
            }
            if (getLastDay.getTime() > todayDate.getTime()) {
                getLastDay = new Date();
            }
        }
        this.fromDate = new Date(getFirstDay);
        this.toDate = new Date(getLastDay);
        this.setChangedDate();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.renderChart();
    };
    HomeComponent.prototype.renderChart = function () {
        var chartConfig = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Trade History'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'white'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: []
        };
        var params = {
            current_date: this.formatDate(this.fromDate),
            end_date: this.formatDate(this.toDate)
        };
        this.apiHome.stackedChart(params).subscribe(function (res) {
            var series = res.series;
            var categories = [];
            Object.keys(res.categories).forEach(function (element) {
                categories.push(element);
            });
            //   chartConfig.series = [
            //      {
            //       name: 'Buy Success',
            //       data: [5, 3, 4, 7, 4, 2, 1] 
            //     },{
            //       name: 'Buy Failed',
            //       data: [2, 2, 3, 2, 18, 3, 9]
            //     },{
            //       name: 'Sell Success',
            //       data: [3, 4, 4, 2, 22, 32, 6]
            // 	  },{
            // 		name: 'Sell Failed',
            // 		data: [3, 4, 4, 2,33, 5, 12]
            // 	 }
            //   ];
            chartConfig.series = series;
            chartConfig.xAxis.categories = categories;
            // chartConfig.xAxis.categories = ['Buy_Success', 'Buy_Failed', 'Sell_Success', 'Sell_Failed'];
            // chartConfig.xAxis.categories = ['Aug 1', 'Aug 10', 'Aug 13', 'Aug 14', 'Aug 16', 'Aug 17', 'Aug 21'];
            $('#container').highcharts(chartConfig);
        });
    };
    HomeComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        month = month.length < 2 ? ('0' + month) : month;
        day = day.length < 2 ? ('0' + day) : day;
        return [year, month, day].join('-');
    };
    HomeComponent.prototype.getTotalRecord = function () {
        var _this = this;
        this.apiHome.totalRecord().subscribe(function (res) {
            var recored = res.data;
            var obj = {
                totalWallet: recored.total_wallet,
                totalMarket: recored.total_market,
                totalClient: recored.total_client,
                totalTransaction: recored.total_transaction,
                totalBuy: recored.total_buy,
                totalSell: recored.total_sell
            };
            _this.totalRecord = obj;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market-fee/market-fee.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/market/market-fee/market-fee.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tborder:  3px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/market/market-fee/market-fee.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/market/market-fee/market-fee.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>MarketFee</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<form  [formGroup]=\"marketFeeForm\" method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"market-view api-settings-table secondary-tble\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 170px;\"><label class=\"maker-Fee-input head\">MAKER FEE (%)</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 170px;\"><label class=\"taker-Fee-input head\">TAKER FEE (%)</label></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr formArrayName=\"marketFee\" *ngFor=\"let control of marketFeeFormData.controls;let i=index\">\r\n\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"marketFeeData?.length > 0;else defaultTemplate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"crypt-market-img\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{marketApi.BASE_URL}}images/{{marketFeeData[i].image}}\" alt=\"{{marketFeeData[i].code}}\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"api-keys-input form-control btn-sq\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmin=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstep=\"0.001\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{marketFeeData[i].maker_fee}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onMakerFeeChange($event.target.value, i)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"maker_fee\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass] = \"{ 'error' : control.get('maker_fee').invalid }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"secret-keys-input form-control btn-sq\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmin=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstep=\"0.001\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{marketFeeData[i].taker_fee}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onTakerFeeChange($event.target.value, i)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"taker_fee\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass] = \"{ 'error' : control.get('taker_fee').invalid }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #defaultTemplate>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"crypt-market-img head\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"maker-Fee-input head\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"taker-Fee-input head\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<input type=\"Submit\" class=\"btn btn-success btn-large\" value=\"Save\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/market/market-fee/market-fee.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/market/market-fee/market-fee.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarketFeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketFeeComponent", function() { return MarketFeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/lang */ "./src/app/config/lang.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarketFeeComponent = /** @class */ (function () {
    function MarketFeeComponent(router, marketApi, fb) {
        this.router = router;
        this.marketApi = marketApi;
        this.fb = fb;
    }
    MarketFeeComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getMarketFeeList();
    };
    MarketFeeComponent.prototype.createForm = function () {
        this.marketFeeForm = this.fb.group({
            marketFee: this.fb.array([this.createKeyItems()]),
        });
    };
    MarketFeeComponent.prototype.createKeyItems = function (data) {
        if (data === void 0) { data = {}; }
        return this.fb.group({
            id: data.id || '',
            upsert: 0,
            maker_fee: data.maker_fee || '',
            taker_fee: data.taker_fee || '',
        });
    };
    MarketFeeComponent.prototype.getMarketFeeList = function () {
        var _this = this;
        var me = this;
        this.marketApi.getMarketFeeList().subscribe(function (res) {
            _this.marketFeeData = res.data;
            _this.removeKeyItem(0);
            _this.marketFeeData.forEach(function (item) {
                var control = me.marketFeeForm.controls['marketFee'];
                control.push(me.createKeyItems(item));
            });
        });
    };
    MarketFeeComponent.prototype.removeKeyItem = function (idx) {
        // remove marketFee from the list
        var control = this.marketFeeForm.controls['marketFee'];
        control.removeAt(idx);
    };
    Object.defineProperty(MarketFeeComponent.prototype, "marketFeeFormData", {
        get: function () {
            return this.marketFeeForm.get('marketFee');
        },
        enumerable: true,
        configurable: true
    });
    MarketFeeComponent.prototype.onMakerFeeChange = function (value, idx) {
        var control = this.marketFeeForm.controls['marketFee'], subControl = control.controls[idx];
        if (value.length > 0) {
            if (this.marketFeeData[idx]['taker_fee'] > 0) {
                subControl.controls['upsert'].setValue(1);
            }
            else {
                subControl.controls['taker_fee'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                subControl.controls['upsert'].setValue(1);
            }
        }
        else {
            subControl.controls['taker_fee'].clearValidators();
            subControl.controls['upsert'].setValue(0);
        }
        subControl.controls['taker_fee'].updateValueAndValidity();
    };
    MarketFeeComponent.prototype.onTakerFeeChange = function (value, idx) {
        var control = this.marketFeeForm.controls['marketFee'], subControl = control.controls[idx];
        if (value.length > 0) {
            if (this.marketFeeData[idx]['maker_fee'] > 0) {
                subControl.controls['upsert'].setValue(1);
            }
            else {
                subControl.controls['maker_fee'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                subControl.controls['upsert'].setValue(1);
            }
        }
        else {
            subControl.controls['maker_fee'].clearValidators();
            subControl.controls['upsert'].setValue(0);
        }
        subControl.controls['maker_fee'].updateValueAndValidity();
    };
    MarketFeeComponent.prototype.onSubmit = function () {
        var me = this;
        if (this.marketFeeForm.valid) {
            var formValue = this.marketFeeForm.value.marketFee;
            var postData_1 = [];
            formValue.forEach(function (item) {
                if (item.upsert === 1) {
                    postData_1.push({
                        id: item.id,
                        maker_fee: item.maker_fee,
                        taker_fee: item.taker_fee
                    });
                }
            });
            if (postData_1.length > 0) {
                for (var i = 0; i < postData_1.length; ++i) {
                    if (postData_1[i]['maker_fee'] < 0 || postData_1[i]['taker_fee'] < 0) {
                        alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_4__["AlertMessages"].negativeFee);
                        return;
                    }
                    else if (postData_1[i]['maker_fee'] > 100 || postData_1[i]['taker_fee'] > 100) {
                        alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_4__["AlertMessages"].maxFee);
                        return;
                    }
                }
                me.marketApi.saveMarketFeeApi(postData_1).subscribe(function (response) {
                    if (response.success) {
                        alertify.success(response['msg']);
                        me.marketFeeData = [];
                        me.createForm();
                        me.getMarketFeeList();
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                });
            }
        }
    };
    MarketFeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-fee',
            template: __webpack_require__(/*! ./market-fee.component.html */ "./src/app/components/market/market-fee/market-fee.component.html"),
            styles: [__webpack_require__(/*! ./market-fee.component.css */ "./src/app/components/market/market-fee/market-fee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_market_service__WEBPACK_IMPORTED_MODULE_2__["MarketService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MarketFeeComponent);
    return MarketFeeComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market-form/market-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/market/market-form/market-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/market/market-form/market-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/market/market-form/market-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span *ngIf=\"isNew\" >New</span>\r\n\t\t<span *ngIf=\"!isNew\">Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Market</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Market</h4>\r\n\t\t<div class=\"error-message-container\">\r\n\t\t\t<span class=\"error\" *ngFor = \"let item of formErrors | keyvalue\"> {{item.value}} </span>\r\n\t\t</div>\r\n\t\t<ul class=\"nav nav-tabs form-tabs\" id=\"market-form-tabs\" role=\"tablist\">\r\n\t\t\t<li [ngClass]=\"{'active': entryTab>=1}\" class=\"nav-item \" (click)=\"onTabChange(1)\">\r\n\t\t\t\t<a id=\"market-basic-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"market-basic\" aria-selected=\"true\">General</a >\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': entryTab>=2}\" class=\"nav-item\" (click)=\"onTabChange(2)\">\r\n\t\t\t\t<a id=\"market-address-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"market-address\" aria-selected=\"true\">Address</a >\r\n\t\t\t</li>\r\n\t\t\t<li [ngClass]=\"{'active': entryTab>=3}\" class=\"nav-item\" (click)=\"onTabChange(3)\">\r\n\t\t\t\t<a id=\"market-fee-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"market-fee\" aria-selected=\"true\">Fee</a >\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<!-- general-form -->\r\n\t\t<form  *ngIf=\"tabId == 1\" [formGroup]=\"marketForm\" class=\"form-horizontal\" method=\"POST\">\r\n\t\t\t<div class=\"tab-content\" id=\"market-form-tabs-content\">\r\n\t\t\t\t<div class=\" active in\" id=\"market-basic\" role=\"tabpanel\" aria-labelledby=\"market-basic-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-code\">Code: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Code\" type=\"text\" formControlName=\"code\" class=\"form-control\" id=\"market-code\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['code']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-name\">Market Name EN: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Name\" type=\"text\" formControlName=\"market_name_en\" class=\"form-control\" id=\"market-name\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['market_name_en']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-name\">Market Name JP: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Name\" type=\"text\" formControlName=\"market_name_ja\" class=\"form-control\" id=\"market-name\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['market_name_ja']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\">Status: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t\t<!-- market address form -->\r\n\t\t<form *ngIf=\"tabId == 2\" [formGroup]=\"addressForm\" class=\"form-horizontal\" method=\"POST\">\r\n\t\t\t\t<div class=\"\" id=\"market-address\" role=\"tabpanel\" aria-labelledby=\"market-address-tab\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-addr\">Address Line 1:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Address\" type=\"text\" formControlName=\"address_line1\" class=\"form-control\" id=\"market-name\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['address_line1']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-addr2\">Address Line 2:</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Address 2\" type=\"text\" formControlName=\"address_line2\" class=\"form-control\" id=\"market-addr2\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['address_line2']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"market-addr2\">Country: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select type=\"text\" formControlName=\"country\" class=\"form-control\" id=\"market-country\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" label=\"Select a Country\" disabled></option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of country\" [value]=\"item.country_code\">{{item.country_name}}</option>\r\n\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['country']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"homepage_url\">Homepage URL: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Homepage URL\" type=\"text\" formControlName=\"homepage_url\" class=\"form-control\" id=\"homepage_url\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['homepage_url']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-3\" for=\"homepage_url\">Dashboard URL: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input placeholder=\"Dashboard URL\" type=\"text\" formControlName=\"dashboard_url\" class=\"form-control\" id=\"dashboard_url\" />\r\n\t\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['dashboard_url']}}</span></div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t\t<!-- market fee form -->\r\n\t\t<form *ngIf=\"tabId == 3\" [formGroup]=\"feeForm\" class=\"form-horizontal\" method=\"POST\">\r\n\t\t\t<div class=\"\" id=\"market-fee\" role=\"tabpanel\" aria-labelledby=\"market-fee-tab\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-3\" for=\"market-maker-fee\">Maker Fee (%): <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t<input placeholder=\"Maker Fee\" type=\"number\" min=\"0\" formControlName=\"maker_fee\" class=\"form-control\" id=\"market-maker-fee\" />\r\n\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['maker_fee']}}</span></div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-3\" for=\"market-taker-fee\">Taker Fee (%): <span style=\"color:red\">*</span></label>\r\n\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t<input placeholder=\"Taker Fee\" type=\"number\" min=\"0\" formControlName=\"taker_fee\" class=\"form-control\" id=\"market-taker-fee\" />\r\n\t\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['taker_fee']}}</span></div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<hr>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-md-offset-3 col-md-9\">\r\n\t\t\t\t<button *ngIf=\"!isNew || tabId == 3\" type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t<button *ngIf=\"isNew && tabId !=3\" type=\"button\" class=\"btn btn-primary\" (click)=\"onNextBtnClick()\">Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/market/market-form/market-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/market/market-form/market-form.component.ts ***!
  \************************************************************************/
/*! exports provided: MarketFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketFormComponent", function() { return MarketFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketFormComponent = /** @class */ (function () {
    function MarketFormComponent(router, route, marketApi, fb) {
        this.router = router;
        this.route = route;
        this.marketApi = marketApi;
        this.fb = fb;
        this.isNew = true;
        this.formErrors = [];
        this.tabId = 1;
        this.entryTab = 1;
    }
    MarketFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
            this.marketApi.getCountryList().subscribe(function (result) {
                _this.country = result['data'];
            });
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                var me_1 = this;
                this.marketApi.getEntyData(id, 'market').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        me_1.setFormData(data);
                        _this.country = result['country_list'];
                    }
                    else {
                        me_1.router.navigate(['/wallet/list']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    MarketFormComponent.prototype.onTabChange = function (tabId) {
        if (this.entryTab < tabId) {
            this.entryTab == this.tabId;
        }
        // this.entryTab = this.tabId;
        if (this.isNew) {
            if (this.entryTab >= tabId) {
                this.tabId = tabId;
            } /*else{
              this.entryTab = this.tabId;
            }*/
        }
        else {
            this.tabId = tabId;
        }
        // this.entryTab = tabId;
    };
    MarketFormComponent.prototype.setFormData = function (data) {
        this.marketForm.controls['id'].setValue(data['id']);
        this.marketForm.controls['code'].setValue(data['code']);
        this.marketForm.controls['market_name_en'].setValue(data['market_name_en']);
        this.marketForm.controls['market_name_ja'].setValue(data['market_name_ja']);
        this.marketForm.controls['status'].setValue(data['status']);
        this.addressForm.controls['address_line1'].setValue(data['address_line1']);
        this.addressForm.controls['address_line2'].setValue(data['address_line2']);
        this.addressForm.controls['country'].setValue(data['country']);
        this.addressForm.controls['homepage_url'].setValue(data['homepage_url']);
        this.addressForm.controls['dashboard_url'].setValue(data['dashboard_url']);
        this.feeForm.controls['maker_fee'].setValue(data['maker_fee']);
        this.feeForm.controls['taker_fee'].setValue(data['taker_fee']);
    };
    MarketFormComponent.prototype.onNextBtnClick = function () {
        this.resetFormErrors();
        if (this.tabId == 1) {
            if (!this.marketForm.valid) {
                this.formErrors = [];
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.marketForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.entryTab = this.tabId;
            }
        }
        else if (this.tabId == 2) {
            if (!this.addressForm.valid) {
                this.formErrors = [];
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.addressForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.entryTab = this.tabId;
            }
        }
        else if (this.tabId == 3) {
            if (!this.feeForm.valid) {
                this.formErrors = [];
                /* IF FORM IS INVALID SET ERROR MESSAGE */
                this.setFormErrorsMsg(this.feeForm);
                // this.validateAllFormFields(this.staffDetailForm);
            }
            else {
                this.tabId = this.tabId + 1;
                this.entryTab = this.tabId;
            }
        }
    };
    MarketFormComponent.prototype.resetFormErrors = function () {
        if (this.marketForm.valid || this.addressForm.valid || this.feeForm.valid) {
            this.formErrors = [];
        }
    };
    MarketFormComponent.prototype.setFormErrorsMsg = function (form) {
        var errors = this.getFormErrors(form);
        for (var key in errors) {
            if (errors[key] != null) {
                var label = key.replace(/[_]/g, ' ');
                label = label.toLowerCase()
                    .split(' ')
                    .map(function (s) { return s.charAt(0).toUpperCase() + s.substring(1); })
                    .join(' ');
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = label + ' can not be blank.';
                }
                else if (obj.hasOwnProperty('email')) {
                    this.formErrors[key] = 'Please Enter a valid email address.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = label + ' value must be greater than ' + obj['min']['min'] + '.';
                }
                else if (obj.hasOwnProperty('max')) {
                    this.formErrors[key] = label + ' value must be less than ' + obj['max']['max'] + '.';
                }
                else {
                }
            }
        }
    };
    MarketFormComponent.prototype.createForm = function () {
        this.marketForm = this.fb.group({
            id: [''],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            market_name_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            market_name_ja: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.addressForm = this.fb.group({
            address_line1: [''],
            address_line2: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            homepage_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dashboard_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.feeForm = this.fb.group({
            maker_fee: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9\.]/)]],
            taker_fee: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9\.]/)]]
        });
    };
    /** [onSubmit Save Valid FormData as per Id if present UPDATE else NEW & success/failure response] */
    MarketFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        this.formErrors = [];
        if (!this.marketForm.valid) {
            this.setFormErrorsMsg(this.marketForm);
            return;
        }
        if (!this.addressForm.valid) {
            this.setFormErrorsMsg(this.addressForm);
            return;
        }
        if (!this.feeForm.valid) {
            this.setFormErrorsMsg(this.feeForm);
            return;
        }
        // if(!this.feeForm.valid || !this.marketForm.valid || !this.feeForm.valid){
        //   this.formErrors = {};
        //    IF FORM IS INVALID SET ERROR MESSAGE 
        //   this.setFormErrorMsg();
        //   // this.validateAllFormFields(this.staffDetailForm);
        // }
        // else{
        var body = {
            'Market[code]': me.marketForm.value.code,
            'Market[market_name_en]': me.marketForm.value.market_name_en,
            'Market[market_name_ja]': me.marketForm.value.market_name_ja,
            'Market[address_line1]': me.addressForm.value.address_line1 || '',
            'Market[address_line2]': me.addressForm.value.address_line2 || '',
            'Market[country]': me.addressForm.value.country,
            'Market[image]': 'markets/' + me.marketForm.value.code + '.png',
            'Market[is_locked]': me.marketForm.value.status ? 0 : 1,
            'Market[homepage_url]': me.addressForm.value.homepage_url,
            'Market[dashboard_url]': me.addressForm.value.dashboard_url,
            'Market[maker_fee]': me.feeForm.value.maker_fee,
            'Market[taker_fee]': me.feeForm.value.taker_fee
        };
        if (!this.isNew) {
            body['Market[id]'] = me.marketForm.value.id;
        }
        this.marketApi.saveMarket(body).subscribe(function (response) {
            if (response['success']) {
                _this.router.navigate(['market/list']);
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
                if (response['errors']) {
                    Object.assign(_this.formErrors, response['errors']);
                }
            }
        });
        // }
    };
    /** [onCancelClick cancel new/edit rec and go to market list] */
    MarketFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/market/list']);
            }
            else {
                // debugger;
            }
        });
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Set error message for timeShift and jobType if those fields are invalid
     */
    MarketFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.marketForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater than ' + obj['min']['min'] + '% or equals to 0%.';
                }
                else if (obj.hasOwnProperty('max')) {
                    this.formErrors[key] = 'This field\'s value must be smaller than ' + obj['max']['max'] + '% or equals to 100%.';
                }
                else {
                }
            }
        }
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Fetch all form errors
     * @param {FormGroup} formGroup [Staff Detail Form]
     * @returns {[Object]} errors
     */
    MarketFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    MarketFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-form',
            template: __webpack_require__(/*! ./market-form.component.html */ "./src/app/components/market/market-form/market-form.component.html"),
            styles: [__webpack_require__(/*! ./market-form.component.css */ "./src/app/components/market/market-form/market-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MarketFormComponent);
    return MarketFormComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market-list/market-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/market/market-list/market-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/market/market-list/market-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/market/market-list/market-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"market-view\">\r\n\t\t<div class=\"status-index\">\r\n\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t<span class=\"unpublished\">Inactive</span>\r\n\t\t</div>\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table\" datatable [dtOptions]=\"dtOptions\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Market</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Market Name</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">Address Line 1</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Address Line 2</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Country</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Status</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t</tr> -->\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let list of marketlist;\" style=\"text-align: center\">\r\n\t\t\t\t\t\t<td><img src=\"{{marketApi.BASE_URL}}images/{{list.image}}\" alt=\"{{list.code}}\"></td>\r\n\t\t\t\t\t\t<td>{{list.market_name_en}}</td>\r\n\t\t\t\t\t\t<td>{{list.maker_fee}}</td>\r\n\t\t\t\t\t\t<td>{{list.taker_fee}}</td>\r\n\t\t\t\t\t\t<td>{{list.address_line1}}</td>\r\n\t\t\t\t\t\t<td>{{list.address_line2}}</td>\r\n\t\t\t\t\t\t<td><img src=\"{{marketApi.BASE_URL}}images/flags/{{list.country}}.png\" alt=\"{{list.country}}\"></td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"list.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffStatusChange(list.id)\" checked>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffStatusChange(list.id)\">\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(list.id)\"  ><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title =\"Delete\" (click)=\"delete(list.id)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/market/market-list/market-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/market/market-list/market-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MarketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketListComponent", function() { return MarketListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketListComponent = /** @class */ (function () {
    function MarketListComponent(router, marketApi) {
        this.router = router;
        this.marketApi = marketApi;
        this.marketlist = [];
        this.dtOptions = {};
        this.cols = [
            { title: 'Market', data: 'id' },
            { title: 'Market Name', data: 'market_name_en' },
            { title: 'Maker Fee', data: 'maker_fee' },
            { title: 'Taker Fee', data: 'taker_fee' },
            { title: 'Address Line 1', data: 'address_line1' },
            { title: 'Address Line 2', data: 'address_line2' },
            { title: 'Country', data: 'country' },
            { title: 'Status', data: 'is_locked', sortable: false },
            { title: 'Action', data: 'id', sortable: false }
        ];
    }
    /** [ngOnInit load Market List] */
    MarketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'simple_numbers',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_4__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            bLengthChange: true,
            aaSorting: [[0, "asc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "search": " ",
                "emptyTable": "No records found",
                "lengthMenu": "Page Size _MENU_ "
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (tablesParameters, callback) {
                tablesParameters.pnl_id = 1;
                _this.marketApi.getMarketList(tablesParameters).subscribe(function (res) {
                    _this.marketlist = res.data;
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: this.cols
        };
    };
    /** [getMarketList get Market list as per pnl_id] */
    // getMarketList()
    // {
    //   let params:any = {'pnl_id' : '1'};
    // 	this.marketApi.getMarketList(params).subscribe(res=>{this.marketlist=res["data"]});
    // }
    /**
     * [edit reditect to edit form]
     * @param {[number]} [market id]
     */
    MarketListComponent.prototype.edit = function (id) {
        this.router.navigate(["market/edit/" + id]);
    };
    /**
     * [onOffStatusChange Change is_locked to 1/0 & success/failure msg]
     * @param {[number]} [market id]
     */
    MarketListComponent.prototype.onOffStatusChange = function (id) {
        var _this = this;
        var controllerName = 'market';
        this.marketApi.toggleStatus(id, controllerName).subscribe(function (res) {
            if (res['success'] == true) {
                alertify.success(res['message']);
                _this.reloadDataTable();
            }
            else {
                alertify.error(res['message']);
            }
        });
    };
    /**
     * [delete Set Market rec delete_flag =1]
     * @param {[number]} [market id]
     */
    MarketListComponent.prototype.delete = function (id) {
        var me = this;
        var message = "Do you want to delete this record?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.marketApi.deleteMarket(id).subscribe(function (response) {
                    if (response['success'] == true) {
                        me.reloadDataTable();
                        alertify.success(response['message']);
                    }
                    else {
                        alertify.error(response['message']);
                    }
                });
            }
            else {
                // 
            }
        });
    };
    MarketListComponent.prototype.reloadDataTable = function () {
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a) === "function" && _a || Object)
    ], MarketListComponent.prototype, "datatableElement", void 0);
    MarketListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-list',
            template: __webpack_require__(/*! ./market-list.component.html */ "./src/app/components/market/market-list/market-list.component.html"),
            styles: [__webpack_require__(/*! ./market-list.component.css */ "./src/app/components/market/market-list/market-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_market_service__WEBPACK_IMPORTED_MODULE_1__["MarketService"]])
    ], MarketListComponent);
    return MarketListComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/market/market-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/market/market-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MarketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketRoutingModule", function() { return MarketRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _market_list_market_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market-list/market-list.component */ "./src/app/components/market/market-list/market-list.component.ts");
/* harmony import */ var _market_form_market_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market-form/market-form.component */ "./src/app/components/market/market-form/market-form.component.ts");
/* harmony import */ var _market_wallet_form_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market-wallet-form/market-wallet-form.component */ "./src/app/components/market/market-wallet-form/market-wallet-form.component.ts");
/* harmony import */ var _market_wallet_list_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-wallet-list/market-wallet-list.component */ "./src/app/components/market/market-wallet-list/market-wallet-list.component.ts");
/* harmony import */ var _market_wallet_assign_market_wallet_assign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market-wallet-assign/market-wallet-assign.component */ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.ts");
/* harmony import */ var _market_fee_market_fee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./market-fee/market-fee.component */ "./src/app/components/market/market-fee/market-fee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _market_list_market_list_component__WEBPACK_IMPORTED_MODULE_2__["MarketListComponent"], pathMatch: 'prefix' },
    { path: 'edit/:id', component: _market_form_market_form_component__WEBPACK_IMPORTED_MODULE_3__["MarketFormComponent"], pathMatch: 'prefix' },
    { path: 'delete/:id', component: _market_list_market_list_component__WEBPACK_IMPORTED_MODULE_2__["MarketListComponent"], pathMatch: 'prefix' },
    { path: 'new', component: _market_form_market_form_component__WEBPACK_IMPORTED_MODULE_3__["MarketFormComponent"], pathMatch: 'prefix' },
    { path: 'walletList', component: _market_wallet_list_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__["MarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'walletList/edit/:id', component: _market_wallet_form_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_4__["MarketWalletFormComponent"], pathMatch: 'prefix' },
    { path: 'walletList/delete/:id', component: _market_wallet_list_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__["MarketWalletListComponent"], pathMatch: 'prefix' },
    { path: 'walletAssign', component: _market_wallet_assign_market_wallet_assign_component__WEBPACK_IMPORTED_MODULE_6__["MarketWalletAssignComponent"], pathMatch: 'prefix' },
    { path: 'market/marketFee', component: _market_fee_market_fee_component__WEBPACK_IMPORTED_MODULE_7__["MarketFeeComponent"], pathMatch: 'prefix' },
];
var MarketRoutingModule = /** @class */ (function () {
    function MarketRoutingModule() {
    }
    MarketRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MarketRoutingModule);
    return MarketRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-assign/market-wallet-assign.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-assign/market-wallet-assign.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  market-wallet-assign works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-assign/market-wallet-assign.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MarketWalletAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketWalletAssignComponent", function() { return MarketWalletAssignComponent; });
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

var MarketWalletAssignComponent = /** @class */ (function () {
    function MarketWalletAssignComponent() {
    }
    MarketWalletAssignComponent.prototype.ngOnInit = function () {
    };
    MarketWalletAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-wallet-assign',
            template: __webpack_require__(/*! ./market-wallet-assign.component.html */ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.html"),
            styles: [__webpack_require__(/*! ./market-wallet-assign.component.css */ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketWalletAssignComponent);
    return MarketWalletAssignComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market-wallet-form/market-wallet-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-form/market-wallet-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/market/market-wallet-form/market-wallet-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-form/market-wallet-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market/walletList']\">Wallet List</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Edit</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Market Wallet</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Market Wallet</h4>\r\n\t\t<form [formGroup]=\"marketForm\" class=\"form-horizontal\" method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t<div class=\"form-group\">\r\n        \t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"market_id\" class=\"form-control\"/>\r\n\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"wallet_id\" class=\"form-control\"/>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Wallet Name:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"wallet_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedWallet\" [value]=\"item.id\">{{item.code}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Market Name EN:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"market_id\">\r\n\t\t\t\t\t\t<option *ngFor=\"let item of selectedMarket\" [value]=\"item.id\">{{item.code}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n      \r\n      \t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\" for=\"market-name\">Registration Fee:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<input placeholder=\"Registration Fee\" type=\"text\" formControlName=\"registration_fee\" class=\"form-control\" id=\"market-name\" />\r\n\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['registration_fee']}}</span></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n      \r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-2\">Status:</label>\r\n\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t<div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-2 col-md-10\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/market/market-wallet-form/market-wallet-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-form/market-wallet-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MarketWalletFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketWalletFormComponent", function() { return MarketWalletFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketWalletFormComponent = /** @class */ (function () {
    function MarketWalletFormComponent(router, route, marketApi, fb) {
        this.router = router;
        this.route = route;
        this.marketApi = marketApi;
        this.fb = fb;
        this.isNew = true;
        this.formErrors = {};
    }
    MarketWalletFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                var me_1 = this;
                this.marketApi.getMarketWalletEdit(id).subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        me_1.marketForm.setValue(data);
                        _this.selectedWallet = result['wallet_list'];
                        _this.selectedMarket = result['market_list']['data'];
                    }
                    else {
                        me_1.router.navigate(['/market/walletList']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    MarketWalletFormComponent.prototype.createForm = function () {
        this.marketForm = this.fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: [''],
            market_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            market_name_en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            market_name_ja: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            registration_fee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9\.]/)]],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wallet_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    MarketWalletFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        if (!this.marketForm.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var body = {
                'Wallet[code]': me.marketForm.value.code,
                'Wallet[market_name_en]': me.marketForm.value.market_name_en,
                'Wallet[market_name_ja]': me.marketForm.value.market_name_ja,
                'Wallet[registration_fee]': me.marketForm.value.registration_fee,
                'Wallet[wallet_id]': me.marketForm.value.wallet_id,
                'Wallet[market_id]': me.marketForm.value.market_id,
                'Wallet[is_locked]': me.marketForm.value.status ? 0 : 1
            };
            if (!this.isNew) {
                body['Wallet[id]'] = me.marketForm.value.id;
            }
            this.marketApi.saveWallet(body).subscribe(function (response) {
                if (response['success']) {
                    _this.router.navigate(['market/walletList']);
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                }
            });
        }
    };
    MarketWalletFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.marketForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater than ' + obj['min']['min'] + '.';
                }
                else if (obj.hasOwnProperty('pattern')) {
                    this.formErrors[key] = 'Invalid input data.';
                }
                else {
                }
            }
        }
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Fetch all form errors
     * @param {FormGroup} formGroup [Staff Detail Form]
     * @returns {[Object]} errors
     */
    MarketWalletFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    MarketWalletFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/market/walletList']);
            }
            else {
                // debugger;
            }
        });
    };
    MarketWalletFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-wallet-form',
            template: __webpack_require__(/*! ./market-wallet-form.component.html */ "./src/app/components/market/market-wallet-form/market-wallet-form.component.html"),
            styles: [__webpack_require__(/*! ./market-wallet-form.component.css */ "./src/app/components/market/market-wallet-form/market-wallet-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_market_service__WEBPACK_IMPORTED_MODULE_3__["MarketService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MarketWalletFormComponent);
    return MarketWalletFormComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market-wallet-list/market-wallet-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-list/market-wallet-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-row {\r\n    background-color: #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/components/market/market-wallet-list/market-wallet-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-list/market-wallet-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/market']\">Market</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Wallet List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\" style=\"float: right\">\r\n\t\t\t<button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveWallet()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t<div class=\"status-index\">\r\n\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 20px;\">Market Master</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_text\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of marketList;let indx = index\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\" class=\"entry-row\" [class.active-row]=\"indx == activeRowIdx\" (click)=\"onSelectedMarket(item,indx)\">{{item.market_name_en}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<!-- <button class=\"btn btn-primary btn-sm pull-right\" (click)=\"saveWallet()\"><i class=\"fa fa-save\"></i> Save</button>\r\n\t\t\t\t<div class=\"status-index\">\r\n\t\t\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t\t\t<span class=\"unpublished\">Inactive&nbsp;</span>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Wallet</label></th>\r\n\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"country-flag head\">Market</label></th>\r\n\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bid-notifier head\">Fee</label></th>\r\n\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">Status</label></th>\r\n\t\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngIf=\"marketWalletList == 0 && showMarketWalletGif ==false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t<td colspan=\"5\">No Records</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr *ngIf=\"showMarketWalletGif == true\">\r\n\t\t\t\t\t\t\t<td colspan=\"5\"><app-loading-mask [mask_text] =\"mask_text\"></app-loading-mask></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<ng-template ngFor let-item [ngForOf]= \"marketWalletList\" let-indx=\"index\">\r\n\t\t\t\t\t\t\t<tr *ngIf=\"item.is_deleted!=1 && showMarketWalletGif == false\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.market_name_en}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.registration_fee}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.is_locked == 0; else offStatus\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\" checked>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #offStatus>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"onOffStatusChange(item.id)\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(item.id)\" ><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"deleteItem(indx,$event)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-spin fa-spinner\" *ngIf=\"indx==verifyLoadingImgRowIdx\" ></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa\" *ngIf=\"item.is_new==1\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'fa-check-circle verify-success':item.verifyData=='1',\r\n\t\t\t\t\t\t\t\t\t'fa-times-circle verify-fail':item.verifyData=='0'}\">\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"market-view\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 20px;\">Wallet Master</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<app-loading-mask *ngIf=\"showLoadingGIf == true\" [mask_text] =\"mask_text\"></app-loading-mask>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of walletList;let indx = index\" style=\"text-align: left\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"showLoadingGIf == false\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary bnt-sm\" (click)=\"moveItem(item)\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-caret-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<span>{{item.name}}</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/market/market-wallet-list/market-wallet-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/market/market-wallet-list/market-wallet-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MarketWalletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketWalletListComponent", function() { return MarketWalletListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_market_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/market.service */ "./src/app/services/market.service.ts");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketWalletListComponent = /** @class */ (function () {
    function MarketWalletListComponent(route, marketApi, walletApi) {
        this.route = route;
        this.marketApi = marketApi;
        this.marketWalletList = [];
        this.marketList = [];
        this.walletList = [];
        this.selectedMarket = {};
        this.activeRowIdx = 0;
        this.mask_text = "Loading...";
        this.verifyLoadingImgRowIdx = null;
    }
    MarketWalletListComponent.prototype.ngOnInit = function () {
        this.getMarketList();
        this.getWalletList();
    };
    /** [getMarketWalletList fetch marketWallet rec by market id] */
    MarketWalletListComponent.prototype.getMarketWalletList = function () {
        var _this = this;
        this.showMarketWalletGif = true;
        var params = {
            market_id: this.selectedMarket['id']
        };
        this.marketApi.getMarketWalletList(params).subscribe(function (res) {
            _this.marketWalletList = res["data"];
            _this.showMarketWalletGif = false;
        });
    };
    /**
     * [edit navigate to MarketWallet edit form]
     * @param {[number]} [marketWallet Id]
     */
    MarketWalletListComponent.prototype.edit = function (id) {
        if (id == null) {
            alertify.error('Please save the record');
        }
        else {
            this.route.navigate(["market/walletList/edit/" + id]);
        }
    };
    MarketWalletListComponent.prototype.deleteItem = function (idx) {
        var _this = this;
        alertify.confirm('Do you want to delete this record?', function (res) {
            var rec = _this.marketWalletList[idx];
            if (rec.hasOwnProperty('id') && rec['id'] > 0) {
                _this.marketWalletList[idx]['is_deleted'] = 1;
            }
            else {
                _this.marketWalletList.splice(idx, 1);
            }
        });
    };
    /** [getMarketList fetch market list by pnl_id] */
    MarketWalletListComponent.prototype.getMarketList = function () {
        var _this = this;
        this.showLoadingGIf = true;
        this.showMarketWalletGif = true;
        var obj = { 'pnl_id': 2 };
        this.marketApi.marketMaster(obj).subscribe(function (res) {
            _this.marketList = res['data'];
            _this.selectedMarket = res['data'][0];
            _this.showLoadingGIf = false;
            _this.getMarketWalletList();
        });
    };
    MarketWalletListComponent.prototype.moveItem = function (item) {
        var _this = this;
        var obj = {
            market_id: this.selectedMarket.id,
            name: item.name,
            wallet_id: item.id,
            market_name_en: this.selectedMarket.market_name_en,
            registration_fee: item.registration_fee,
            is_new: 1,
            is_deleted: 0,
            is_locked: 0,
            verifyData: null
        };
        if (this.marketWalletList.some(function (e) { return e.wallet_id === obj.wallet_id && e.market_id === obj.market_id; })) {
            alertify.error('Record Already Exist');
        }
        else {
            this.marketWalletList.push(obj);
            this.verifyLoadingImgRowIdx = this.marketWalletList.length - 1;
            var params = {
                makrket_code: this.selectedMarket.code,
                wallet_code: item.name,
                rowIdx: this.marketWalletList.length - 1,
            };
            this.marketApi.verifyMarketWallet(params).subscribe(function (result) {
                _this.verifyLoadingImgRowIdx = null;
                if (result['success'] == true) {
                    _this.marketWalletList[_this.marketWalletList.length - 1]['verifyData'] = 1;
                }
                else {
                    _this.marketWalletList[_this.marketWalletList.length - 1]['verifyData'] = 0;
                }
                _this.row = result['rowId'];
            });
        }
    };
    MarketWalletListComponent.prototype.onSelectedMarket = function (item, indx) {
        this.showMarketWalletGif = true;
        this.selectedMarket = item;
        this.activeRowIdx = indx;
        this.getMarketWalletList();
    };
    /** [getWalletList fetch wallet rec by pnl_id] */
    MarketWalletListComponent.prototype.getWalletList = function () {
        var _this = this;
        var obj = {
            'pnl_id': 1
        };
        this.marketApi.walletMaster(obj).subscribe(function (res) {
            _this.walletList = res['data'];
        });
    };
    MarketWalletListComponent.prototype.saveWallet = function () {
        var me = this;
        var newRecords = this.marketWalletList.filter(function (item) {
            if (item.verifyData == 1) {
                return item.is_new == 1;
            }
        });
        var deletedRecords = this.marketWalletList.filter(function (item) {
            return item.is_deleted == 1;
        });
        var records = { new_records: JSON.stringify(newRecords), deleted_records: JSON.stringify(deletedRecords) };
        this.marketWalletList.filter(function (item) {
            // if(item.verifyData == 0){
            var msg = "Only verified records wiil be saved. Do you still want to continue ?";
            alertify.confirm(msg, function (e) {
                if (e) {
                    if (records['new_records'] == '[]' && records['deleted_records'] == '[]') {
                        alertify.error('No records to save');
                        me.getMarketWalletList();
                    }
                    else {
                        me.marketApi.saveMarketWallet(records).subscribe(function (response) {
                            if (response['success']) {
                                alertify.success(response['message']);
                                me.getMarketWalletList();
                            }
                            else {
                                alertify.error(response['message']);
                            }
                            //TODO
                        });
                    }
                }
            });
            /*}*/ /*else{
              me.marketApi.saveMarketWallet(records).subscribe(response=>{
                if(response['success']){
                  alertify.success(response['message']);
                  me.getMarketWalletList();
                }
                else{
                  alertify.error(response['message']);
                }
                //TODO
              });
            }*/
        });
    };
    /**
     * [onOffStatusChange change marketWallet is_locked to 1/0]
     * @param {[number]} [market Wallet id]
     */
    MarketWalletListComponent.prototype.onOffStatusChange = function (id) {
        var _this = this;
        if (id == null) {
            alertify.error('Please save the record');
        }
        else {
            var controllerName = 'market-wallet';
            this.marketApi.toggleStatus(id, controllerName).subscribe(function (res) {
                if (res['success'] == true) {
                    alertify.success(res['message']);
                }
                else {
                    alertify.error(res['message']);
                    _this.getMarketWalletList();
                }
            });
        }
    };
    MarketWalletListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-wallet-list',
            template: __webpack_require__(/*! ./market-wallet-list.component.html */ "./src/app/components/market/market-wallet-list/market-wallet-list.component.html"),
            styles: [__webpack_require__(/*! ./market-wallet-list.component.css */ "./src/app/components/market/market-wallet-list/market-wallet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_market_service__WEBPACK_IMPORTED_MODULE_1__["MarketService"], _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]])
    ], MarketWalletListComponent);
    return MarketWalletListComponent;
}());



/***/ }),

/***/ "./src/app/components/market/market.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/market/market.module.ts ***!
  \****************************************************/
/*! exports provided: MarketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketModule", function() { return MarketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _market_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market-routing.module */ "./src/app/components/market/market-routing.module.ts");
/* harmony import */ var _market_list_market_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market-list/market-list.component */ "./src/app/components/market/market-list/market-list.component.ts");
/* harmony import */ var _market_form_market_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-form/market-form.component */ "./src/app/components/market/market-form/market-form.component.ts");
/* harmony import */ var _market_wallet_list_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market-wallet-list/market-wallet-list.component */ "./src/app/components/market/market-wallet-list/market-wallet-list.component.ts");
/* harmony import */ var _market_wallet_assign_market_wallet_assign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./market-wallet-assign/market-wallet-assign.component */ "./src/app/components/market/market-wallet-assign/market-wallet-assign.component.ts");
/* harmony import */ var _market_wallet_form_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./market-wallet-form/market-wallet-form.component */ "./src/app/components/market/market-wallet-form/market-wallet-form.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _market_fee_market_fee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./market-fee/market-fee.component */ "./src/app/components/market/market-fee/market-fee.component.ts");
/* harmony import */ var _client_client_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/client.module */ "./src/app/components/client/client.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MarketModule = /** @class */ (function () {
    function MarketModule() {
    }
    MarketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _market_routing_module__WEBPACK_IMPORTED_MODULE_3__["MarketRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                _client_client_module__WEBPACK_IMPORTED_MODULE_11__["ClientModule"]
            ],
            declarations: [_market_list_market_list_component__WEBPACK_IMPORTED_MODULE_4__["MarketListComponent"], _market_form_market_form_component__WEBPACK_IMPORTED_MODULE_5__["MarketFormComponent"], _market_wallet_list_market_wallet_list_component__WEBPACK_IMPORTED_MODULE_6__["MarketWalletListComponent"], _market_wallet_assign_market_wallet_assign_component__WEBPACK_IMPORTED_MODULE_7__["MarketWalletAssignComponent"], _market_wallet_form_market_wallet_form_component__WEBPACK_IMPORTED_MODULE_8__["MarketWalletFormComponent"], _market_fee_market_fee_component__WEBPACK_IMPORTED_MODULE_10__["MarketFeeComponent"],],
            exports: [_market_routing_module__WEBPACK_IMPORTED_MODULE_3__["MarketRoutingModule"]]
        })
    ], MarketModule);
    return MarketModule;
}());



/***/ }),

/***/ "./src/app/components/network-settings/network-settings.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/network-settings/network-settings.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper .form-control {\r\n    background: #d4cece;\r\n    border-radius: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/network-settings/network-settings.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/network-settings/network-settings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fx form-container\">\r\n\t<div class=\"col-md-9\">\r\n\t\t<form  [formGroup]=\"form\" method=\"POST\">\r\n\t\t\t<div class=\"form-wrapper\">\r\n\t\t\t\t<div class=\"tab-content\" id=\"market-form-tabs-content\">\r\n\t\t\t\t\t<div class=\" active in\" id=\"market-basic\" role=\"tabpanel\" aria-labelledby=\"market-basic-tab\">\r\n\t\t\t\t\t\t<button type=\"button\" (click)=\"addNewRow()\" class=\"btn btn-primary\">Add New</button>\r\n\t\t\t\t\t\t<!-- <button *ngIf=\"form.controls.ipKeys.controls.length > 1\" (click)=\"deleteRow(i)\" class=\"btn btn-danger\">Remove</button> -->\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<th>Network Interface</th>\r\n\t\t\t\t\t\t\t\t<th>Public IP</th>\r\n\t\t\t\t\t\t\t\t<th>Private IP</th>\r\n\t\t\t\t\t\t\t\t<th style=\"width:5%\"></th>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr formArrayName=\"ipKeys\" *ngFor=\"let itemrow of form.controls.ipKeys.controls | keyvalue; let i=index\">\r\n\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td  style=\"text-align: center;\">eth{{itemrow.key}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" formControlName=\"network_id\" class=\"form-control disabled readonly\"></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" formControlName=\"publicIp\" class=\"form-control\"></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"text\" formControlName=\"privateIp\" class=\"form-control\"></td>\r\n\t\t\t\t\t\t\t\t\t\t<td><i (click)=\"deleteRow(i)\" class=\"fa fa-times\" aria-hidden=\"true\"></i></td>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<form  [formGroup]=\"networkIdForm\" method=\"POST\">\r\n\t\t\t<div class=\"form-wrapper\">\r\n\t\t\t\t<div class=\"tab-content\" id=\"market-form-tabs-content\">\r\n\t\t\t\t\t<div class=\" active in\" id=\"market-basic\" role=\"tabpanel\" aria-labelledby=\"market-basic-tab\">\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"text-align: center\"> Default Network Interface Id</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<select style=\"width: 70%\" id=\"network_interface_id\" formControlName=\"network_interface_id\"  >\r\n\t\t\t\t\t\t\t\t\t\t<!-- <option *ngFor=\"let dataType of networkData;let dataIndex=index\"\r\n\t\t\t\t\t\t\t\t              [ngValue]=\"dataIndex\">{{dataType}}\r\n\t\t\t\t\t\t\t\t        </option> -->\r\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of form.get('ipKeys').controls;\r\n\t\t\t\t\t\t\t                          let dataIndex=index\"\r\n\t\t\t\t\t\t\t                          [ngValue]=\"item.value.network_id\">\r\n\t\t\t\t\t\t\t                          {{ item.value.network_id }}\r\n\t\t\t\t\t\t\t\t         \t </option>\r\n\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td><input style=\"width: 100%\" type=\"text\" formControlName=\"network_interface_id\" class=\"form-control\"></td> -->\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t<div class=\"col-md-3\" style=\"margin-top: 6%\">\r\n\t\t<input type=\"Submit\" class=\"btn btn-success btn-large\" value=\"Save\" (click)=\"onSubmit()\">\r\n\t\t<input type=\"button\" class=\"btn btn-danger btn-large\" value=\"Reset\"  (click)=\"onReset()\">\r\n\t</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/network-settings/network-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/network-settings/network-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: NetworkSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkSettingsComponent", function() { return NetworkSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SOCKET_URL = window['SOCKET_URL'];
var NetworkSettingsComponent = /** @class */ (function () {
    function NetworkSettingsComponent(fb, clientApi) {
        this.fb = fb;
        this.clientApi = clientApi;
        this.val = 0;
        this.reconnectionDelay = 5000;
    }
    NetworkSettingsComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.createNetworkIdForm();
        this.getNetworkInterface();
        this.connect();
    };
    NetworkSettingsComponent.prototype.connect = function () {
        var me = this;
        var user = Orbit.CURRENT_USER;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(SOCKET_URL, {
            reconnection: true,
            reconnectionDelay: me.reconnectionDelay,
            // reconnectionDelayMax : 7000,
            query: 'user_id=' + user.user_id + '&access_token=' + user.access_token
        });
    };
    NetworkSettingsComponent.prototype.getNetworkInterface = function () {
        var _this = this;
        var me = this;
        this.clientApi.getNetworkSettings().subscribe(function (res) {
            // if(res['success']){
            _this.networkData = res['data'];
            _this.networkIdForm.controls.network_interface_id.setValue(res['network_interface_id']);
            _this.removeKeyItem(0);
            _this.networkData.forEach(function (item) {
                var control = me.form.controls['ipKeys'];
                control.push(me.createKeyItems(item));
            });
            // this.form.controls['apache_network_interface'].setValue(res['data']);
            // }
        });
    };
    NetworkSettingsComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            ipKeys: this.fb.array([this.createKeyItems()]),
        });
    };
    NetworkSettingsComponent.prototype.createNetworkIdForm = function () {
        this.networkIdForm = this.fb.group({
            'network_interface_id': ['']
        });
    };
    NetworkSettingsComponent.prototype.createKeyItems = function (data) {
        if (data === void 0) { data = {}; }
        var ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        return this.fb.group({
            network_id: [{ value: data.network_id || 'eth' + this.val, disabled: false } /*,Validators.required]*/],
            publicIp: [data.publicIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern) /*,Validators.required]*/]],
            privateIp: [data.privateIp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(ipPattern) /*,Validators.required]*/]],
        });
    };
    NetworkSettingsComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.form.controls['ipKeys'];
        var keyLength = this.form.value.ipKeys['length'], lastVal = this.form.value.ipKeys[keyLength - 1].network_id, 
        // lastNetworkId = lastVal.slice(0,3) + lastVal.slice(-1);
        lastIndx = JSON.parse(lastVal.slice(-1));
        this.val = lastIndx + 1;
        // add new formgroup
        // this.val = this.form.controls.ipKeys['length'] + 1; //5
        control.push(this.createKeyItems());
    };
    NetworkSettingsComponent.prototype.deleteRow = function (index) {
        this.val = this.form.controls.ipKeys['length'] - 1;
        // control refers to your formarray
        var control = this.form.controls['ipKeys'];
        alertify.confirm("Are you sure ? ", function (e) {
            if (e) {
                // remove the chosen row
                control.removeAt(index);
            }
        });
    };
    NetworkSettingsComponent.prototype.removeKeyItem = function (idx) {
        var control = this.form.controls['ipKeys'];
        control.removeAt(idx);
    };
    NetworkSettingsComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            var me = this;
            var formValue = this.form.value.ipKeys;
            var postData_1 = [];
            formValue.forEach(function (item) {
                postData_1.push({
                    network_id: item.network_id,
                    privateIp: item.privateIp,
                    publicIp: item.publicIp,
                });
            });
            var ipStrList_1 = "[{";
            formValue.forEach(function (element) {
                ipStrList_1 +=
                    '"' + element['network_id'] + '":{' +
                        '"privateIp":' + '"' + element['privateIp'] + '",' +
                        '"publicIp":' + '"' + element['publicIp'] + '"},';
            });
            ipStrList_1 += "}]";
            var content_1 = ipStrList_1.slice(0, ipStrList_1.lastIndexOf(',')) + ipStrList_1.slice(ipStrList_1.lastIndexOf(',') + 1, ipStrList_1.length);
            var network_interface_id_1 = this.networkIdForm.value.network_interface_id;
            var msg = "Do you want to save ?";
            alertify.confirm(msg, function (e) {
                if (e) {
                    me.clientApi.saveNetworkInterface(postData_1, network_interface_id_1).subscribe(function (res) {
                        var data = {
                            'list': content_1,
                            'id': network_interface_id_1
                        };
                        if (res['success']) {
                            alertify.success(res['message']);
                            me.socket.emit('updateNetworkInterfaceConfig', data);
                        }
                        else {
                            alertify.error(res['message']);
                        }
                    });
                }
            });
        }
        else {
            alertify.error('Enter valid IP Address');
        }
    };
    NetworkSettingsComponent.prototype.onReset = function () {
        for (var i = 0; i < this.form.controls.ipKeys['length']; ++i) {
            this.form.controls.ipKeys['controls'][i].controls.privateIp.setValue("");
            this.form.controls.ipKeys['controls'][i].controls.publicIp.setValue("");
        }
        this.networkIdForm.controls.network_interface_id.setValue('');
    };
    NetworkSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-network-settings',
            template: __webpack_require__(/*! ./network-settings.component.html */ "./src/app/components/network-settings/network-settings.component.html"),
            styles: [__webpack_require__(/*! ./network-settings.component.css */ "./src/app/components/network-settings/network-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], NetworkSettingsComponent);
    return NetworkSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-modal/modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/ng-modal/modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-modal-overlay,\r\n.ui-modal {\r\n  display: none;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.ui-modal-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.ui-modal {\r\n  max-width: 100%;\r\n  outline: none;\r\n  background-color: #fefefe;\r\n  padding: 0;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.ui-modal-header {\r\n  position: relative;\r\n  padding: 8px 16px;\r\n  background-color: #5b9bd5;\r\n  color: white;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n}\r\n.ui-modal-body {\r\n  position: relative;\r\n  padding: 10px 16px;\r\n  max-height: calc(100vh - 200px);\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.ui-modal-footer {\r\n  padding: 15px;\r\n}\r\n.ui-titlebar {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n.ui-modal-title {\r\n  font-size: 20px;\r\n}\r\n.ui-controlbar {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.ui-icon {\r\n  cursor: pointer;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent;\r\n  margin-left: 5px;\r\n}\r\n.ui-icon:hover {\r\n  opacity: 0.75;\r\n}\r\n.dragging {\r\n  cursor: move;\r\n  border-color: #66afe9;\r\n  outline: 0;\r\n  box-shadow: 0 4px 8px rgba(102,175,233,.6), 0 6px 20px rgba(0,0,0,.2);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n.resizing {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n.ui-resizable-se {\r\n  position:absolute;\r\n  cursor: se-resize;\r\n  height: 15px;\r\n  width: 15px;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.ui-resizable-e {\r\n  position:absolute;\r\n  cursor: e-resize;\r\n  height: 100%;\r\n  width: 7px;\r\n  right: -5px;\r\n  top: 0;\r\n}\r\n.ui-resizable-s {\r\n  position:absolute;\r\n  cursor: s-resize;\r\n  height: 7px;\r\n  width: 100%;\r\n  bottom: -5px;\r\n  left: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/ng-modal/modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/ng-modal/modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-modal-overlay\"\r\n     [style.zIndex]=\"zIndex\"\r\n     [ngStyle]=\"{'display': (visible && backdrop) ? 'block' : 'none'}\">\r\n</div>\r\n\r\n<div class=\"ui-modal \" tabindex=\"-1\" role=\"dialog\"\r\n     #modalRoot\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none'}\"\r\n     [style.width.px]=\"width\"\r\n     [style.minWidth.px]=\"minWidth\"\r\n     [style.zIndex]=\"contentzIndex\"\r\n     (mousedown)=\"moveOnTop()\"\r\n     (touchstart)=\"moveOnTop()\">\r\n    <div class=\"ui-modal-header\" #modalHeader\r\n         (mousedown)=\"initDrag($event.pageX, $event.pageY)\"\r\n         (touchstart)=\"initDrag($event.touches[0].pageX, $event.touches[0].pageY)\">\r\n      <div class=\"ui-titlebar\">\r\n          <span class=\"ui-modal-title\" *ngIf=\"modalTitle\">{{modalTitle}}</span>\r\n          <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"ui-controlbar\">\r\n          <span *ngIf=\"maximizable\" (click)=\"toggleMaximize($event)\">\r\n              <svg *ngIf=\"!maximized\" class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n                <path fill=\"currentColor\" d=\"M27.55 3.9h-22.6c-0.55 0-1 0.45-1 1v22.3c0 0.55 0.45 1 1 1h22.55c0.55 0 1-0.45 1-1v-22.3c0.050-0.55-0.4-1-0.95-1zM5.95 26.15v-18h20.55v18h-20.55z\"></path>\r\n              </svg>\r\n              <svg *ngIf=\"maximized\" class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n                <path fill=\"currentColor\" d=\"M27.9 3.75h-18.8c-0.4 0-0.75 0.35-0.75 0.75v4.3c0 0.1 0 0.2 0.050 0.3h-4.2c-0.55 0-1 0.45-1 1v17.4c0 0.55 0.45 1 1 1h17.65c0.55 0 1-0.45 1-1v-3.7c0.050 0 0.1 0.050 0.2 0.050h4.9c0.4 0 0.75-0.35 0.75-0.75v-18.6c-0.050-0.4-0.4-0.75-0.8-0.75zM5.2 26.5v-12.95c0.050 0 0.1 0 0.15 0h15.4c0.050 0 0.1 0 0.15 0v12.95h-15.7zM27.15 22.35h-4.15c-0.050 0-0.15 0-0.2 0.050v-12.3c0-0.55-0.45-1-1-1h-12c0.050-0.1 0.050-0.2 0.050-0.3v-3.55h17.3v17.1z\"></path>\r\n              </svg>\r\n          </span>\r\n          <span (click)=\"hide()\"\r\n                (mousedown)=\"onCloseIcon($event)\"\r\n                (touchstart)=\"onCloseIcon($event)\">\r\n            <svg class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n              <path fill=\"currentColor\" d=\"M17.75 16l9.85-9.85c0.5-0.5 0.5-1.3 0-1.75-0.5-0.5-1.3-0.5-1.75 0l-9.85 9.85-9.85-9.9c-0.5-0.5-1.3-0.5-1.75 0-0.5 0.5-0.5 1.3 0 1.75l9.85 9.9-9.9 9.85c-0.5 0.5-0.5 1.3 0 1.75 0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35l9.85-9.85 9.85 9.85c0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35c0.5-0.5 0.5-1.3 0-1.75l-9.9-9.85z\"></path>\r\n            </svg>\r\n          </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-modal-body\" #modalBody>\r\n      <ng-content select=\".app-modal-body\"></ng-content>\r\n    </div>\r\n    <div class=\"ui-modal-footer\" #modalFooter>\r\n      <ng-content select=\".app-modal-footer\"></ng-content>\r\n    </div>\r\n\r\n  <div class=\"ui-resizable-s\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeS($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeS($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n  <div class=\"ui-resizable-e\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeE($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeE($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n  <div class=\"ui-resizable-se\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeSE($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeSE($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ng-modal/modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ng-modal/modal.component.ts ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
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

var ModalComponent = /** @class */ (function () {
    function ModalComponent(element, ngZone) {
        this.element = element;
        this.ngZone = ngZone;
        this.minWidth = 260;
        this.minHeight = 200;
        this.scrollTop = true;
        this.backdrop = true;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ModalComponent.prototype, "cssClass", {
        get: function () {
            var cls = 'app-modal';
            if (this.styleClass) {
                cls += ' ' + this.styleClass;
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.zIndex) {
            this.zIndex = this.getMaxModalIndex() + 1;
            this.zIndex = this.zIndex || 1100;
        }
        this.contentzIndex = this.zIndex + 1;
    };
    ModalComponent.prototype.ngAfterViewChecked = function () {
        if (this.executePostDisplayActions) {
            this.center();
            this.executePostDisplayActions = false;
        }
    };
    ModalComponent.prototype.addEventListeners = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            window.document.addEventListener('mousemove', _this.onMousemove.bind(_this));
            window.document.addEventListener('mouseup', _this.onMouseup.bind(_this));
            window.addEventListener('resize', _this.onWindowResize.bind(_this));
            window.document.addEventListener('touchmove', _this.onTouchmove.bind(_this), false);
            window.document.addEventListener('touchend', _this.onTouchend.bind(_this), false);
        });
    };
    ModalComponent.prototype.removeEventListener = function () {
        window.document.removeEventListener('mousemove', this.onMousemove.bind(this));
        window.document.removeEventListener('mouseup', this.onMouseup.bind(this));
        window.removeEventListener('resize', this.onWindowResize.bind(this));
        window.document.removeEventListener('touchmove', this.onTouchmove.bind(this));
        window.document.removeEventListener('touchend', this.onTouchend.bind(this));
    };
    ModalComponent.prototype.onKeyDown = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
    };
    ModalComponent.prototype.onWindowResize = function () {
        this.executePostDisplayActions = true;
        this.center();
    };
    ModalComponent.prototype.onMousemove = function (event) {
        this.onDrag(event.pageX, event.pageY);
        this.onResize(event.pageX, event.pageY);
    };
    ModalComponent.prototype.onMouseup = function () {
        this.endDrag();
        this.endResize();
    };
    ModalComponent.prototype.onTouchmove = function (event) {
        var touch = event.touches[0];
        this.onDrag(touch.pageX, touch.pageY);
        this.onResize(touch.pageX, touch.pageY);
    };
    ModalComponent.prototype.onTouchend = function () {
        this.endDrag();
        this.endResize();
    };
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.executePostDisplayActions = true;
        this.visible = true;
        setTimeout(function () {
            _this.modalRoot.nativeElement.focus();
            if (_this.scrollTop) {
                _this.modalBody.nativeElement.scrollTop = 0;
            }
        }, 1);
        this.addEventListeners();
    };
    ModalComponent.prototype.hide = function () {
        this.visible = false;
        this.close.emit(true);
        this.focusLastModal();
        this.removeEventListener();
    };
    ModalComponent.prototype.center = function () {
        var elementWidth = this.modalRoot.nativeElement.offsetWidth;
        var elementHeight = this.modalRoot.nativeElement.offsetHeight;
        if (elementWidth === 0 && elementHeight === 0) {
            this.modalRoot.nativeElement.style.visibility = 'hidden';
            this.modalRoot.nativeElement.style.display = 'block';
            elementWidth = this.modalRoot.nativeElement.offsetWidth;
            elementHeight = this.modalRoot.nativeElement.offsetHeight;
            this.modalRoot.nativeElement.style.display = 'none';
            this.modalRoot.nativeElement.style.visibility = 'visible';
        }
        var x = Math.max((window.innerWidth - elementWidth) / 2, 0);
        var y = 60; /*Math.max((window.innerHeight - elementHeight) / 2, 0);*/
        this.modalRoot.nativeElement.style.left = x + 'px';
        this.modalRoot.nativeElement.style.top = y + 'px';
    };
    ModalComponent.prototype.initDrag = function (pageX, pageY) {
        if (!this.maximized) {
            this.dragging = true;
            this.lastPageX = pageX;
            this.lastPageY = pageY;
            this.modalRoot.nativeElement.classList.add('dragging');
        }
    };
    ModalComponent.prototype.onDrag = function (pageX, pageY) {
        if (this.dragging) {
            var deltaX = pageX - this.lastPageX;
            var deltaY = pageY - this.lastPageY;
            var leftPos = parseFloat(this.modalRoot.nativeElement.style.left);
            var topPos = parseFloat(this.modalRoot.nativeElement.style.top);
            this.modalRoot.nativeElement.style.left = leftPos + deltaX + 'px';
            this.modalRoot.nativeElement.style.top = topPos + deltaY + 'px';
            this.lastPageX = pageX;
            this.lastPageY = pageY;
        }
    };
    ModalComponent.prototype.endDrag = function () {
        this.dragging = false;
        this.modalRoot.nativeElement.classList.remove('dragging');
    };
    ModalComponent.prototype.initResizeS = function (pageX, pageY) {
        this.resizingS = true;
        this.lastPageX = pageX;
        this.lastPageY = pageY;
        this.modalRoot.nativeElement.classList.add('resizing');
    };
    ModalComponent.prototype.initResizeE = function (pageX, pageY) {
        this.resizingE = true;
        this.lastPageX = pageX;
        this.lastPageY = pageY;
        this.modalRoot.nativeElement.classList.add('resizing');
    };
    ModalComponent.prototype.initResizeSE = function (pageX, pageY) {
        this.resizingSE = true;
        this.lastPageX = pageX;
        this.lastPageY = pageY;
        this.modalRoot.nativeElement.classList.add('resizing');
    };
    ModalComponent.prototype.onResize = function (pageX, pageY) {
        if (this.resizingS || this.resizingE || this.resizingSE) {
            var deltaX = pageX - this.lastPageX;
            var deltaY = pageY - this.lastPageY;
            var containerWidth = this.modalRoot.nativeElement.offsetWidth;
            var containerHeight = this.modalRoot.nativeElement.offsetHeight;
            var contentHeight = this.modalBody.nativeElement.offsetHeight;
            var newWidth = containerWidth + deltaX;
            var newHeight = containerHeight + deltaY;
            if (this.resizingSE || this.resizingE) {
                if (newWidth > this.minWidth) {
                    this.modalRoot.nativeElement.style.width = newWidth + 'px';
                }
            }
            if (this.resizingSE || this.resizingS) {
                if (newHeight > this.minHeight) {
                    this.modalRoot.nativeElement.style.height = newHeight + 'px';
                    this.modalBody.nativeElement.style.height = contentHeight + deltaY + 'px';
                    this.modalBody.nativeElement.style.maxHeight = 'none';
                }
            }
            this.lastPageX = pageX;
            this.lastPageY = pageY;
        }
    };
    ModalComponent.prototype.endResize = function () {
        this.resizingS = false;
        this.resizingE = false;
        this.resizingSE = false;
        this.modalRoot.nativeElement.classList.remove('resizing');
    };
    ModalComponent.prototype.calcBodyHeight = function () {
        var windowHeight = window.innerHeight;
        if (this.modalRoot.nativeElement.offsetWidth > windowHeight) {
            this.modalBody.nativeElement.style.height = (windowHeight * .75) + 'px';
        }
    };
    ModalComponent.prototype.getMaxModalIndex = function () {
        var zIndex = 0;
        var modals = document.querySelectorAll('.ui-modal');
        [].forEach.call(modals, function (modal) {
            var indexCurrent = parseInt(modal.style.zIndex, 10);
            if (indexCurrent > zIndex) {
                zIndex = indexCurrent;
            }
        });
        return zIndex;
    };
    ModalComponent.prototype.focusLastModal = function () {
        var modal = this.findAncestor(this.element.nativeElement, 'app-modal');
        if (modal && modal.children[1]) {
            modal.children[1].focus();
        }
    };
    ModalComponent.prototype.findAncestor = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {
        }
        return el;
    };
    ModalComponent.prototype.onCloseIcon = function (event) {
        event.stopPropagation();
    };
    ModalComponent.prototype.toggleMaximize = function (event) {
        if (this.maximized) {
            this.revertMaximize();
        }
        else {
            this.maximize();
        }
        event.preventDefault();
    };
    ModalComponent.prototype.maximize = function () {
        this.preMaximizePageX = parseFloat(this.modalRoot.nativeElement.style.top);
        this.preMaximizePageY = parseFloat(this.modalRoot.nativeElement.style.left);
        this.preMaximizeRootWidth = this.modalRoot.nativeElement.offsetWidth;
        this.preMaximizeRootHeight = this.modalRoot.nativeElement.offsetHeight;
        this.preMaximizeBodyHeight = this.modalBody.nativeElement.offsetHeight;
        this.modalRoot.nativeElement.style.top = '0px';
        this.modalRoot.nativeElement.style.left = '0px';
        this.modalRoot.nativeElement.style.width = '100vw';
        this.modalRoot.nativeElement.style.height = '100vh';
        var diffHeight = this.modalHeader.nativeElement.offsetHeight + this.modalFooter.nativeElement.offsetHeight;
        this.modalBody.nativeElement.style.height = 'calc(100vh - ' + diffHeight + 'px)';
        this.modalBody.nativeElement.style.maxHeight = 'none';
        this.maximized = true;
    };
    ModalComponent.prototype.revertMaximize = function () {
        this.modalRoot.nativeElement.style.top = this.preMaximizePageX + 'px';
        this.modalRoot.nativeElement.style.left = this.preMaximizePageY + 'px';
        this.modalRoot.nativeElement.style.width = this.preMaximizeRootWidth + 'px';
        this.modalRoot.nativeElement.style.height = this.preMaximizeRootHeight + 'px';
        this.modalBody.nativeElement.style.height = this.preMaximizeBodyHeight + 'px';
        this.maximized = false;
    };
    ModalComponent.prototype.moveOnTop = function () {
        if (!this.backdrop) {
            var zIndex = this.getMaxModalIndex();
            if (this.contentzIndex <= zIndex) {
                this.contentzIndex = zIndex + 1;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ModalComponent.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ModalComponent.prototype, "minWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ModalComponent.prototype, "minHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "scrollTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "maximizable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "backdrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalRoot'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "modalRoot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalBody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "modalBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalHeader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "modalHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalFooter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalComponent.prototype, "modalFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ModalComponent.prototype, "cssClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.esc', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onKeyDown", null);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/ng-modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/ng-modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/node-server/node-server.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/node-server/node-server.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".server-active{\r\n\tcolor: #4ed40c;\r\n\tvertical-align: super;\r\n\tmargin-left: 3px;\r\n}\r\n.server-inactive{\r\n\tcolor: #ff5656;\r\n\tvertical-align: super;\r\n\tmargin-left: 3px;\r\n}\r\n.fa-circle {\r\n\tfont-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/components/node-server/node-server.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/node-server/node-server.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Node Server</span>\r\n\t</div>\r\n</div>\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\" style=\"float: right\">\r\n\t\t\t<button class=\"btn btn-danger btn-sm pull-right\" (click)=\"stopServer()\"> Stop Server</button>\r\n\t\t\t<button class=\"btn btn-primary btn-sm pull-right\" (click)=\"startServer()\"> Start Server</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"server-tabs\">\r\n\t\t<ul class=\"nav nav-tabs server-host\">\r\n\t\t\t<li class=\"nav-item\" *ngFor=\"let item of activeHostSelModel\" [ngClass]=\"{'active':item.id == activeHostId, 'server-active':item.server_active, 'server-inactive':!item.server_active}\" (click)=\"onHostChange(item)\">\r\n\t\t\t\t<a class=\"nav-link active\" href=\"javascript:void(0);\">{{item.host}}:{{item.port}}<i class=\"fa fa-circle\" [ngClass]=\"{'server-active':item.server_active == true, 'server-inactive':item.server_active == false}\"></i></a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"log-container\" class=\"log-container\">\r\n\t\t<!-- <div class=\"rooms\" *ngFor=\"let item of rooms;let indx = index\" style=\"text-align: left\">\r\n\t\t\t<div class=\"{{item.room}}\">\r\n\t\t\t\t<span>{{item.room}}</span>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t\t<div *ngFor=\"let item of activeHostSelModel\" id = \"{{item.id}}\" class=\" server-log-container\" [hidden]=\"item.id != activeHostId\"> </div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/node-server/node-server.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/node-server/node-server.component.ts ***!
  \*****************************************************************/
/*! exports provided: NodeServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeServerComponent", function() { return NodeServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_node_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/node-server.service */ "./src/app/services/node-server.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SOCKET_URL = window['SOCKET_URL'];
var NodeServerComponent = /** @class */ (function () {
    //   id: 1,
    //   host : '127.0.0.1',
    //   server_active : false,
    //   port : 3001
    //   },
    //   {
    //   id: 2,
    //   host : '127.0.0.1',
    //   server_active : false,
    //   port : 3002
    //   }];
    function NodeServerComponent(route, nodeServerApi) {
        this.route = route;
        this.nodeServerApi = nodeServerApi;
        this.reconnectionDelay = 5000;
        this.rooms = [];
        this.activeHostId = 1;
        this.activeHostSelModel = Orbit['NODE_SERVERS']; //[{
    }
    NodeServerComponent.prototype.ngOnInit = function () {
        // this.getRoom();
        this.connect();
    };
    NodeServerComponent.prototype.ngOnDestroy = function () {
        var me = this, obj = {
            items: [],
            bidRateArr: {},
            askRateArr: {},
            base_balance_arr: {},
            quote_balance_arr: {},
            // cash_balance_arr   : {},
            tickers: {},
            max_bid_market: '',
            min_ask_market: '',
            base_balance_total: 0,
            quote_balance_total: 0,
            // cash_balance_total : 0,
            base_jpy_rate: 0,
            quote_jpy_rate: 0,
            symbol: Orbit.CURRENT_USER.symbol,
            tradeActionChecked: true
        };
        if (this.socket) {
            this.socket.io.disconnect();
        }
    };
    NodeServerComponent.prototype.getRoom = function () {
        var _this = this;
        this.nodeServerApi.getRoom([]).subscribe(function (response) {
            if (response['success']) {
                // alertify.success(response['message']);
                _this.rooms = response['data'];
                _this.connect();
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    NodeServerComponent.prototype.startServer = function () {
        var me = this;
        this.nodeServerApi.startServer([]).subscribe(function (response) {
            if (response['success']) {
                if (!me.socket.connected) {
                    // me.socket.io.reconnect();
                    me.connect();
                }
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    NodeServerComponent.prototype.stopServer = function () {
        var me = this;
        this.nodeServerApi.stopServer([]).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
            //TODO
        });
    };
    /**
     * Initialize Socket Conneciton
     * @param {[FormGroup]} bitForm [BitForm]
     */
    NodeServerComponent.prototype.connect = function () {
        var me = this;
        var user = Orbit.CURRENT_USER;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(SOCKET_URL, {
            reconnection: true,
            reconnectionDelay: me.reconnectionDelay,
            // reconnectionDelayMax : 7000,
            query: 'user_id=' + user.user_id + '&access_token=' + user.access_token
        });
        this.socket.on('server_status', function (resp) {
            Object.keys(me.activeHostSelModel).forEach(function (key) {
                if (me.activeHostSelModel[key]['id'] == resp.id) {
                    me.activeHostSelModel[key]['server_active'] = resp.status == 'Active' ? true : false;
                }
            });
        });
        this.socket.on('admin_log', function (result) {
            var data = result.data, host_id = result.host_id, log_type = me.getAlertType(data), //data.includes("[ERROR]") ? 'error' : 'info',
            status_color = log_type == 'error' ? 'red' : 'green';
            var element = document.getElementById(host_id);
            if (element) {
                data = '<div class="alert-' + log_type + '" >' + data + '</div>';
                var item = document.createElement('div');
                item.className = "log-div";
                item.innerHTML = data;
                // let text = element.innerHTML;
                // text = data.concat(text);
                element.insertBefore(item, element.firstChild);
                // element.innerHTML = text;
            }
        });
        this.socket.on('disconnect', function (data) {
            Object.keys(me.activeHostSelModel).forEach(function (key) {
                me.activeHostSelModel[key]['server_active'] = false;
            });
        });
    };
    NodeServerComponent.prototype.onHostChange = function (serverHostItem) {
        this.activeHostId = serverHostItem['id'];
    };
    NodeServerComponent.prototype.getAlertType = function (data) {
        if (data.includes("[ERROR]")) {
            return 'danger';
        }
        else if (data.includes("[INFO]")) {
            return 'info';
        }
        else if (data.includes("[WARNING]")) {
            return 'warning';
        }
        else if (data.includes("[ALERT]")) {
            return 'warning';
        }
        else if (data.includes("[SUCCESS]")) {
            return 'success';
        }
        else {
            return 'info';
        }
        ;
    };
    NodeServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-server',
            template: __webpack_require__(/*! ./node-server.component.html */ "./src/app/components/node-server/node-server.component.html"),
            styles: [__webpack_require__(/*! ./node-server.component.css */ "./src/app/components/node-server/node-server.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_node_server_service__WEBPACK_IMPORTED_MODULE_2__["NodeServerService"]])
    ], NodeServerComponent);
    return NodeServerComponent;
}());



/***/ }),

/***/ "./src/app/components/order-cancel-modal/order-cancel-modal.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/order-cancel-modal/order-cancel-modal.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order-cancel-modal/order-cancel-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order-cancel-modal/order-cancel-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"confirm-msg\">\r\n\t<label>Do you want to cancel this order #{{selectedRec.order_id}} ?</label>\r\n\t<input #secretKey type=\"password\" placeholder=\"Secret Key\">\r\n</p>\r\n<div class=\"modal-buttons-group\">\r\n\t<button type=\"button\" class=\"btn btn-outline-dark btn-cancel\" style=\"float: right;\" (click)=\"orderBtnCancel(secretKey)\">CANCEL</button>\r\n\t<button type=\"button\" class=\"btn btn-outline-dark btn-ok\" style=\"float: right;\" (click)=\"orderCancel(secretKey)\">OK</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/order-cancel-modal/order-cancel-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-cancel-modal/order-cancel-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderCancelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCancelModalComponent", function() { return OrderCancelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trade-history.service */ "./src/app/services/trade-history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderCancelModalComponent = /** @class */ (function () {
    function OrderCancelModalComponent(tradeHistoryApi) {
        this.tradeHistoryApi = tradeHistoryApi;
    }
    OrderCancelModalComponent.prototype.ngOnInit = function () {
    };
    OrderCancelModalComponent.prototype.orderCancel = function (secret_key_fld) {
        var me = this;
        me.secretKey = secret_key_fld.value;
        var params = {
            'secret_key': me.secretKey,
            'market_code': me.selectedRec.code,
            'symbol': me.selectedRec.name,
            'order_id': me.selectedRec.order_id,
        };
        me.tradeHistoryApi.cancelOrder(params).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
            secret_key_fld.value = null;
            me.modal.hide();
        });
    };
    OrderCancelModalComponent.prototype.orderBtnCancel = function (secret_key_fld) {
        secret_key_fld.value = null;
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderCancelModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderCancelModalComponent.prototype, "selectedRec", void 0);
    OrderCancelModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-cancel-modal',
            template: __webpack_require__(/*! ./order-cancel-modal.component.html */ "./src/app/components/order-cancel-modal/order-cancel-modal.component.html"),
            styles: [__webpack_require__(/*! ./order-cancel-modal.component.css */ "./src/app/components/order-cancel-modal/order-cancel-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__["TradeHistoryService"]])
    ], OrderCancelModalComponent);
    return OrderCancelModalComponent;
}());



/***/ }),

/***/ "./src/app/components/order-detail-modal/order-detail-modal.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/order-detail-modal/order-detail-modal.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order-detail-modal/order-detail-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order-detail-modal/order-detail-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"progress-screen\" *ngIf=\"tradeHistoryApi.isOrderDetailDataEmpty == true\">\r\n\t\t<p>\r\n\t\t\t<img src=\"{{tradeHistoryApi.BASE_URL}}images/processing.gif\" alt=\"\">\r\n\t\t\t<span>Loading Data..</span>\r\n\t\t</p>\r\n\t</div>\r\n\t<ng-container *ngIf=\"tradeHistoryApi.isOrderDetailDataEmpty == false\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading row\">\r\n\t\t\t\t<div class=\"col-md-12 mt-0\">\r\n\t\t\t\t\t<h2 class=\"panel-title bg-light px-3 py-2\">\r\n\t\t\t\t\t\tRequest Trade Info\r\n\t\t\t\t\t\t<span class=\"badge float-right\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{'badge-info':tradeHistoryApi.orderDetailData.status=='open',\r\n\t\t\t\t\t\t\t\t\t\t'badge-success':tradeHistoryApi.orderDetailData.status=='closed',\r\n\t\t\t\t\t\t\t\t\t\t'badge-warning':tradeHistoryApi.orderDetailData.status=='cancel'}\">\r\n\t\t\t\t\t\t\t{{tradeHistoryApi.orderDetailData.status}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<table align=\"center\" class=\"border mb-4\">\r\n\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t<col width=\"40%\">\r\n\t\t\t\t\t\t<col width=\"60%\">\r\n\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Market: </td>\r\n\t\t\t\t\t\t<td><span><img src=\"{{tradeHistoryApi.BASE_URL}}images/markets/{{tradeHistoryApi.orderDetailData.market_code}}.png\" alt=\"{{tradeHistoryApi.orderDetailData.market_code}}\"></span> </td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Order Id: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.order_id}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Exchange Rate: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.exchange_rate }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Estimated Profit: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.estimated_profit }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade BTC Amount: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.trade_btc_amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade ETH Amount: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.trade_eth_amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Type: </td>\r\n\t\t\t\t\t\t<td>{{tradeHistoryApi.orderDetailData.request_trade_info.trade_type}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-header\">\r\n\t\t\t\t<h2 class=\"panel-title bg-light px-3 py-2\">Response Trade Info</h2>\r\n\t\t\t</div>\r\n\t\t\t<div *ngFor=\"let item of tradeHistoryApi.orderDetailData.response_trade_info\" class=\"panel-body\">\r\n\t\t\t\t<table align=\"center\" class=\"border mb-4\">\r\n\t\t\t\t<colgroup>\r\n\t\t\t\t\t<col width=\"40%\">\r\n\t\t\t\t\t<col width=\"60%\">\r\n\t\t\t\t</colgroup>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade Id: </td>\r\n\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td> Time: </td>\r\n\t\t\t\t\t\t<td>{{item.formatted_timestamp }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Symbol: </td>\r\n\t\t\t\t\t\t<td>{{item.symbol }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Type: </td>\r\n\t\t\t\t\t\t<td>{{item.type}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Side: </td>\r\n\t\t\t\t\t\t<td>{{item.side}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Price ({{tradeHistoryApi.orderDetailData['request_trade_info'].quoteId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.price}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Cost: </td>\r\n\t\t\t\t\t\t<td>{{item.cost}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Amount ({{tradeHistoryApi.orderDetailData['request_trade_info'].baseId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Filled ({{tradeHistoryApi.orderDetailData['request_trade_info'].baseId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.filled}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Remaining: </td>\r\n\t\t\t\t\t\t<td>{{item.remaining}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Status: </td>\r\n\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Fee ({{item.fee ? item.fee.currency : ''}}): </td>\r\n\t\t\t\t\t\t<td>{{item.fee ? item.fee.cost : 0}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<!-- <ng-container *ngIf=\"frontendApi.orderDetailData.oldStatus == frontendApi.orderDetailData.status; else disableUpdateBtn\">\r\n\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onFeatchApiResponseClick()\" disabled>Update Status</button>\r\n\t</ng-container>\r\n\t<ng-template #disableUpdateBtn>\r\n\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onFeatchApiResponseClick()\">Update Status</button>\r\n\t</ng-template> -->\r\n    <!-- <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">OK</button> -->\r\n"

/***/ }),

/***/ "./src/app/components/order-detail-modal/order-detail-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-detail-modal/order-detail-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailModalComponent", function() { return OrderDetailModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trade-history.service */ "./src/app/services/trade-history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailModalComponent = /** @class */ (function () {
    function OrderDetailModalComponent(tradeHistoryApi) {
        this.tradeHistoryApi = tradeHistoryApi;
    }
    OrderDetailModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderDetailModalComponent.prototype, "modal", void 0);
    OrderDetailModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail-modal',
            template: __webpack_require__(/*! ./order-detail-modal.component.html */ "./src/app/components/order-detail-modal/order-detail-modal.component.html"),
            styles: [__webpack_require__(/*! ./order-detail-modal.component.css */ "./src/app/components/order-detail-modal/order-detail-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__["TradeHistoryService"]])
    ], OrderDetailModalComponent);
    return OrderDetailModalComponent;
}());



/***/ }),

/***/ "./src/app/components/trade-history/trade-history.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/trade-history/trade-history.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-client-and-date {\r\n\tmargin-bottom: 10px;\r\n}\r\n.ele-label {\r\n\tfloat: left;\r\n\tmargin: 3px;\r\n}"

/***/ }),

/***/ "./src/app/components/trade-history/trade-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/trade-history/trade-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>Trade-History</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row select-client-and-date\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<label class=\"ele-label\">Client</label>\r\n\t\t\t<app-client-combogrid (modelChange)=\"onClientChange()\" [model]=\"clientInfo\"></app-client-combogrid>\r\n\t\t\t<!-- <select (change)=\"onClientSelect($event.target.value)\">\r\n\t\t\t\t<option value=\"\" selected>--Select Client--</option>\r\n\t\t\t\t<option *ngFor=\"let item of clientList;let idx=index\" [value]=\"idx\">{{item.client_name_en}}</option>\r\n\t\t\t</select> -->\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<label class=\"ele-label\">Date From:</label><!-- <ng-datepicker [(ngModel)]=\"fromDate\" [options]=\"options\" (ngModelChange)=\"onDateFrom($event)\"></ng-datepicker> -->\r\n\t\t\t<input type=\"text\" id=\"dateFrom\" class=\"datepicker\" name=\"trade_date\">\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<label class=\"ele-label\">Date To:</label><!-- <ng-datepicker [(ngModel)]=\"toDate\" [options]=\"options\" (ngModelChange)=\"onDateTo($event)\"></ng-datepicker> -->\r\n\t\t\t<input type=\"text\" id=\"dateTo\" class=\"datepicker\" name=\"trade_date\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"market-view\">\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table\" datatable [dtOptions]= dtOptions id='log-table'>\r\n\t\t\t\t<colgroup>\r\n\t\t\t\t\t<col width=\"100px\">\r\n\t\t\t\t\t<col width=\"100px\">\r\n\t\t\t\t\t<col width=\"100px\">\r\n\t\t\t\t\t<col width=\"100px\">\r\n\t\t\t\t\t<col width=\"200px\">\r\n\t\t\t\t\t<col width=\"200px\">\r\n\t\t\t\t\t<col width=\"200px\">\r\n\t\t\t\t\t<col width=\"110px\">\r\n\t\t\t\t\t<col width=\"120px\">\r\n\t\t\t\t\t<col width=\"120px\">\r\n\t\t\t\t\t<col width=\"140px\">\r\n\t\t\t\t\t<col width=\"150px\">\r\n\t\t\t\t</colgroup>\r\n\t\t\t\t<thead>\r\n\t\t\t\t<!-- \t<tr>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Client</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"cash-balance head\">Market</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"cash-balance head\">Wallet</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"ask-notifier head\">Status</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"ask-notifier head\">Date</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 160px;\"><label class=\"bit-balance head\">Request Time</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 160px;\"><label class=\"cash-balance head\">Response Time</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 70px;\"><label class=\"cash-balance head\">Type</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"cash-balance head\">Amount</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Exchange Rate</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"cash-balance head\">Spred Percent</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Estimated Profit</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 300px;\"><label class=\"cash-balance head\">Response</label></th>\r\n\t\t\t\t\t</tr> -->\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let list of tradeHistoryList;\" style=\"text-align: center\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-eye\" (click)=\"onShowModal(list.server_response)\" title=\"View Order Response\" style=\"cursor: pointer;font-size:18px;\"></i>&nbsp;\r\n\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" (click)=\"onOrderIdClick(detailModalRoot, list, idx)\" title=\"View Order Detail\" style=\"cursor: pointer;font-size:18px;\"></i>&nbsp;\r\n\t\t\t\t\t\t\t<i *ngIf=\"list.trade_status == 'open'\" class=\"fa fa-remove\" (click)=\"onOrderCancelClick(cancelModalRoot, list, idx)\" title=\"Cancel Order\" style=\"cursor: pointer;font-size:18px;\">\r\n\t\t\t\t\t\t\t</i>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span><img src=\"{{tradeHistoryApi.BASE_URL}}images/{{list.image}}\" alt=\"{{list.code}}\"></span></td>\r\n\t\t\t\t\t\t<td>{{list.name}}</td>\r\n\t\t\t\t\t\t<td>{{list.trade_status}}</td>\r\n\t\t\t\t\t\t<td>{{list.trade_date}}</td>\r\n\t\t\t\t\t\t<td>{{list.request_time}}</td>\r\n\t\t\t\t\t\t<td>{{list.response_time}}</td>\r\n\t\t\t\t\t\t<td>{{list.trade_type}}</td>\r\n\t\t\t\t\t\t<td>{{list.trade_eth_amount}}</td>\r\n\t\t\t\t\t\t<td>{{list.exchange_rate}}</td>\r\n\t\t\t\t\t\t<td>{{list.spred_percent}}</td>\r\n\t\t\t\t\t\t<td>{{list.estimated_profit}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<tfoot>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"image\"></td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"name\"></td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select name=\"trade_status\" class=\"filter-input trade_status\" style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t<option *ngFor = \"let item of trade_status | keyvalue\"  value=\"{{item.key}}\">{{item.value}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input style=\"width: 100%\" type=\"text\" id=\"trade_date\" class=\"date-search-input datepicker filter-input\" name=\"trade_date\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input style=\"width: 100%\" type=\"text\" id=\"request_time\" class=\"date-search-input datepicker filter-input\" name=\"trade_date\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input style=\"width: 100%\" type=\"text\" id=\"response_time\" class=\"date-search-input datepicker filter-input\" name=\"trade_date\">\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<select name=\"trade_type\" class=\"filter-input trade_type\" style=\"width: 100%; height: 100%\">\r\n\t\t\t\t\t\t\t\t<option *ngFor = \"let item of trade_type | keyvalue\"  value=\"{{item.key}}\">{{item.value}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"trade_eth_amount\"></td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"exchange_rate\"></td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"spred_percent\"></td>\r\n\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" class=\"filter-input\" name=\"estimated_profit\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tfoot>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<app-modal #detailModalRoot\r\n               [modalTitle]=\"'Orbit'\"\r\n               [width]=\"500\"\r\n               [maximizable]=\"true\"\r\n               [zIndex]=\"1100\"\r\n               >\r\n      <ng-container class=\"app-modal-body\">\r\n        <app-order-detail-modal [modal] = \"detailModal\"></app-order-detail-modal>\r\n      </ng-container>\r\n      <ng-container class=\"app-modal-footer\">\r\n        <div class=\"float-right\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"detailModalRoot.hide()\">OK</button>\r\n        </div>\r\n      </ng-container>\r\n</app-modal>\r\n\r\n<app-modal #cancelModalRoot\r\n               [modalTitle]=\"'Orbit'\"\r\n               [width]=\"500\"\r\n               [maximizable]=\"true\"\r\n               [zIndex]=\"1100\"\r\n               [styleClass] =\"'cancel-order-modal'\"\r\n               >\r\n      <ng-container class=\"app-modal-body\">\r\n        <app-order-cancel-modal [modal] = \"cancelModalRoot\" [selectedRec] = \"selectedRec\">\r\n        </app-order-cancel-modal>\r\n      </ng-container>\r\n</app-modal>"

/***/ }),

/***/ "./src/app/components/trade-history/trade-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/trade-history/trade-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: TradeHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeHistoryComponent", function() { return TradeHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trade-history.service */ "./src/app/services/trade-history.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/constant */ "./src/app/config/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TradeHistoryComponent = /** @class */ (function () {
    function TradeHistoryComponent(tradeHistoryApi, clientApi) {
        this.tradeHistoryApi = tradeHistoryApi;
        this.clientApi = clientApi;
        this.BASE_URL = window['BASE_URL'];
        this.selectedRec = [];
        this.clientList = [];
        this.selectedClient = {};
        this.changeDateStatus = '';
        this.sColumn = null;
        this.search = {};
        this.trade_status = Orbit['TRADE_STATUS_FIELDS'];
        this.trade_type = Orbit['TRADE_TYPE_FIELDS'];
        this.dtOptions = {};
        this.cols = [
            { title: 'ID', data: 'id', visible: false },
            { title: 'Action', data: 'server_response' },
            { title: 'Market', data: 'image' },
            { title: 'Wallet', data: 'name' },
            { title: 'Status', data: 'trade_status' },
            { title: 'Date', data: 'trade_date' },
            { title: 'Request Time', data: 'request_time' },
            { title: 'Response Time', data: 'response_time' },
            { title: 'Type', data: 'trade_type' },
            { title: 'Amount', data: 'trade_eth_amount' },
            { title: 'Exchange Rate', data: 'exchange_rate' },
            { title: 'Spread Percent', data: 'spred_percent' },
            { title: 'Estimated Profit', data: 'estimated_profit' },
        ];
        this.clientInfo = { id: 0, client_code: null, client_name_en: null, client_name_ja: 'Select Client' };
    }
    TradeHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        var item = { 'id': 0 };
        this.clientApi.setClientSelectionModel(item);
        /* TO FIND FIRST AND LAST DATE IN CURRENT MONTH */
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var getFirstDay = new Date(y, m, 1);
        this.fromDate = new Date(getFirstDay);
        this.toDate = new Date();
        this.getClientList();
        // this.getTradeHistoryList();
        this.dtOptions = {
            pagingType: 'simple_numbers',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            fixedHeader: true,
            //   searching: true,
            bLengthChange: true,
            aaSorting: [[0, "desc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "emptyTable": "No records found",
                "search": " ",
                "lengthMenu": "Page Size _MENU_ ",
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (dataTablesParameters, callback) {
                var BASE_URL = window['BASE_URL'];
                $('.filter-input').on('keyup change', function (e) {
                    me.sColumn = e.target['name'];
                    me.search['value'] = e.target['value'];
                });
                dataTablesParameters['startDate'] = _this.formatDate(_this.fromDate);
                dataTablesParameters['endDate'] = _this.formatDate(_this.toDate);
                dataTablesParameters['client_id'] = _this.tradeHistoryParams().client_id;
                dataTablesParameters['sColumn'] = _this.sColumn;
                dataTablesParameters['search']['value'] = _this.search['value'] == null ? '' : _this.search['value'];
                dataTablesParameters['search']['regex'] = false;
                dataTablesParameters['search']['type'] = me.search['type'] == null ? '' : me.search['type'];
                _this.tradeHistoryApi.getTradeHistoryList(dataTablesParameters).subscribe(function (res) {
                    me.tradeHistoryList = res.data;
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                    $('#log-table tfoot tr').appendTo('#log-table thead');
                });
            },
            columns: this.cols
        };
        this.headerFilterConfig();
        // $(document).ready(function() {
        //   me.headerFilterConfig();
        // })
        // this.fromDate = new Date();
        // this.selectedFromDate= this.formatDate(this.fromDate);
        // this.setLastDay(this.fromDate);
    };
    TradeHistoryComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        this.datatablesFilterProcessing();
        // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   dtInstance.columns().every(function () {
        //     const that = this;
        //      $('input', this.footer()).on('keyup change', function (e) {
        //       if(e.keyCode == 13){
        //         if (that.search() !== this['value']) {
        //           // if(me.sColumn == 'image' || me.sColumn == 'name' || me.sColumn == 'trade_type' || me.sColumn == 'trade_status'){
        //           //   me.search['type'] = null;
        //           // }else{
        //           //    me.search['type'] = 'num';
        //           // }
        //             that
        //             .search(this['value'])
        //             .draw();
        //         }
        //       }else if(e.keyCode == 8 || e.keyCode == 46){
        //         if((this['value']) == ''){
        //           //reload datatable
        //           me.onDatatableReload();
        //           // dtInstance.cell(that).search('').draw();
        //         }
        //       }
        //     });
        //   });
        // });
    };
    TradeHistoryComponent.prototype.datatablesFilterProcessing = function () {
        var me = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change ', function (e) {
                    if (e.keyCode == 13) {
                        if (that.search() !== this['value']) {
                            // if(me.sColumn == 'image' || me.sColumn == 'name' || me.sColumn == 'trade_type' || me.sColumn == 'trade_status'){
                            //   me.search['type'] = null;
                            // }else{
                            //    me.search['type'] = 'num';
                            // }
                            that
                                .search(this['value'])
                                .draw();
                        }
                    }
                    else if (e.keyCode == 8 || e.keyCode == 48) {
                        if ((this['value']) == '') {
                            //reload datatable
                            // me.onDatatableReload();
                            that
                                .search('')
                                .draw();
                        }
                    }
                });
                $('.date-search-input', this.footer()).on('change ', function (e) {
                    if (that.search() !== this['value']) {
                        // if(me.sColumn == 'image' || me.sColumn == 'name' || me.sColumn == 'trade_type' || me.sColumn == 'trade_status'){
                        //   me.search['type'] = null;
                        // }else{
                        //    me.search['type'] = 'num';
                        // }
                        that
                            .search(this['value'])
                            .draw();
                    }
                    // if(e.keyCode == 13){
                    // }else if(e.keyCode == 8 || e.keyCode == 46){
                    //   if((this['value']) == ''){
                    //     //reload datatable
                    //     me.onDatatableReload();
                    //     // dtInstance.cell(that).search('').draw();
                    //   }
                    // }
                });
                $('.trade_status', this.footer()).on('change', function (e) {
                    if (that.search() !== this['value']) {
                        // me.search['type'] = me.sColumn == 'trade_base_amount' || me.sColumn == 'spred_percent'? 'num' : null;
                        that
                            .search(this['value'])
                            .draw();
                    }
                });
                $('.trade_type', this.footer()).on('change', function (e) {
                    if (that.search() !== this['value']) {
                        // me.search['type'] = me.sColumn == 'trade_base_amount' || me.sColumn == 'spred_percent'? 'num' : null;
                        that
                            .search(this['value'])
                            .draw();
                    }
                });
            });
        });
    };
    TradeHistoryComponent.prototype.headerFilterConfig = function () {
        var me = this;
        $(".datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            showOn: "none",
            showAnim: 'slideDown',
            buttonImageOnly: true,
            showButtonPanel: true,
            autoSize: true,
            closeText: "Clear",
            maxDate: new Date(),
        });
        this.showDatePickerOnClick();
        $('.date-search-input').on('change', function (e) {
            // me.onHeaderFilterSearchInput(e);
            me.datatablesFilterProcessing();
        });
        //change date values
        this.setChangedDate();
        //clear date
        $('.ui-datepicker-close').on('click', function (e) {
            $('.datepicker').val("");
            // me.onDatatableReload();
            me.datatablesFilterProcessing();
        });
        //filter records on date change
        $('#dateFrom').on('change', function (e) {
            me.onDateFrom(e);
        });
        $('#dateTo').on('change', function (e) {
            me.onDateTo(e);
        });
        $(document).on("click", ".ui-datepicker-current", function (e) {
            e.target.value = new Date();
            if (me.datePickerClicked == 'dateFrom') {
                me.onDateFrom(e);
            }
            else if (me.datePickerClicked == 'dateTo') {
                me.onDateTo(e);
            }
            else {
                $.datepicker._curInst.input.datepicker('setDate', new Date()).datepicker('hide');
                me.datatablesFilterProcessing();
                // me.onHeaderFilterSearchInput(e);
                // e.target.name = 'trade_date';
            }
            $.datepicker._curInst.input.datepicker('hide');
        });
    };
    TradeHistoryComponent.prototype.onDatatableReload = function () {
        // me.sColumn = $(this).attr('name');
        this.search['value'] = '';
        this.search['type'] = '';
        $('#log-table').DataTable().draw();
    };
    TradeHistoryComponent.prototype.onHeaderFilterSearchInput = function (e) {
        this.sColumn = e.target.name;
        this.search['value'] = this.formatDate(e.target.value);
        this.search['type'] = 'num';
        $('#log-table').DataTable().draw();
    };
    TradeHistoryComponent.prototype.showDatePickerOnClick = function () {
        var me = this;
        $('#request_time').click(function () {
            $('#request_time').datepicker('show');
            me.datePickerClicked = 'request_time';
        });
        $('#response_time').click(function () {
            $('#response_time').datepicker('show');
            me.datePickerClicked = 'response_time';
        });
        $('#trade_date').click(function () {
            $('#trade_date').datepicker('show');
            me.datePickerClicked = 'trade_date';
        });
        $('#dateFrom').click(function () {
            $('#dateFrom').datepicker('show');
            me.datePickerClicked = 'dateFrom';
        });
        $('#dateTo').click(function () {
            $('#dateTo').datepicker('show');
            me.datePickerClicked = 'dateTo';
        });
    };
    TradeHistoryComponent.prototype.onDateFilter = function () {
        var date = this.tradeHistoryParams();
        $('#log-table').data('startDate', date.startDate);
        $('#log-table').data('endDate', date.endDate);
        $('#log-table').data('client_id', this.tradeHistoryParams().client_id);
        $('#log-table').DataTable().draw();
    };
    TradeHistoryComponent.prototype.onShowModal = function (content) {
        var jsonPretty = '<pre>' + JSON.stringify(JSON.parse(content), null, 1) + '</pre>';
        alertify.alert(jsonPretty, function () {
        });
    };
    TradeHistoryComponent.prototype.onDateFrom = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'from';
        this.changeDate(event);
        this.selectedFromDate = this.formatDate(event);
        this.selectedToDate = this.formatDate(this.toDate);
        this.onDateFilter();
    };
    TradeHistoryComponent.prototype.onDateTo = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'from';
        this.changeDateStatus = 'to';
        this.changeDate(event);
        this.selectedFromDate = this.formatDate(this.toDate);
        this.selectedToDate = this.formatDate(event);
        this.onDateFilter();
    };
    TradeHistoryComponent.prototype.setLastDay = function (date) {
        this.selectedToDate = this.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
        this.toDate = this.selectedToDate;
    };
    /** [getTradeHistoryList fetch trade history log] */
    TradeHistoryComponent.prototype.getTradeHistoryList = function () {
        var _this = this;
        this.tradeHistoryApi.getTradeHistoryList(this.tradeHistoryParams()).subscribe(function (res) {
            _this.tradeHistoryList = res['data'];
        });
    };
    /** [getClientList fetch client list for combo] */
    TradeHistoryComponent.prototype.getClientList = function () {
        var _this = this;
        var params = { 'pnl_id': 2 };
        this.clientApi.getClientList(params).subscribe(function (res) {
            _this.clientList = res["data"];
        });
    };
    TradeHistoryComponent.prototype.onClientSelect = function (idx) {
        this.selectedClient = this.clientList[idx];
        this.onDateFilter();
        // alertify.success('Loaded Records According To Client');
    };
    TradeHistoryComponent.prototype.tradeHistoryParams = function () {
        var client_id = this.clientApi.clientSelectModel.id || 0, startDate = this.selectedFromDate || 0, endDate = this.selectedToDate || 0;
        // if(client_id == 0 || startDate == 0 || endDate == 0 ){
        //   return;
        // }
        var obj = {
            client_id: client_id,
            startDate: startDate,
            endDate: endDate,
            pnl_id: 2
        };
        return obj;
    };
    TradeHistoryComponent.prototype.formatDate = function (params) {
        var d = new Date(params), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        month = month.length < 2 ? ('0' + month) : month;
        day = day.length < 2 ? ('0' + day) : day;
        return [year, month, day].join('-');
    };
    TradeHistoryComponent.prototype.changeDate = function (argDate) {
        var todayDate = new Date(), dtFrom, dtTo, getFirstDay, getLastDay, year, month;
        dtFrom = new Date(this.fromDate);
        dtTo = new Date(argDate);
        year = dtTo.getFullYear();
        month = dtTo.getMonth();
        if (this.changeDateStatus == 'from') {
            dtFrom = new Date(argDate);
            dtTo = new Date(this.toDate);
            year = dtFrom.getFullYear();
            month = dtFrom.getMonth();
        }
        getFirstDay = new Date(dtFrom);
        getLastDay = new Date(dtTo);
        if (dtFrom.getTime() > dtTo.getTime()) {
            getFirstDay = new Date(year, month, 1);
            if (this.changeDateStatus == 'from' && dtFrom.getTime() > dtTo.getTime()) {
                getFirstDay = dtFrom;
                getLastDay = new Date(year, month + 1, 0);
            }
            if (getLastDay.getTime() > todayDate.getTime()) {
                getLastDay = new Date();
            }
        }
        this.fromDate = new Date(getFirstDay);
        this.toDate = new Date(getLastDay);
        this.setChangedDate();
    };
    TradeHistoryComponent.prototype.setChangedDate = function () {
        $("#dateFrom").datepicker("setDate", this.formatDate(this.fromDate));
        $("#dateTo").datepicker("setDate", this.formatDate(this.toDate));
    };
    TradeHistoryComponent.prototype.onClientChange = function () {
        this.onDateFilter();
    };
    //for order details
    TradeHistoryComponent.prototype.onOrderIdClick = function (modal, list, idx) {
        var modalCls = { ariaLabelledBy: 'modal-basic-title' };
        this.detailModal = modal.show();
        this.tradeHistoryApi.orderDetailData = {};
        this.tradeHistoryApi.isOrderDetailDataEmpty = true;
        this.openOrderDetailDialog(modal, list, idx);
    };
    TradeHistoryComponent.prototype.openOrderDetailDialog = function (modal, item, rowIdx) {
        var _this = this;
        var recId = item['id'], orderId = item['order_id'], marketCode = item['code'], symbol = item['name'], status = item['trade_status'];
        var _a = symbol.split('/'), baseId = _a[0], quoteId = _a[1];
        this.tradeHistoryApi.viewOrderDetail(recId, orderId, marketCode).subscribe(function (res) {
            if (res['success']) {
                // var modalCls:any= {ariaLabelledBy: 'modal-basic-title'};
                _this.tradeHistoryApi.isOrderDetailDataEmpty = false;
                _this.tradeHistoryApi.orderDetailData.market_code = res.market_code;
                _this.tradeHistoryApi.orderDetailData.status = res.status;
                _this.tradeHistoryApi.orderDetailData['request_trade_info'] = res['request_trade_info'];
                _this.tradeHistoryApi.orderDetailData['response_trade_info'] = res['response_trade_info'];
                _this.tradeHistoryApi.orderDetailData['request_trade_info']['trade_history_id'] = recId;
                _this.tradeHistoryApi.orderDetailData['request_trade_info']['oldStatus'] = status;
                _this.tradeHistoryApi.orderDetailData['request_trade_info']['rowIdx'] = rowIdx;
                _this.tradeHistoryApi.orderDetailData['request_trade_info']['baseId'] = baseId;
                _this.tradeHistoryApi.orderDetailData['request_trade_info']['quoteId'] = quoteId;
                // this.modal = this.modalService.open(content, modalCls);
            }
            else {
                alertify.error(res['message']);
                modal.hide();
            }
        });
    };
    TradeHistoryComponent.prototype.onOrderCancelClick = function (modal, list, idx) {
        var modalCls = { ariaLabelledBy: 'modal-basic-title' };
        this.cancelModal = modal.show();
        this.selectedRec = list;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_3___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_3___default.a) === "function" && _a || Object)
    ], TradeHistoryComponent.prototype, "datatableElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TradeHistoryComponent.prototype, "model", void 0);
    TradeHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade-history',
            template: __webpack_require__(/*! ./trade-history.component.html */ "./src/app/components/trade-history/trade-history.component.html"),
            styles: [__webpack_require__(/*! ./trade-history.component.css */ "./src/app/components/trade-history/trade-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_trade_history_service__WEBPACK_IMPORTED_MODULE_1__["TradeHistoryService"], _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], TradeHistoryComponent);
    return TradeHistoryComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet-form/wallet-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-form/wallet-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/wallet/wallet-form/wallet-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-form/wallet-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/wallet']\">Wallet</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span *ngIf=\"isNew\" >New</span>\r\n\t\t<span *ngIf=\"!isNew\">Edit</span>\r\n\t</div>\r\n</div>\r\n<div class=\"container container-fx form-container\">\r\n\t<div class=\"form-wrapper\">\r\n\t\t<h4 class=\"form-title\" *ngIf=\"isNew\" >New Wallet</h4>\r\n\t\t<h4 class=\"form-title\" *ngIf=\"!isNew\" >Edit Wallet</h4>\r\n\t\t<div class=\"error-message-container\">\r\n\t\t<span class=\"error\" *ngFor = \"let item of formErrors | keyvalue\"> {{item.value}} </span>\r\n\t\t</div>\r\n\t\t<form [formGroup]=\"walletForm\" class=\"form-horizontal\" method=\"POST\" (ngSubmit)=\"onSubmit()\" >\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input placeholder=\"id\" type=\"hidden\" formControlName=\"id\" class=\"form-control\"/>\r\n\t\t\t\t<label class=\"col-md-3\" for=\"wallet-code\">Code: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t<input (keyup)=\"checkWalletCode($event)\" placeholder=\"Code Format ETH/BTC\" type=\"text\" formControlName=\"code\" class=\"form-control\" id=\"wallet-code\" [patterns]=\"customPatterns\" mask=\"000/000\" [dropSpecialCharacters]=\"false\"/>\r\n\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['code']}}</span></div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-3\" for=\"wallet-name\">Name: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t<input (keyup)=\"checkWalletName($event)\" placeholder=\"Name Format ETH/BTC\" type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"wallet-name\" [patterns]=\"customPatterns\" mask=\"000/000\" [dropSpecialCharacters]=\"false\" />\r\n\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['name']}}</span></div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-3\" for=\"wallet-registration-fee\">Registration Fee: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t<input placeholder=\"Registration fee\" type=\"number\" min=\"1\" formControlName=\"registration_fee\" class=\"form-control\" id=\"wallet-registration-fee\" />\r\n\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['registration_fee']}}</span></div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-3\">Status: <span style=\"color:red\">*</span></label>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"status\" checked>\r\n\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['status']}}</span></div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-md-3\" for=\"wallet-desc\">Description:</label>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t<textarea placeholder=\"Enter text here...\" formControlName=\"description\" class=\"form-control\" id=\"wallet-desc\" style=\"height:120px\"></textarea>\r\n\t\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['description']}}</span></div> -->\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<hr>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"col-md-offset-3 col-md-9\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancelClick()\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/wallet/wallet-form/wallet-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-form/wallet-form.component.ts ***!
  \************************************************************************/
/*! exports provided: WalletFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletFormComponent", function() { return WalletFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletFormComponent = /** @class */ (function () {
    function WalletFormComponent(fb, router, route, walletApi) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.walletApi = walletApi;
        this.isNew = true;
        this.formErrors = {};
        this.customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]') } };
    }
    WalletFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (this.route.snapshot.routeConfig.path == "new") {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            if (this.route.snapshot.params.id) {
                var id = this.route.snapshot.params.id;
                this.walletApi.getEntyData(id, 'wallet').subscribe(function (result) {
                    if (result['success'] && result['data']) {
                        var data = result['data'];
                        _this.walletForm.setValue(data);
                    }
                    else {
                        _this.router.navigate(['/wallet/list']);
                        alertify.error('Record Not Found');
                    }
                });
            }
        }
    };
    WalletFormComponent.prototype.createForm = function () {
        this.walletForm = this.fb.group({
            id: [''],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Z]{3}(\/)[A-Z]{3}$/)]],
            description: [''],
            registration_fee: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9\.]/)]],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    /** [onSubmit If valid data and has id update else save as new rec else error] */
    WalletFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var me = this;
        this.formErrors = {};
        if (!this.walletForm.valid) {
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var body = {
                'Wallet[code]': me.walletForm.value.code,
                'Wallet[name]': me.walletForm.value.name,
                'Wallet[description]': me.walletForm.value.description,
                'Wallet[registration_fee]': me.walletForm.value.registration_fee,
                'Wallet[is_locked]': me.walletForm.value.status ? 0 : 1
            };
            if (!this.isNew) {
                body['Wallet[id]'] = me.walletForm.value.id;
            }
            this.walletApi.saveWallet(body).subscribe(function (response) {
                if (response['success']) {
                    _this.router.navigate(['wallet/list']);
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                    if (response['errors']) {
                        Object.assign(_this.formErrors, response['errors']);
                    }
                }
            });
        }
    };
    WalletFormComponent.prototype.checkWalletCode = function (e) {
        this.walletForm.controls['code'].setValue(e.target.value.toUpperCase());
    };
    WalletFormComponent.prototype.checkWalletName = function (e) {
        this.walletForm.controls['name'].setValue(e.target.value.toUpperCase());
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Set error message for timeShift and jobType if those fields are invalid
     */
    WalletFormComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.walletForm);
        for (var key in errors) {
            if (errors[key] != null) {
                var label = key.replace(/[_]/g, ' ');
                label = label.toLowerCase()
                    .split(' ')
                    .map(function (s) { return s.charAt(0).toUpperCase() + s.substring(1); })
                    .join(' ');
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = label + ' can not be blank.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = label + ' value must be greater than ' + obj['min']['min'] + '.';
                }
                else if (obj.hasOwnProperty('pattern')) {
                    this.formErrors[key] = 'Invalid input pattern. Value for ' + label + ' must be of format ETH/BTC.';
                }
                else {
                }
            }
        }
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Fetch all form errors
     * @param {FormGroup} formGroup [Staff Detail Form]
     * @returns {[Object]} errors
     */
    WalletFormComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    /** [onCancelClick cancel edit/new record and return to wallet list] */
    WalletFormComponent.prototype.onCancelClick = function () {
        var me = this;
        var message = "Do you want to cancel?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.router.navigate(['/wallet/list']);
            }
            else {
                //
            }
        });
    };
    WalletFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-form',
            template: __webpack_require__(/*! ./wallet-form.component.html */ "./src/app/components/wallet/wallet-form/wallet-form.component.html"),
            styles: [__webpack_require__(/*! ./wallet-form.component.css */ "./src/app/components/wallet/wallet-form/wallet-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]])
    ], WalletFormComponent);
    return WalletFormComponent;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet-list/wallet-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-list/wallet-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/wallet/wallet-list/wallet-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-list/wallet-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n\t<div class=\"container container-fx\">\r\n\t\t<a [routerLink]=\"['/dashboard']\">Home</a><i  class=\"fa fa-angle-right\"></i>\r\n\t\t<a [routerLink]=\"['/wallet']\">Wallet</a><i class=\"fa fa-angle-right\"></i>\r\n\t\t<span>List</span>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"market-view\">\r\n\t\t<div class=\"status-index\">\r\n\t\t\t<span class=\"published\">Active</span>\r\n\t\t\t<span class=\"unpublished\">Inactive</span>\r\n\t\t</div>\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table\" datatable [dtOptions]=\"dtOptions\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\" name=\"code\">Code</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"country-flag head\" name=\"name\">Name</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bid-notifier head\">Description</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"ask-notifier head\">Registration Fee</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"bit-balance head\">Status</label></th>\r\n\t\t\t\t\t\t<th style=\"width: 110px;\"><label class=\"cash-balance head\">Action</label></th>\r\n\t\t\t\t\t</tr> -->\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let list of walletlist;\" style=\"text-align: center\">\r\n\t\t\t\t\t\t<td>{{list.code}}</td>\r\n\t\t\t\t\t\t<td>{{list.name}}</td>\r\n\t\t\t\t\t\t<td><p class=\"fx-ht\">{{list.description}} <a href=\"javascript:void(0);\" data-toggle=\"tooltip\" title=\"{{list.description}}\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a></p></td>\r\n\t\t\t\t\t\t<td>{{list.registration_fee}}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<p class=\"d-none\">{{list.is_locked}}</p>\r\n\t\t\t\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"list.is_locked == 0; else offExchangeMarket\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffStatusChange(list.id)\" checked>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-template #offExchangeMarket>\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{list.is_locked}}\" type=\"checkbox\" (change)=\"onOffStatusChange(list.id)\">\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"text-btn text-primary\" title=\"Edit\" (click)=\"edit(list.id)\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t\t\t\t\t<button class=\"text-btn text-danger\" title=\"Delete\" (click)=\"delete(list.id)\" ><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<!-- <tfoot>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t\t<td><input type=\"text\" name=\"\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tfoot> -->\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/wallet/wallet-list/wallet-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/wallet/wallet-list/wallet-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WalletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletListComponent", function() { return WalletListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/wallet.service */ "./src/app/services/wallet.service.ts");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/constant */ "./src/app/config/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletListComponent = /** @class */ (function () {
    function WalletListComponent(router, walletApi) {
        this.router = router;
        this.walletApi = walletApi;
        this.walletlist = [];
        this.dtOptions = {};
        this.cols = [
            { title: 'Code', data: 'code' },
            { title: 'Name', data: 'name' },
            { title: 'Description', data: 'description' },
            { title: 'Registration Fee', data: 'registration_fee' },
            { title: 'Status', data: 'is_locked', sortable: false },
            { title: 'Action', data: 'id', sortable: false }
        ];
    }
    WalletListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'simple_numbers',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_4__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
            bLengthChange: true,
            aaSorting: [[3, "desc"]],
            lengthMenu: [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]],
            language: {
                "zeroRecords": " ",
                "search": " ",
                "emptyTable": "No records found",
                "lengthMenu": "Page Size _MENU_ "
            },
            dom: 'rt<"clear"><"bottom"lip><"clear">',
            ajax: function (tablesParameters, callback) {
                tablesParameters.pnl_id = 1;
                _this.walletApi.getWalletList(tablesParameters).subscribe(function (res) {
                    _this.walletlist = res.data;
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: this.cols
        };
    };
    // ngAfterViewInit(): void {
    //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     dtInstance.columns().every(function () {
    //       const that = this;
    //       $('input', this.footer()).on('keyup change', function (i) {
    //         if (that.search() !== this['value']) {
    //           dtInstance
    //             .cell(that)
    //             .search(this['value'])
    //             .draw();
    //         }
    //       });
    //     });
    //   });
    // }
    /**[getWalletList fetch wallet list and fields from pnl_id 1]*/
    // getWalletList(){
    //   let params:any = {'pnl_id' : 1};
    //   this.walletApi.getWalletList(params).subscribe(res=>{
    //     this.walletlist=res["data"];
    //   }); 
    // }
    /**
     * [edit on edit redirect from list to wallet/editform]
     * @param {[number]} id [wallet id to fetch/set record]
     */
    WalletListComponent.prototype.edit = function (id) {
        this.router.navigate(["wallet/edit/" + id]);
    };
    /**
     * [delete delete a wallet record by id]
     * @param {[number]} id [wallet id]
     */
    WalletListComponent.prototype.delete = function (id) {
        var me = this;
        var message = "Do you want to delete this record?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.walletApi.deleteWallet(id).subscribe(function (response) {
                    if (response['success'] == true) {
                        me.reloadDataTable();
                        alertify.success(response['message']);
                    }
                    else {
                        alertify.error(response['message']);
                    }
                });
            }
            else {
                // 
            }
        });
    };
    /**
     * [onOffStatusChange (changes base_wallet_Master is_locked to 1 inactive/0 active)]
     * @param {[number]} id [wallet id]
     */
    WalletListComponent.prototype.onOffStatusChange = function (id) {
        var me = this;
        this.walletApi.toggleStatus(id).subscribe(function (response) {
            if (response['success'] == true) {
                alertify.success(response['message']);
                me.reloadDataTable();
            }
            else {
                alertify.error(response['message']);
            }
        });
    };
    WalletListComponent.prototype.reloadDataTable = function () {
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a) === "function" && _a || Object)
    ], WalletListComponent.prototype, "datatableElement", void 0);
    WalletListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-list',
            template: __webpack_require__(/*! ./wallet-list.component.html */ "./src/app/components/wallet/wallet-list/wallet-list.component.html"),
            styles: [__webpack_require__(/*! ./wallet-list.component.css */ "./src/app/components/wallet/wallet-list/wallet-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]])
    ], WalletListComponent);
    return WalletListComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/wallet/wallet-routing.module.ts ***!
  \************************************************************/
/*! exports provided: WalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletRoutingModule", function() { return WalletRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ "./src/app/components/wallet/wallet-list/wallet-list.component.ts");
/* harmony import */ var _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-form/wallet-form.component */ "./src/app/components/wallet/wallet-form/wallet-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_2__["WalletListComponent"], pathMatch: 'prefix' },
    { path: 'delete/:id', component: _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_2__["WalletListComponent"], pathMatch: 'prefix' },
    { path: 'new', component: _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_3__["WalletFormComponent"], pathMatch: 'prefix' },
    { path: 'edit/:id', component: _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_3__["WalletFormComponent"] } // for edit but use same WalletForm Component
];
var WalletRoutingModule = /** @class */ (function () {
    function WalletRoutingModule() {
    }
    WalletRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WalletRoutingModule);
    return WalletRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/wallet/wallet.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/wallet/wallet.module.ts ***!
  \****************************************************/
/*! exports provided: WalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletModule", function() { return WalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-routing.module */ "./src/app/components/wallet/wallet-routing.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ "./src/app/components/wallet/wallet-list/wallet-list.component.ts");
/* harmony import */ var _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-form/wallet-form.component */ "./src/app/components/wallet/wallet-form/wallet-form.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WalletModule = /** @class */ (function () {
    function WalletModule() {
    }
    WalletModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"]
            ],
            declarations: [_wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__["WalletListComponent"], _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_6__["WalletFormComponent"]],
            exports: [_wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletRoutingModule"]]
        })
    ], WalletModule);
    return WalletModule;
}());



/***/ }),

/***/ "./src/app/config/constant.ts":
/*!************************************!*\
  !*** ./src/app/config/constant.ts ***!
  \************************************/
/*! exports provided: PAGE_PER_SIZE, DEFAULT_THEME, DEFAULT_WALLET_ID, DEFAULT_TRADE_COUNT_LIMIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PER_SIZE", function() { return PAGE_PER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WALLET_ID", function() { return DEFAULT_WALLET_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRADE_COUNT_LIMIT", function() { return DEFAULT_TRADE_COUNT_LIMIT; });
//Datatables Constants
var PAGE_PER_SIZE = 50;
//Default theme 
var DEFAULT_THEME = [
    {
        id: 0,
        code: 'Night'
    },
    {
        id: 1,
        code: 'Day'
    }
];
//Client Entry Default Settings
var DEFAULT_WALLET_ID = 2;
var DEFAULT_TRADE_COUNT_LIMIT = 10;


/***/ }),

/***/ "./src/app/config/lang.ts":
/*!********************************!*\
  !*** ./src/app/config/lang.ts ***!
  \********************************/
/*! exports provided: COMPANY_COMBO_GRID, PAGINATION_TOOLBAR, AlertMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_COMBO_GRID", function() { return COMPANY_COMBO_GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_TOOLBAR", function() { return PAGINATION_TOOLBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessages", function() { return AlertMessages; });
var COMPANY_COMBO_GRID = {
    headers: {
        client_id: 'Client Id',
        client_name_en: 'Client Name'
    },
    emptyText: '該当データがありません。'
};
var PAGINATION_TOOLBAR = {
    pageLbl: 'ページ',
    previous: '前のページ',
    next: '次のページ',
    first: '最初のページ',
    last: '最終のページ',
    refresh: '更新'
};
var AlertMessages = {
    negativeFee: 'Market Fee must not be Negative.',
    maxFee: 'Maximum Market Fee is 100 %.'
};


/***/ }),

/***/ "./src/app/models/ClientCombo.ts":
/*!***************************************!*\
  !*** ./src/app/models/ClientCombo.ts ***!
  \***************************************/
/*! exports provided: PaginationConfig, ClientPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPicker", function() { return ClientPicker; });
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
    }
    return PaginationConfig;
}());

var ClientPicker = /** @class */ (function () {
    function ClientPicker() {
        this.state = 'closed';
        this.selectionItems = [];
        this.selectedRecord = null;
        this.selectedId = -1;
        this.highlightedRecord = null;
        this.highlightedId = -1;
        this.displayName = '';
        this.highlightedRowIdx = 0;
        this.lastQuery = null;
        this.pagination = { pnl_id: 2, pageSize: 25, page: 1, totalPages: 1, isLast: true };
    }
    ClientPicker.prototype.toggleState = function () {
        this.state = this.state === 'closed' ? 'open' : 'closed';
    };
    ClientPicker.prototype.setPaginationConfig = function (config) {
        this.pagination = Object.assign(this.pagination, config);
    };
    return ClientPicker;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient, HttpParams, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// declare var $;
var BASE_URL = window['BASE_URL'];
var ClientService = /** @class */ (function () {
    function ClientService(httpService) {
        this.httpService = httpService;
        this.BASE_URL = window['BASE_URL'];
    }
    ClientService.prototype.getEntyData = function (id, controller) {
        var url = 'backend/' + controller + '/get-entry-data';
        return this.httpService.getRequest(url, { id: id });
    };
    ClientService.prototype.getClientData = function (id, controller) {
        var url = 'backend/' + controller + '/get-client-data';
        return this.httpService.getRequest(url, { id: id });
    };
    ClientService.prototype.getEMarketEdit = function (id, controller) {
        var url = 'backend/' + controller + '/get-market-edit';
        return this.httpService.getRequest(url, { id: id });
    };
    ClientService.prototype.getClientMarketWallet = function (id, controller) {
        var url = 'backend/' + controller + '/get-client-market-wallet';
        return this.httpService.getRequest(url, { id: id });
    };
    ClientService.prototype.clientSave = function (body) {
        var url = 'backend/client/save';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.getClientList = function (params) {
        var url = BASE_URL + 'backend/client/list';
        // return this.httpService.getRequest(url, params);
        return this.httpService.getKeyValue(url, params);
    };
    ClientService.prototype.deleteClient = function (id) {
        var url = 'backend/client/delete';
        return this.httpService.postKeyValue(url, { client_id: id });
    };
    ClientService.prototype.getClientMarket = function (params) {
        var url = 'backend/client-market/list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.getMarketSelectedList = function (id) {
        var _this = this;
        var getId = '?id=' + id;
        var url = 'backend/client-market/market-list' + getId;
        this.httpService.getRequest(url, getId).subscribe(function (res) {
            _this.marketNameList = res['data'];
        });
    };
    ClientService.prototype.getMarketList = function (params) {
        var url = 'backend/client-market/client-master-name-list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.getMarketMasterNameList = function (params) {
        var url = 'backend/client-market/market-master-name-list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.saveClient = function (body) {
        var url = 'backend/client-market/save-client-market';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.marketWallet = function (params) {
        var url = 'backend/market-wallet/market-wallet-list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.clientList = function (params) {
        var url = 'backend/market-wallet/client-list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.clientMaster = function (body) {
        var url = 'backend/market-wallet/client-market-list';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.saveWallet = function (body) {
        var url = 'backend/market-wallet/save-wallet';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.saveMarket = function (body) {
        var url = 'backend/client-market/save-market';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.saveMarketWallet = function (body) {
        var url = 'backend/client-market-wallet/save-market-wallet';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.clientMarketWalletList = function (params) {
        var url = 'backend/client-market-wallet/list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.saveClientWallet = function (postData) {
        var url = 'backend/client-market-wallet/save';
        return this.httpService.postKeyValue(url, postData);
    };
    ClientService.prototype.toggleStatus = function (id, controllerName) {
        var url = 'backend/' + controllerName + '/status-toggle';
        return this.httpService.postKeyValue(url, { record_id: id });
    };
    ClientService.prototype.toggleTradeStatus = function (id, controllerName) {
        var url = 'backend/' + controllerName + '/trade-status-toggle'; //client-market-wallet
        return this.httpService.postKeyValue(url, { client_market_wallet_id: id, });
    };
    /**
     * [getCountryList return country list]
     */
    ClientService.prototype.getCountryList = function () {
        var url = 'backend/country/list';
        return this.httpService.getRequest(url, '');
    };
    ClientService.prototype.getCompanyList = function (params) {
        var url = BASE_URL + 'company/getList';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.setClientSelectionModel = function (item) {
        this.clientSelectModel = item;
    };
    ClientService.prototype.getClientWallet = function (params) {
        var url = 'backend/client-wallet/list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.saveCWallet = function (body) {
        var url = 'backend/client-wallet/save-client-wallet';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.getCWalletEdit = function (id, controller) {
        var url = 'backend/' + controller + '/get-wallet-edit';
        return this.httpService.getRequest(url, { id: id });
    };
    ClientService.prototype.saveCWalletForm = function (body) {
        var url = 'backend/client-wallet/save-wallet';
        return this.httpService.postKeyValue(url, body);
    };
    ClientService.prototype.getClientWalletList = function (params) {
        var url = 'backend/client-wallet/list';
        return this.httpService.getRequest(url, params);
    };
    ClientService.prototype.getNetworkSettings = function () {
        var url = 'backend/network-interface/get-data';
        return this.httpService.getRequest(url, '');
    };
    ClientService.prototype.saveNetworkInterface = function (data, id) {
        var params = { data: data, network_interface_id: id };
        var url = 'network-interface/save-network-settings';
        return this.httpService.postJson(url, params);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = /** @class */ (function () {
    function HomeService(apiHttp) {
        this.apiHttp = apiHttp;
    }
    HomeService.prototype.stackedChart = function (params) {
        var url = 'backend/dashboard/stacked-chart';
        return this.apiHttp.getRequest(url, params);
    };
    HomeService.prototype.totalRecord = function () {
        var url = 'backend/dashboard/total-count';
        return this.apiHttp.getRequest(url, {});
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_URL = window['BASE_URL'];
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.CSRF_TOKEN = $('meta[name="csrf-token"]').attr("content");
    }
    HttpService.prototype.getRequest = function (url, params) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        url = BASE_URL + url;
        for (var key in params) {
            var value = params[key];
            httpParams = httpParams.set(key, value);
        }
        return this.http.get(url, { headers: httpHeaders, responseType: 'json', params: httpParams });
    };
    HttpService.prototype.postKeyValue = function (url, data) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        url = BASE_URL + url;
        for (var key in data) {
            var value = data[key];
            if (Array.isArray(value)) {
                for (var i = 0; i < value.length; i++) {
                    var prmObj = value[i];
                    for (var k in prmObj) {
                        var val = prmObj[k], httpKey = key.toString() + '[' + i.toString() + ']' + '[' + k.toString() + ']';
                        httpParams = httpParams.set(httpKey, val);
                    }
                }
            }
            else {
                httpParams = httpParams.set(key, value);
            }
        }
        httpParams = httpParams.set('_csrf', this.CSRF_TOKEN);
        // httpParams = httpParams.set('client_id', JSON.stringify(data));
        var body = httpParams.toString();
        return this.http.post(url, body, { headers: httpHeaders, responseType: 'json', });
    };
    HttpService.prototype.postJson = function (url, data) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.set('_csrf', this.CSRF_TOKEN);
        httpParams = httpParams.set('data', JSON.stringify(data));
        var body = httpParams.toString();
        return this.http.post(url, body, { headers: httpHeaders, responseType: 'json' });
    };
    HttpService.prototype.getKeyValue = function (url, data) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in data) {
            var value = JSON.stringify(data[key]);
            if (Array.isArray(value)) {
                for (var i = 0; i < value.length; i++) {
                    var prmObj = value[i];
                    for (var k in prmObj) {
                        var val = prmObj[k], httpKey = key.toString() + '[' + i.toString() + ']' + '[' + k.toString() + ']';
                        httpParams = httpParams.set(key, value);
                    }
                }
            }
            else {
                httpParams = httpParams.set(key, value);
            }
        }
        //httpParams = httpParams.set('_csrf', this.CSRF_TOKEN);
        var body = httpParams.toString();
        return this.http.get(url, { headers: httpHeaders, responseType: 'json', params: httpParams });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/market.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/market.service.ts ***!
  \********************************************/
/*! exports provided: MarketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketService", function() { return MarketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_URL = window['BASE_URL'];
var MarketService = /** @class */ (function () {
    function MarketService(httpService) {
        this.httpService = httpService;
        this.BASE_URL = window['BASE_URL'];
        this.urlClient = 'backend/market';
        this.urlMarketWallet = 'backend/market-wallet';
    }
    /**
     * [getEntyData fetch record by id]
     * @param {number}[marketWallet id]
     * @param {string}[php controller name]
     */
    MarketService.prototype.getEntyData = function (id, controller) {
        var url = 'backend/' + controller + '/get-entry-data?id=' + id;
        return this.httpService.getRequest(url, id);
    };
    /**
     * [getMarketWalletEdit]
     * @param {number}[marketWallet id]
     */
    MarketService.prototype.getMarketWalletEdit = function (id) {
        var url = this.urlMarketWallet + '/get-market-wallet?id=' + id;
        return this.httpService.getRequest(url, id);
    };
    /**
     * [saveMarket]
     * @param {[FormGroup]} [form data]
     */
    MarketService.prototype.saveMarket = function (body) {
        var url = 'backend/market/save';
        return this.httpService.postKeyValue(url, body);
    };
    /**
     * [saveWallet]
     * @param {[FormGroup]} [form data]
     */
    MarketService.prototype.saveWallet = function (body) {
        var url = this.urlMarketWallet + '/save';
        return this.httpService.postKeyValue(url, body);
    };
    /**
     * [getMarketList]
     * @param {[obj]} params [pnl_id]
     */
    MarketService.prototype.getMarketList = function (params) {
        var url = BASE_URL + 'backend/market/list';
        return this.httpService.getKeyValue(url, params);
    };
    /**
     * [getMarketWalletList]
     * @param {[obj]} params [market_id]
     */
    MarketService.prototype.getMarketWalletList = function (params) {
        var url = this.urlMarketWallet + '/list';
        return this.httpService.getRequest(url, params);
    };
    /**
     * [deleteMarket]
     * @param {[number]} [market id]
     */
    MarketService.prototype.deleteMarket = function (id) {
        var url = 'backend/market/delete';
        return this.httpService.postKeyValue(url, { market_id: id });
    };
    /**
     * [marketMaster list]
     * @param {[obj]} [pnl_id]
     */
    MarketService.prototype.marketMaster = function (params) {
        var url = this.urlMarketWallet + '/market-list';
        return this.httpService.getRequest(url, params);
    };
    /**
     * [saveMarketWallet]
     * @param {[FormGroup]} [marketwallet form data]
     */
    MarketService.prototype.saveMarketWallet = function (body) {
        var url = this.urlMarketWallet + '/save-market-wallet';
        return this.httpService.postKeyValue(url, body);
    };
    /**
     * [walletMaster list]
     * @param {[obj]} [pnl_id]
     */
    MarketService.prototype.walletMaster = function (params) {
        var url = this.urlMarketWallet + '/wallet-list';
        return this.httpService.getRequest(url, params);
    };
    /**
     * [toggleStatus toggle is_locked to 1/0 for market-list & market-wallet-list]
     * @param {number} [record id]
     * @param {string} [controllerName]
     */
    MarketService.prototype.toggleStatus = function (id, controllerName) {
        var url = 'backend/' + controllerName + '/status-toggle';
        return this.httpService.postKeyValue(url, { record_id: id });
    };
    /** [getCountryList] */
    MarketService.prototype.getCountryList = function () {
        var url = 'backend/country/list';
        return this.httpService.getRequest(url, '');
    };
    MarketService.prototype.getMarketFeeList = function (params) {
        if (params === void 0) { params = {}; }
        var url = this.urlClient + '/market-fee';
        return this.httpService.getRequest(url, params);
    };
    MarketService.prototype.saveMarketFeeApi = function (params) {
        var url = BASE_URL + 'backend/market/save-market-fee';
        return this.httpService.postJson(url, params);
    };
    MarketService.prototype.verifyMarketWallet = function (params) {
        var url = BASE_URL + 'backend/market-wallet/verify-market-wallet';
        return this.httpService.postJson(url, params);
    };
    MarketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MarketService);
    return MarketService;
}());



/***/ }),

/***/ "./src/app/services/node-server.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/node-server.service.ts ***!
  \*************************************************/
/*! exports provided: NodeServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeServerService", function() { return NodeServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = window['BASE_URL'];
var NodeServerService = /** @class */ (function () {
    function NodeServerService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    NodeServerService.prototype.startServer = function (params) {
        var url = 'backend/node-server/start-server';
        return this.httpService.postKeyValue(url, params);
    };
    NodeServerService.prototype.stopServer = function (params) {
        var url = 'backend/node-server/stop-server';
        return this.httpService.postKeyValue(url, params);
    };
    NodeServerService.prototype.getRoom = function (params) {
        var url = BASE_URL + 'backend/node-server/get-room';
        return this.httpService.getKeyValue(url, params);
    };
    NodeServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NodeServerService);
    return NodeServerService;
}());



/***/ }),

/***/ "./src/app/services/trade-history.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/trade-history.service.ts ***!
  \***************************************************/
/*! exports provided: TradeHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeHistoryService", function() { return TradeHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = window['BASE_URL'];
var TradeHistoryService = /** @class */ (function () {
    function TradeHistoryService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.BASE_URL = window['BASE_URL'];
        this.orderDetailData = {};
        this.isOrderDetailDataEmpty = true;
    }
    TradeHistoryService.prototype.getTradeHistoryList = function (params) {
        var url = BASE_URL + 'backend/trade-history/list';
        return this.httpService.getKeyValue(url, params);
    };
    TradeHistoryService.prototype.viewOrderDetail = function (recId, orderId, marketCode) {
        var params = { id: recId, order_id: orderId, market_code: marketCode };
        var url = 'backend/trade-history/fetch-order';
        return this.httpService.getRequest(url, params);
    };
    TradeHistoryService.prototype.cancelOrder = function (params) {
        var url = 'backend/trade-history/order-cancel';
        return this.httpService.postKeyValue(url, params);
    };
    TradeHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TradeHistoryService);
    return TradeHistoryService;
}());



/***/ }),

/***/ "./src/app/services/wallet.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/wallet.service.ts ***!
  \********************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = window['BASE_URL'];
var WalletService = /** @class */ (function () {
    function WalletService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    /**
     * [getWalletList return wallet list]
     * @param {[type]} params [panel id]
     */
    WalletService.prototype.getWalletList = function (params) {
        var url = BASE_URL + 'backend/wallet/list';
        return this.httpService.getKeyValue(url, params);
    };
    /**
     * [deleteWallet set a wallet record's delete flag to 1]
     * @param {number} id [wallet id]
     */
    WalletService.prototype.deleteWallet = function (id) {
        var url = 'backend/wallet/delete';
        return this.httpService.postKeyValue(url, { wallet_id: id });
    };
    /**
     * [toggleStatus return wallet is_locked 1/0]
     * @param {number} id [wallet id]
     */
    WalletService.prototype.toggleStatus = function (id) {
        var url = 'backend/wallet/status-toggle';
        return this.httpService.postKeyValue(url, { wallet_id: id });
    };
    /**
     * [getEntyData return wallet record by wallet id]
     * @param {number} id         [wallet id]
     * @param {string} controller [php controller Name]
     */
    WalletService.prototype.getEntyData = function (id, controller) {
        var url = controller + '/get-entry-data?id=' + id;
        return this.http.get(url);
    };
    /**
     * [saveWallet save new/edit wallet record]
     * @param {[FormGroup]} body [form data]
     */
    WalletService.prototype.saveWallet = function (body) {
        var url = 'backend/wallet/save';
        return this.httpService.postKeyValue(url, body);
    };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], WalletService);
    return WalletService;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\wamp\www\project_base\bit-base\v0.2\ng-bitbase-backend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map