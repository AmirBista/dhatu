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
/* harmony import */ var _components_api_settings_api_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/api-settings/api-settings.component */ "./src/app/components/api-settings/api-settings.component.ts");
/* harmony import */ var _components_trade_log_trade_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/trade-log/trade-log.component */ "./src/app/components/trade-log/trade-log.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ "./src/app/components/user-settings/user-settings.component.ts");
/* harmony import */ var _components_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fund-transfer/fund-transfer.component */ "./src/app/components/fund-transfer/fund-transfer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'apiSettings', component: _components_api_settings_api_settings_component__WEBPACK_IMPORTED_MODULE_3__["ApiSettingsComponent"] },
    { path: 'tradeLog', component: _components_trade_log_trade_log_component__WEBPACK_IMPORTED_MODULE_4__["TradeLogComponent"] },
    { path: 'user-settings', component: _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_5__["UserSettingsComponent"] },
    { path: 'fund-transfer', component: _components_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_6__["FundTransferComponent"] }
    // 	{ path : 'user', loadChildren: () => FrontendModule, canActivate : [AuthGuard]},
    // { path : 'login' , component : LoginComponent, data: {title : 'Login | Orbit'}},
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

module.exports = "<div class=\"right_col page-wrapper {{pageCls}}\" role=\"main\">\r\n  <div class=\"outer-wrap\">\r\n    <app-side-bar></app-side-bar>\r\n    <div id=\"main-content\" class = \"main-content home\">\r\n    <app-header></app-header>\r\n      <div class=\"contents-wrapper\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'ng-bitbase-frontend';
        this.pageCls = 'dashboard';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.pageCls = _this.router.url.substring(1, _this.router.url.length);
                //alertify.success(this.pageCls);
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _components_common_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/side-bar/side-bar.component */ "./src/app/components/common/side-bar/side-bar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_api_settings_api_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/api-settings/api-settings.component */ "./src/app/components/api-settings/api-settings.component.ts");
/* harmony import */ var _components_trade_log_trade_log_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/trade-log/trade-log.component */ "./src/app/components/trade-log/trade-log.component.ts");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/socket-io.service */ "./src/app/services/socket-io.service.ts");
/* harmony import */ var _pipes_bit_number_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/bit-number.pipe */ "./src/app/pipes/bit-number.pipe.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_trade_form_data_trade_form_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/trade-form-data/trade-form-data.component */ "./src/app/components/trade-form-data/trade-form-data.component.ts");
/* harmony import */ var _components_order_detail_modal_order_detail_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/order-detail-modal/order-detail-modal.component */ "./src/app/components/order-detail-modal/order-detail-modal.component.ts");
/* harmony import */ var _components_common_loading_mask_loading_mask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/loading-mask/loading-mask.component */ "./src/app/components/common/loading-mask/loading-mask.component.ts");
/* harmony import */ var _components_ng_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ng-modal/modal.component */ "./src/app/components/ng-modal/modal.component.ts");
/* harmony import */ var _components_common_ng_alert_ng_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/ng-alert/ng-alert.component */ "./src/app/components/common/ng-alert/ng-alert.component.ts");
/* harmony import */ var _components_home_ticker_datagrid_ticker_datagrid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/ticker-datagrid/ticker-datagrid.component */ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.ts");
/* harmony import */ var _components_min_spred_modal_min_spred_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/min-spred-modal/min-spred-modal.component */ "./src/app/components/min-spred-modal/min-spred-modal.component.ts");
/* harmony import */ var _components_home_trade_log_datagrid_trade_log_datagrid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/trade-log-datagrid/trade-log-datagrid.component */ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ "./src/app/components/user-settings/user-settings.component.ts");
/* harmony import */ var _components_user_settings_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user-settings/user-info/user-info.component */ "./src/app/components/user-settings/user-info/user-info.component.ts");
/* harmony import */ var _components_user_settings_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user-settings/general-settings/general-settings.component */ "./src/app/components/user-settings/general-settings/general-settings.component.ts");
/* harmony import */ var _components_user_settings_password_info_password_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user-settings/password-info/password-info.component */ "./src/app/components/user-settings/password-info/password-info.component.ts");
/* harmony import */ var _components_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/fund-transfer/fund-transfer.component */ "./src/app/components/fund-transfer/fund-transfer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { NgDatepickerModule } from 'ng2-datepicker';








// import { ProfileComponent } from './components/user-settings/profile/profile.component';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_common_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideBarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_api_settings_api_settings_component__WEBPACK_IMPORTED_MODULE_9__["ApiSettingsComponent"],
                _components_trade_log_trade_log_component__WEBPACK_IMPORTED_MODULE_10__["TradeLogComponent"],
                _pipes_bit_number_pipe__WEBPACK_IMPORTED_MODULE_13__["BitNumberPipe"],
                _components_trade_form_data_trade_form_data_component__WEBPACK_IMPORTED_MODULE_15__["TradeFormDataComponent"],
                _components_order_detail_modal_order_detail_modal_component__WEBPACK_IMPORTED_MODULE_16__["OrderDetailModalComponent"],
                _components_common_loading_mask_loading_mask_component__WEBPACK_IMPORTED_MODULE_17__["LoadingMaskComponent"],
                _components_ng_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _components_common_ng_alert_ng_alert_component__WEBPACK_IMPORTED_MODULE_19__["NgAlertComponent"],
                _components_home_ticker_datagrid_ticker_datagrid_component__WEBPACK_IMPORTED_MODULE_20__["TickerDatagridComponent"],
                _components_min_spred_modal_min_spred_modal_component__WEBPACK_IMPORTED_MODULE_21__["MinSpredModalComponent"],
                _components_home_trade_log_datagrid_trade_log_datagrid_component__WEBPACK_IMPORTED_MODULE_22__["TradeLogDatagridComponent"],
                _components_user_settings_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_24__["UserInfoComponent"],
                _components_user_settings_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_25__["GeneralSettingsComponent"],
                _components_user_settings_password_info_password_info_component__WEBPACK_IMPORTED_MODULE_26__["PasswordInfoComponent"],
                _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_23__["UserSettingsComponent"],
                _components_fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_27__["FundTransferComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
            ],
            providers: [_services_frontend_service__WEBPACK_IMPORTED_MODULE_11__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_12__["SocketIoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/api-settings/api-settings.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/api-settings/api-settings.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tborder:  3px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/api-settings/api-settings.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/api-settings/api-settings.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fx\">\r\n\t<form  [formGroup]=\"apiSettingForm\" method=\"POST\" (ngSubmit)=\"onSubmit()\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"market-view api-settings-table secondary-tble\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"on-off head\">On/Off</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 40px;\"><label class=\"country-flag head\"></label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 170px;\"><label class=\"api-keys-input head\">API KEYS</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 170px;\"><label class=\"secret-keys-input head\">SECRET KEYS</label></th>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 100px;\"><label class=\"verify-btn-input head\"></label></th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr formArrayName=\"apiKeys\" *ngFor=\"let control of apiSettingFormData.controls;let i=index\">\r\n\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"apiSettingData?.length > 0;else defaultTemplate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch select-area\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"apiSettingData[i]['is_locked'] == '0'; else offExchangeMarket\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{apiSettingData[i]['code']}}\" (change)=\"onOffStatusChange($event,i,apiSettingData[i]['code'],apiSettingData[i]['id'])\" type=\"checkbox\" checked  formControlName=\"is_locked\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #offExchangeMarket>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"{{apiSettingData[i]['code']}}\" (change)=\"onOffStatusChange($event,i,apiSettingData[i]['code'],apiSettingData[i]['id'])\" type=\"checkbox\"  formControlName=\"is_locked\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"crypt-market-img\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{frontendApi.BASE_URL}}images/{{apiSettingData[i].image}}\" alt=\"{{control.code}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"country-flag\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{frontendApi.BASE_URL}}images/flags/{{apiSettingData[i].country}}.png\" alt=\" {{apiSettingData[i].country}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"api-keys-input form-control btn-sq\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{apiSettingData[i].api_key}}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass] = \"{ 'error' : control.get('api_key').invalid }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"api_key\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onApiKeyChange($event.target.value, i)\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"secret-keys-input form-control btn-sq\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{apiSettingData[i].secret_key}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass] = \"{ 'error' : control.get('secret_key').invalid }\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"secret_key\"  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSecretKeyChange($event.target.value, i)\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"btn verify-btn \" \r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'btn-success':apiSettingData[i]['is_valid_api_keys'] == '1',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'btn-danger':apiSettingData[i]['is_valid_api_keys'] == '0',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'btn-primary':apiSettingData[i]['is_valid_api_keys']==null}\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onVerifyBtnClick($event, i,apiSettingData[i]['code'],apiSettingData[i]['id'])\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{apiSettingData[i]['is_valid_api_keys'] == '1' ? 'Verified' : 'Verify' && apiSettingData[i]['is_valid_api_keys']== '0' ? 'Invalid' : 'Verify'}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'fa-check-circle verify-success':apiSettingData[i]['is_valid_api_keys']=='1',\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'fa-times-circle verify-fail':apiSettingData[i]['is_valid_api_keys']=='0'}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-spin fa-spinner\" *ngIf=\"i==verifyLoadingImgRowIdx\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #defaultTemplate>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"on-off head\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"crypt-market-img\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><span class=\"country-flag\"></span></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"api-keys-input form-control btn-sq\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"api_key\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onApiKeyChange($event.target.value, i)\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"secret-keys-input form-control btn-sq\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"secret_key\"  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onSecretKeyChange($event.target.value, i)\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"btn verify-btn btn-primary\" (click)=\"onVerifyBtnClick($event, i,apiSettingData[i]['code'],apiSettingData[i]['id'])\" type=\"button\" value=\"Verify\" /> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- min Spred Percentage Start-->\r\n\t\t\t\t<!-- <div class=\"market-view min-spred-table secondary-tble\">\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th style=\"width: 300px; vertical-align: middle;\"><label class=\"on-off head\">MINIMUM SPRED PERCENTAGE</label></th>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" min=\"0\" max=\"100\" step=\"0.01\" class=\"api-keys-input form-control btn-sq\" formControlName=\"minSpredPercentage\" placeholder=\"minimum spred percentage\" [ngClass] = \"{ 'error' : apiSettingForm.get('minSpredPercentage').invalid }\" >\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<!-- min Spred Percentage End -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<input type=\"Submit\" class=\"btn btn-success btn-large\" value=\"Save\">\r\n\t\t\t\t<input type=\"button\" class=\"btn btn-danger btn-large\" value=\"Reset\"  (click)=\"onReset()\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/api-settings/api-settings.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/api-settings/api-settings.component.ts ***!
  \*******************************************************************/
/*! exports provided: ApiSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSettingsComponent", function() { return ApiSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/lang */ "./src/app/config/lang.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiSettingsComponent = /** @class */ (function () {
    function ApiSettingsComponent(router, route, frontendApi, fb) {
        this.router = router;
        this.route = route;
        this.frontendApi = frontendApi;
        this.fb = fb;
        // public minSpredData  : Array<any>;
        this.verifyLoadingImgRowIdx = null;
    }
    ApiSettingsComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getApiSettingsList();
        // this.getMinimumSpredPercent();
    };
    ApiSettingsComponent.prototype.getApiSettingsList = function () {
        var _this = this;
        var me = this;
        this.frontendApi.getApiSettingsList({}).subscribe(function (res) {
            _this.apiSettingData = res.data;
            _this.removeKeyItem(0);
            _this.apiSettingData.forEach(function (item) {
                // add address to the list
                var control = me.apiSettingForm.controls['apiKeys'];
                control.push(me.createKeyItems(item));
            });
        });
    };
    Object.defineProperty(ApiSettingsComponent.prototype, "apiSettingFormData", {
        // getMinimumSpredPercent(){
        //   this.frontendApi.getMinSpredPercentData('client').subscribe(res => {
        //     this.minSpredData = res['data'];
        //     if(res['success'] && res['data']){
        //       let minSpredPercent = res['data'];
        //       this.apiSettingForm.controls.minSpredPercentage.setValue(minSpredPercent);
        //     }
        //   });
        // }
        get: function () {
            return this.apiSettingForm.get('apiKeys');
        },
        enumerable: true,
        configurable: true
    });
    ApiSettingsComponent.prototype.createForm = function () {
        this.apiSettingForm = this.fb.group({
            apiKeys: this.fb.array([this.createKeyItems()]),
            minSpredPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
        // this.formControlValueChanged();
    };
    // formControlValueChanged(){
    //   this.apiSettingForm.get('apiKeys').valueChanges.subscribe((mode:string) => {
    //     console.log(mode);
    //   });
    // }
    ApiSettingsComponent.prototype.createKeyItems = function (data) {
        if (data === void 0) { data = {}; }
        return this.fb.group({
            id: data.id || '',
            market_id: data.market_id || '',
            api_key: '',
            secret_key: '',
            upsert: 0,
            is_locked: data.is_locked ? 0 : 1,
            is_valid_api_keys: data.is_valid_api_keys,
        });
    };
    ApiSettingsComponent.prototype.removeKeyItem = function (idx) {
        // remove apiKeys from the list
        var control = this.apiSettingForm.controls['apiKeys'];
        control.removeAt(idx);
    };
    ApiSettingsComponent.prototype.onApiKeyChange = function (value, idx) {
        var control = this.apiSettingForm.controls['apiKeys'], subControl = control.controls[idx];
        if (value.length > 0) {
            subControl.controls['secret_key'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            subControl.controls['upsert'].setValue(1);
            this.apiSettingData[idx]['is_valid_api_keys'] = null;
        }
        else {
            subControl.controls['secret_key'].clearValidators();
            subControl.controls['upsert'].setValue(0);
            this.apiSettingData[idx]['is_valid_api_keys'] = subControl.controls['is_valid_api_keys'].value;
        }
        subControl.controls['secret_key'].updateValueAndValidity();
    };
    ApiSettingsComponent.prototype.onSecretKeyChange = function (value, idx) {
        var control = this.apiSettingForm.controls['apiKeys'], subControl = control.controls[idx];
        if (value.length > 0) {
            subControl.controls['api_key'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            subControl.controls['upsert'].setValue(1);
            this.apiSettingData[idx]['is_valid_api_keys'] = null;
        }
        else {
            subControl.controls['api_key'].clearValidators();
            subControl.controls['upsert'].setValue(0);
            this.apiSettingData[idx]['is_valid_api_keys'] = subControl.controls['is_valid_api_keys'].value;
        }
        subControl.controls['api_key'].updateValueAndValidity();
    };
    ApiSettingsComponent.prototype.onSubmit = function () {
        var me = this;
        if (this.apiSettingForm.valid) {
            var formValue = this.apiSettingForm.value.apiKeys;
            var postData_1 = [];
            formValue.forEach(function (item) {
                if (item.upsert === 1) {
                    postData_1.push({
                        id: item.id,
                        market_id: item.market_id,
                        api_key: item.api_key,
                        secret_key: item.secret_key
                    });
                }
            });
            if (postData_1.length == 0 /* && this.apiSettingForm.value.minSpredPercentage===this.minSpredData*/) {
                alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_4__["API_SETTINGS"].errors.noChanges);
                return;
            }
            alertify.confirm(_config_lang__WEBPACK_IMPORTED_MODULE_4__["API_SETTINGS"].confirm.save, function () {
                if (postData_1.length > 0) {
                    me.frontendApi.saveClientMarketApi(postData_1).subscribe(function (response) {
                        if (response.success) {
                            alertify.success(response['msg']);
                            me.apiSettingData = [];
                            me.createForm();
                            me.getApiSettingsList();
                            // me.getMinimumSpredPercent();
                        }
                        else {
                            alertify.error(response['msg']);
                        }
                    });
                }
                // if(me.apiSettingForm.controls.minSpredPercentage.valid){
                //   let min_Spred_Percentage = me.apiSettingForm.value.minSpredPercentage;
                //   if(min_Spred_Percentage===me.minSpredData){
                //     //do nothing
                //   }
                //   else if(min_Spred_Percentage<0){
                //     // alertify.error('Minimum Spred Percentage must be a positive number');
                //     alertify.error(API_SETTINGS.errors.minSpredNegative);
                //     me.getMinimumSpredPercent();
                //   }
                //   else{
                //     me.frontendApi.saveMinSpredPercent(min_Spred_Percentage).subscribe(response =>{
                //       if(response['success'] == true)
                //       {
                //         me.frontendApi.min_spred_percent = min_Spred_Percentage;
                //         alertify.success(response['message']);
                //       }
                //       else
                //       {
                //         alertify.error(response['message']);
                //       }
                //       me.getMinimumSpredPercent();
                //     });
                //   }
                // }
            });
        }
    };
    ApiSettingsComponent.prototype.onOffStatusChange = function (event, rowIdx, exchangeId, recId) {
        if (recId === null) {
            // alertify.error('Record not found please Save the Record First!');
            alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_4__["API_SETTINGS"].errors.idEmpty);
        }
        else {
            var controllerName = 'client-market';
            this.frontendApi.toggleStatus(recId, controllerName).subscribe(function (res) {
                if (res['success'] == true) {
                    alertify.success(res['message']);
                }
                else {
                    alertify.error(res['message']);
                }
            });
        }
    };
    ApiSettingsComponent.prototype.onReset = function () {
        for (var i = 0; i < this.apiSettingData.length; ++i) {
            this.apiSettingForm.controls.apiKeys['controls'][i].controls.api_key.setValue("");
            this.apiSettingForm.controls.apiKeys['controls'][i].controls.secret_key.setValue("");
            this.apiSettingForm.controls.apiKeys['controls'][i].controls.upsert.setValue(0);
        }
        // this.getMinimumSpredPercent();
    };
    ApiSettingsComponent.prototype.onVerifyBtnClick = function (event, rowIdx, exchangeId, recId) {
        var _this = this;
        var me = this;
        this.verifyLoadingImgRowIdx = rowIdx;
        try {
            var rec = this.apiSettingForm.controls.apiKeys['controls'][rowIdx].value;
            if (rec.upsert == 1 && (!rec.api_key || !rec.secret_key)) {
                // alertify.error("Api/Secret Keys Are Invalid For "+exchangeId);
                alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_4__["API_SETTINGS"].errors.keysInvalid + exchangeId);
                this.verifyLoadingImgRowIdx = null;
                return;
            }
            var params = {
                'market_code': exchangeId,
                'client_market_id': recId,
                'upsert': rec.upsert,
                'api_key': rec.api_key,
                'secret_key': rec.secret_key
            };
            me.frontendApi.verifyApiKey(params).subscribe(function (result) {
                _this.verifyLoadingImgRowIdx = null;
                var idx = -1;
                for (var i = 0; i < me.apiSettingData.length; i++) {
                    if (me.apiSettingData[i]['id'] == recId) {
                        idx = i;
                    }
                }
                if (result['success']) {
                    alertify.success(result['message']);
                    me.apiSettingData[idx]['is_valid_api_keys'] = 1;
                }
                else {
                    alertify.error(result['message']);
                    me.apiSettingData[idx]['is_valid_api_keys'] = 0;
                }
            });
        }
        catch (e) {
            //
        }
    };
    ApiSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api-settings',
            template: __webpack_require__(/*! ./api-settings.component.html */ "./src/app/components/api-settings/api-settings.component.html"),
            styles: [__webpack_require__(/*! ./api-settings.component.css */ "./src/app/components/api-settings/api-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_frontend_service__WEBPACK_IMPORTED_MODULE_3__["FrontendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ApiSettingsComponent);
    return ApiSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top navigation -->\r\n<div class=\"top-bar top_nav\">\r\n    <div class=\"nav_menu\">\r\n        <div class=\"container pos-r\">\r\n            <nav class=\"row\" role=\"navigation\">\r\n                <div class=\"col-md-9\">\r\n                    <a href=\"javascript:void(0);\" class=\"toggler\" (click)=\"toggleSideBaMenu()\"><span class=\"toggler-span\"></span></a>\r\n                    <a [routerLink]=\"['/dashboard']\" class=\"app-name logo\">\r\n                        <img src=\"{{frontendApi.BASE_URL}}images/orbit.svg\" alt=\"Orbit\" class=\"svg\">\r\n                    </a>\r\n                    <ul class=\"float-left nav navbar-nav market-currency\">\r\n                        <li *ngFor=\"let item of walletList\" [ngClass]=\"{'active':item.id == socketService.activeWalletSelModel.id}\" (click)=\"onWalletTabChange(item)\">\r\n                            <a href=\"javascript:void(0);\">{{item.code}}</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div *ngIf=\"enableSingleTrade\" class=\"trade-action-toggle\">\r\n                        <span>Trade Action</span>\r\n                        <div class=\"switch\">\r\n                            <input type=\"checkbox\" checked (change)=\"onTradeActionToggle($event.target.checked)\" *ngIf=\"socketService.clientWalletSelModel.tradeActionChecked;else uncheckedToggleBtn\">\r\n                            <ng-template #uncheckedToggleBtn>\r\n                                <input type=\"checkbox\" (change)=\"onTradeActionToggle($event)\">\r\n                            </ng-template>\r\n                            <span class=\"slider\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <ul class=\"navbar float-right user-menu mb-0 p-0\">\r\n\r\n                        <li class=\"nav-item\">\r\n                            <p class=\"user-profile\">{{getFullName()}}</p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/socket-io.service */ "./src/app/services/socket-io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(frontendApi, socketService) {
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this.enableSingleTrade = Orbit['CURRENT_USER']['enable_single_trade'] === 1 ? true : false;
        this.walletList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getWalletList();
    };
    HeaderComponent.prototype.getFullName = function () {
        return Orbit['CURRENT_USER']['full_name'];
    };
    /**
     * Fetch Wallet master list.
     */
    HeaderComponent.prototype.getWalletList = function () {
        var _this = this;
        this.frontendApi.getDefaultWallet().subscribe(function (res) {
            if (res['success']) {
                _this.walletList = res['data'];
            }
        });
    };
    /**
     * @author ROHAN
     * On wallet selection change, set active wallet
     * @param {[Object]} walletItem [selected wallet]
     */
    HeaderComponent.prototype.onWalletTabChange = function (walletItem) {
        this.socketService.changeActiveWallet(walletItem);
        // let params = {wallet_id : this.socketService.activeWalletSelModel['id']};
        // this.frontendApi.getTradeLog(params).subscribe(res => {
        //   this.frontendApi.homeTradeLogData = res['data'];
        // });
    };
    /**
     * On Trade Action input checkbox change event.
     * @param {[boolean]} checked [trade action checked/unchecked]
     */
    HeaderComponent.prototype.onTradeActionToggle = function (checked) {
        this.socketService.clientWalletSelModel.tradeActionChecked = checked;
    };
    /**
     * Side bar menu toggler event from header
     */
    HeaderComponent.prototype.toggleSideBaMenu = function () {
        this.frontendApi.sideBarStatus = !this.frontendApi.sideBarStatus;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = "<div class=\"progress-screen\">\n\t<p>\n\t\t<img src=\"{{frontendApi.BASE_URL}}images/processing.gif\" alt=\"\">\n\t\t<span>{{mask_text}}</span>\n\t</p>\n</div> "

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
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/frontend.service */ "./src/app/services/frontend.service.ts");
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
    function LoadingMaskComponent(frontendApi) {
        this.frontendApi = frontendApi;
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
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]])
    ], LoadingMaskComponent);
    return LoadingMaskComponent;
}());



/***/ }),

/***/ "./src/app/components/common/ng-alert/ng-alert.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/ng-alert/ng-alert.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/ng-alert/ng-alert.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/common/ng-alert/ng-alert.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div  class=\"connection-error-alert\" role=\"alert\"> -->\r\n  <div class=\"connection-{{alert_type}}-alert\" role=\"alert\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"alert alert-{{alert_type}} text-center\">\r\n        <i class=\"fa {{messageCls}}\"></i>&nbsp;\r\n        {{message}}\r\n        <span class=\"reconnect\" (click)=\"onReconnectClick()\">\r\n          Reconnect\r\n        </span>\r\n        &nbsp;<span>OR</span>\r\n        <span class=\"reload-text-menu fa fa-repeat\" (click)=\"onReloadClick()\">\r\n          Reload\r\n        </span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common/ng-alert/ng-alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/common/ng-alert/ng-alert.component.ts ***!
  \******************************************************************/
/*! exports provided: NgAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlertComponent", function() { return NgAlertComponent; });
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

var NgAlertComponent = /** @class */ (function () {
    function NgAlertComponent() {
        /* OUTPUTS SOCKET RECONNECT EVENT */
        this.reconnectSocket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messageClsArr = {
            error: 'fa-exclamation-triangle'
        };
        this.messageCls = '';
    }
    NgAlertComponent.prototype.ngOnInit = function () {
        if (this.messageClsArr.hasOwnProperty(this.alert_type)) {
            this.messageCls = this.messageClsArr[this.alert_type];
        }
    };
    /**
     * @author AMIR
     * "Reconnect" link click event handler.
     * @returns Emit "reconnectSocket" click event
     */
    NgAlertComponent.prototype.onReconnectClick = function () {
        this.reconnectSocket.emit(true);
    };
    /**
     * @author AMIR
     * "Reload" link click event handler.
     * Reloads the application
     */
    NgAlertComponent.prototype.onReloadClick = function () {
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgAlertComponent.prototype, "reconnectSocket", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgAlertComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgAlertComponent.prototype, "alert_type", void 0);
    NgAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ng-alert',
            template: __webpack_require__(/*! ./ng-alert.component.html */ "./src/app/components/common/ng-alert/ng-alert.component.html"),
            styles: [__webpack_require__(/*! ./ng-alert.component.css */ "./src/app/components/common/ng-alert/ng-alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgAlertComponent);
    return NgAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/common/side-bar/side-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/side-bar/side-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/side-bar/side-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/common/side-bar/side-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"side-menu\" class=\"nav side-menu\" [ngClass]=\"{'open' : frontendApi.sideBarStatus}\">\r\n\t<nav class=\"navbar d-block px-0 pt-0 w-100\">\r\n\t\t<ul class=\"side-nav navbar-nav\">\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t\t<a [routerLink]=\"['/dashboard']\" class=\"nav-link p-3\" (click)=\"onMenuClick('dashboard')\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fa fa-dashboard\"></i>\r\n\t\t\t\t\t\t<label>Dashboard</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t\t<a [routerLink]=\"['/apiSettings']\" class=\"nav-link p-3\" (click)=\"onMenuClick('apiSettings')\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fa fa-key\"></i>\r\n\t\t\t\t\t\t<label>API Keys Settings</label></span></a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t\t<a [routerLink]=\"['/fund-transfer']\" class=\"nav-link p-3\" (click)=\"onMenuClick('fundTransfer')\">\r\n\t\t\t\t\t<span><i class=\"fa fa-exchange\"></i>\r\n\t\t\t\t\t\t<label>Fund Transfer</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t\t<a [routerLink]=\"['/tradeLog']\" class=\"nav-link p-3\" (click)=\"onMenuClick('tradeLog')\">\r\n\t\t\t\t\t<span><i class=\"fa fa-table\"></i>\r\n\t\t\t\t\t\t<label>Trade Log</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n\t\t\t\t<a [routerLink]=\"['/user-settings']\" class=\"nav-link p-3\" (click)=\"onMenuClick('profile')\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fa fa-gear\"></i>\r\n\t\t\t\t\t\t<label>Settings</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\" (click)=\"onReloadClick()\">\r\n\t\t\t\t<a  href=\"javascript:void(0)\" class=\"nav-link p-3\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fa fa-repeat\"></i>\r\n\t\t\t\t\t\t<label>Restart</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item logout\" (click)=\"userLogout()\">\r\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-link p-3\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fa fa-sign-out\"></i>\r\n\t\t\t\t\t\t<label>Logout</label>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</nav>\r\n\t<div class=\"menu-bottom\">\r\n\t\t<ul class=\"nav navbar-nav navbar-right mode-menu\">\r\n\t\t\t<li><a href=\"javascript:void(0);\" class=\"toggle-mode\" data-mode=\"day\" (click)=\"changeTheme('day')\">Day Mode</a></li>\r\n\t\t\t<li><a href=\"javascript:void(0);\" class=\"toggle-mode\" data-mode=\"night\" (click)=\"changeTheme('night')\">Night Mode</a></li>\r\n\t\t</ul>\r\n\t\t<!-- <ul class=\"nav navbar-nav user-menu-bottom\">\r\n\t\t\t<li><a href=\"javascript:void(0);\" class=\"fa fa-setting\"><i class=\"fa fa-cog\"></i></a></li>\r\n\t\t\t<li class=\"logout\" (click)=\"userLogout()\"><a href=\"javascript:void(0)\" class=\"fa fa-setting\"><i class=\"fa fa-sign-out\"></i></a></li>\r\n\t\t</ul> -->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common/side-bar/side-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/common/side-bar/side-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/socket-io.service */ "./src/app/services/socket-io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(frontendApi, socketService, _elementRef) {
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this._elementRef = _elementRef;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.changeTheme = function (day) {
    };
    SideBarComponent.prototype.userLogout = function () {
        var me = this;
        var message = "Do you want to logout?";
        alertify.confirm(message, function (e) {
            if (e) {
                me.frontendApi.logout().subscribe(function (res) {
                    var BASE_URL = window['BASE_URL'];
                    window.location.href = BASE_URL + 'auth';
                });
            }
        });
    };
    /**
     * @author ROHAN :: 2018-09-21
     * SIDE-BAR PANEL SHOW/HIDE FUNCTIONALITY
     * 1. If clicked anywhere in the body then hide the sidebar.
     * 2. If clicked on header toggler icon then do nothing.
     * 3. If clicked on side-bar menu items then hide sidebar.
     * 4. if clicked inside side-bar panel's blank space then do nothing.
     */
    SideBarComponent.prototype.onClick = function (event, targetElement) {
        var evtClass = event['target']['attributes']['class'];
        if (!targetElement || !targetElement.className) {
            return;
        }
        else {
            var togglerAnchorClassName = 'toggler';
            var togglerSpanClassName = 'toggler-span';
            /**
             * IF TOGGLER ANCHOR TAG OR SPAN TAG INSIDE ANCHOR TAG IS CLICKED THEN DO NOTHING.
             * TOGGLER CLICK EVENT IS TRIGGERED FROM HEADER COMPONENT
             */
            var className = targetElement.className.toString();
            if (className.indexOf(togglerAnchorClassName) > -1 || className.indexOf(togglerSpanClassName) > -1) {
                return;
            }
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        /**
         * IF MOUSE CLICK IS NOT INSIDE SIDEBAR THEN HIDE SIDEBAR.
         */
        if (!clickedInside) {
            if (this.frontendApi.sideBarStatus) {
                this.frontendApi.sideBarStatus = false;
            }
        }
        else {
            var sideBarNoHideClassList = ['navbar', 'nav_menu', 'menu-bottom', 'side-menu'];
            var isNoHideClsExists_1 = false;
            var targetClassName_1 = targetElement.className.toString();
            sideBarNoHideClassList.forEach(function (clsName) {
                if (targetClassName_1.indexOf(clsName) > -1) {
                    isNoHideClsExists_1 = true;
                }
            });
            /**
             * IF CLICKED ON ANY BLANK AREA OF SIDEBAR THEN DONOT HIDE THE PANEL.
             * ELSE HIDE THE SIDEBAR PANEL.
             */
            if (isNoHideClsExists_1) {
                return;
            }
            else {
                this.frontendApi.sideBarStatus = false;
            }
        }
    };
    /**
     * [onMenuClick]
     * @param {string} pnlName [clicked panel name]
     */
    SideBarComponent.prototype.onMenuClick = function (pnlName) {
        var me = this;
        if (pnlName != 'dashboard') {
            /*let obj:any = {
                    items              : [],
                    bidRateArr         : {},
                    askRateArr         : {},
                    base_balance_arr  : {},
                    quote_balance_arr    : {},
                    // cash_balance_arr   : {},
                    tickers            : {},
                    max_bid_market     : '',
                    min_ask_market     : '',
                    base_balance_total: 0,
                    quote_balance_total  : 0,
                    // cash_balance_total : 0,
                    base_jpy_rate       : 0,
                    quote_jpy_rate       : 0,
                    symbol             : Orbit.CURRENT_USER.symbol,
                    tradeActionChecked : true
                  };
            me.socketService.isReconnectionError = false;
            me.socketService.isActiveDashboard = false;
            me.socketService.reconnectionErrorMsg = '';
            me.socketService.clientWalletSelModel = Object.assign(me.socketService.clientWalletSelModel, obj);
            if(me.socketService.socket){
              me.socketService.socket.io.disconnect();
            }*/
        }
    };
    SideBarComponent.prototype.onReloadClick = function () {
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], SideBarComponent.prototype, "onClick", null);
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/common/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/common/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/fund-transfer/fund-transfer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/fund-transfer/fund-transfer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\r\n\ttext-align: center;\r\n}\r\nselect {\r\n\twidth: 70%%;\r\n}"

/***/ }),

/***/ "./src/app/components/fund-transfer/fund-transfer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/fund-transfer/fund-transfer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fx\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t<div class=\"market-view api-settings-table secondary-tble\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Market</th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 40px\"></th>\r\n\t\t\t\t\t\t\t\t<th>From:\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"onTransferChange($event,'from')\">\r\n\t\t\t\t\t\t\t\t\t\t<option>{{socketService.activeWalletSelModel.base}}</option>\r\n\t\t\t\t\t\t\t\t\t\t<option>{{socketService.activeWalletSelModel.quote}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th>To:\r\n\t\t\t\t\t\t\t\t\t<select (change)=\"onTransferChange($event,'to')\">\r\n\t\t\t\t\t\t\t\t\t\t<option>{{socketService.activeWalletSelModel.quote}}</option>\r\n\t\t\t\t\t\t\t\t\t\t<option>{{socketService.activeWalletSelModel.base}}</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th>Transfer({{socketService.activeWalletSelModel.base}}):</th>\r\n\t\t\t\t\t\t\t\t<th>Equivalent({{socketService.activeWalletSelModel.quote}})</th>\r\n\t\t\t\t\t\t\t\t<th style=\"width: 100px\"></th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of apiSettingData;let i=index\">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"crypt-market-img\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{frontendApi.BASE_URL}}web/images/{{item.image}}\" alt=\"{{item.code}}\">\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<span class=\"country-flag\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{frontendApi.BASE_URL}}web/images/flags/{{item.country}}.png\" alt=\" {{item.country}}\">\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.base_balance}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{item.quote_balance}}</td>\r\n\t\t\t\t\t\t\t\t<td><input style=\"width: 100%\" type=\"text\" name=\"\" (input)=\"onTransferValueChange($event)\"></td>\r\n\t\t\t\t\t\t\t\t<td><!-- {{equivalentBlc}} --></td>\r\n\t\t\t\t\t\t\t\t<button style=\"float: right\" type=\"button\" (click)=\"onTransfer()\" class=\"btn btn-primary\">Transfer</button>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/fund-transfer/fund-transfer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/fund-transfer/fund-transfer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FundTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferComponent", function() { return FundTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/socket-io.service */ "./src/app/services/socket-io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FundTransferComponent = /** @class */ (function () {
    function FundTransferComponent(frontendApi, socketService) {
        var _this = this;
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this.base = this.socketService.activeWalletSelModel.base;
        this.quote = this.socketService.activeWalletSelModel.quote;
        this.equivalentBlc = 0;
        this._subscription = this.socketService.walletChange.subscribe(function (value) {
            _this.getClientMarketWalletList();
        });
    }
    FundTransferComponent.prototype.ngOnInit = function () {
        this.getClientMarketWalletList();
        this.getJpyRate();
    };
    FundTransferComponent.prototype.getClientMarketWalletList = function () {
        var me = this;
        var params = { symbol: me.socketService.activeWalletSelModel['symbol'] };
        me.frontendApi.clientMarketWalletList(params).subscribe(function (res) {
            me.socketService.clientWalletSelModel.items = res['data'];
            me.apiSettingData = res['data'];
        });
    };
    FundTransferComponent.prototype.onTransferChange = function (e, change) {
        // if(change == 'from'){
        // 	this.socketService.activeWalletSelModel.base = e.target.value;
        // }else{
        // 	this.socketService.activeWalletSelModel.quote = e.target.value
        // }
    };
    FundTransferComponent.prototype.onTransferValueChange = function (e) {
        // this.equivalentBlc = JSON.parse(e.target.value) * this.socketService.clientWalletSelModel.quote_jpy_rate;
    };
    FundTransferComponent.prototype.getJpyRate = function () {
        var me = this;
        var symbolsArr = [this.socketService.activeWalletSelModel.base, this.socketService.activeWalletSelModel.quote];
        // const params: any = { fsyms : symbolsArr.join(','), tsyms : 'JPY'};
        var params = { fsyms: symbolsArr.join(','), tsyms: 'JPY' };
        this.frontendApi.getJpyRate(params).subscribe(function (response) {
            var base = me.socketService.activeWalletSelModel.base, quote = me.socketService.activeWalletSelModel.quote;
            me.socketService.clientWalletSelModel.base_jpy_rate = response[base] && response[base]['JPY'] ? response[base]['JPY'] : 0;
            me.socketService.clientWalletSelModel.quote_jpy_rate = response[quote] && response[quote]['JPY'] ? response[quote]['JPY'] : 0;
        });
    };
    FundTransferComponent.prototype.onTransfer = function () {
    };
    FundTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-transfer',
            template: __webpack_require__(/*! ./fund-transfer.component.html */ "./src/app/components/fund-transfer/fund-transfer.component.html"),
            styles: [__webpack_require__(/*! ./fund-transfer.component.css */ "./src/app/components/fund-transfer/fund-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], FundTransferComponent);
    return FundTransferComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tborder:  3px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"progress-screen\">\r\n\t<p>\r\n\t\t<img src=\"{{frontendApi.BASE_URL}}images/processing.gif\" alt=\"\">\r\n\t\t<span>Processing..</span>\r\n\t</p>\r\n</div> -->\r\n\r\n<!-- HEADER ALERT MESSAGE COMPONENT -->\r\n<app-ng-alert *ngIf=\"socketService.isReconnectionError == true\"\r\n  [message] = \"socketService.reconnectionErrorMsg\"\r\n  [alert_type] = \"'error'\"\r\n  (reconnectSocket)=\"onReconnectSocket()\">\r\n</app-ng-alert>\r\n\r\n<div class=\"container container-fx\">\r\n\t<div class=\"row\" id=\"container-fx\">\r\n\t\t<div class=\"col-md-9 table-view\">\r\n\r\n\t\t\t<!-- CLIENT MARKET WALLET TABLE WITH TICKER INFO  -->\r\n\t\t\t<app-ticker-datagrid [bitForm]=\"bitForm\"></app-ticker-datagrid>\r\n\r\n      <!-- TRADE LOG TABLE -->\r\n      <app-trade-log-datagrid></app-trade-log-datagrid>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-3 right-sidebar\" id=\"right-sidebar\">\r\n\t\t\t<form [formGroup]=\"bitForm\">\r\n\t\t\t\t<div class=\"form-group\">\r\n          <!-- MAX BID BLOCK -->\r\n\t\t\t\t\t<div class=\"max-bid flx-contain items-center\">\r\n\t\t\t\t\t\t<label class=\"section-label\">Max<br>Bid</label>\r\n\t\t\t\t\t\t<div class=\"value\">\r\n              <!-- MAX BID JPY CONTAINER -->\r\n\t\t\t\t\t\t\t<p class=\"jpy-value\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control label\" formControlName=\"max_bid_jpy\">\r\n\t\t\t\t\t\t\t\t<span>JPY</span>\r\n              </p>\r\n              <!-- MAX BID RATE CONTAINER -->\r\n\t\t\t\t\t\t\t<p class=\"cur-value\">\r\n\t\t\t\t\t\t\t\t<input id=\"max-bid\" type=\"text\" class=\"form-control btn-sq\" formControlName=\"max_bid_rate\">\r\n\t\t\t\t\t\t\t\t<span>{{socketService.activeWalletSelModel.quote}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n          </div>\r\n          <!-- END OF MAX BID BLOCK -->\r\n          <!-- MIN ASK BLOCK -->\r\n\t\t\t\t\t<div class=\"min-ask flx-contain items-center\">\r\n\t\t\t\t\t\t<label class=\"section-label\">Min<br>Ask</label>\r\n\t\t\t\t\t\t<div class=\"value\">\r\n              <!-- MIN ASK JPY CONTAINER -->\r\n\t\t\t\t\t\t\t<p class=\"jpy-value\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control label\" formControlName=\"min_ask_jpy\">\r\n\t\t\t\t\t\t\t\t<span>JPY</span>\r\n              </p>\r\n              <!-- MIN ASK RATE CONTAINER -->\r\n\t\t\t\t\t\t\t<p class=\"cur-value\">\r\n\t\t\t\t\t\t\t\t<input id=\"min-ask\" type=\"text\" class=\"form-control br-light-bl btn-sq\" formControlName=\"min_ask_rate\">\r\n\t\t\t\t\t\t\t\t<span>{{socketService.activeWalletSelModel.quote}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n          <!-- END OF MIN ASK BLOCK -->\r\n          <!-- BID-ASK SPREAD BLOCK -->\r\n\t\t\t\t\t<div class=\"spred-amt flx-contain items-center\">\r\n            <!-- SPRED FEE TOOLTIP -->\r\n\t\t\t\t\t\t<p class='tooltip'>\r\n              <label class=\"section-label\" style=\"cursor: pointer;\" (click)=\"minSpredClick(minSpredModalRoot)\">\r\n                SPREAD\r\n                <span>\r\n                  <i>{{bitForm.value.min_spred_percent}}%</i>\r\n                </span>\r\n              </label>\r\n\t\t\t\t\t\t\t<span class=\"tooltiptext\">\r\n\t\t\t\t\t\t\t\t<p>Max Bid SPREAD : {{bitForm.value.max_bid_taker_fee}}% </p>\r\n\t\t\t\t\t\t\t\t<p>Min Ask SPREAD : {{bitForm.value.min_ask_taker_fee}}% </p>\r\n\t\t\t\t\t\t\t\t<!-- <p>Min SPREAD \t: {{frontendApi.min_spred_percent | bitNumber:1.0-2:0:0}}% </p> -->\r\n\t\t\t\t\t\t\t</span>\r\n            </p>\r\n            <!-- END OF SPRED FEE TOOLTIP -->\r\n\t\t\t\t\t\t<div class=\"value\">\r\n              <!-- BID-ASK SPREAD IN CRYPTOCURRENCY AMOUNT -->\r\n\t\t\t\t\t\t\t<p class=\"jpy-value spr-amt\">\r\n\t\t\t\t\t\t\t\t<input  id=\"spred-amt\" type=\"text\" class=\"form-control label\" formControlName=\"spred_jpy\">\r\n\t\t\t\t\t\t\t\t<span class=\"sub\">{{socketService.activeWalletSelModel.quote}}</span>\r\n              </p>\r\n              <!-- END OF BID-ASK SPREAD IN CRYPTOCURRENCY AMOUNT -->\r\n              <!-- BID-ASK SPREAD PERCENTAGE -->\r\n\t\t\t\t\t\t\t<p class=\"jpy-value spr-percent\">\r\n\t\t\t\t\t\t\t\t<input id=\"spred-percent\" type=\"text\" class=\"form-control btn-sq\" formControlName=\"spred_percent\">\r\n\t\t\t\t\t\t\t\t<span class=\"sub\">%</span>\r\n              </p>\r\n              <!-- END OF BID-ASK SPREAD PERCENTAGE -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n        </div>\r\n        <!-- END OF BID-ASK SPREAD BLOCK -->\r\n\r\n        <!-- TRADE BLOCK -->\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"trade-btc-amt\">\r\n\t\t\t\t\t\t<label class=\"section-label\">TRADE {{socketService.activeWalletSelModel.quote}} AMOUNT</label>\r\n\t\t\t\t\t\t<div class=\"value\">\r\n\t\t\t\t\t\t\t<p class=\"jpy-value\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"btc-amount\" class=\"form-control\" formControlName=\"trade_quote_amount\">\r\n\t\t\t\t\t\t\t\t<span class=\"sub\">{{socketService.activeWalletSelModel.quote}}</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<div class=\"bid-buttons\">\r\n\t\t\t\t\t\t\t\t<p *ngFor=\"let item of tradeButtons\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"+\" (click)=\"onPlusClick(item)\">\r\n\t\t\t\t\t\t\t\t\t<span>{{item | number:'1.1-3'}}</span>\r\n\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"-\" (click)=\"onMinusClick(item)\">\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"est-profit\">\r\n\t\t\t\t\t\t<label class=\"section-label\">ESTIMATED PROFIT</label>\r\n\t\t\t\t\t\t<div class=\"value\">\r\n\t\t\t\t\t\t\t<p class=\"jpy-value\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" id=\"est-profit\"class=\"form-control btn-sq \" formControlName=\"estimated_profit\">\r\n\t\t\t\t\t\t\t\t<span class=\"sub\">JPY</span>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <ng-container *ngIf=\"status\"> -->\r\n\t\t\t\t<div class=\"form-group buttons\">\r\n\t\t\t\t\t<div class=\"trade-btns\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"socketService.clientWalletSelModel.tradeActionChecked; else buysell\">\r\n\t\t\t\t\t\t\t<button [disabled]=\"tradeCounter >= tradeClickLimit\" (click)=\"openTradeConfirmationDialog(modalRoot,'Buy/Sell')\" class=\"btn btn-primaty btn-action-trade btn-sq\">\r\n\t\t\t\t\t\t\t\t<label>TRADE</label>\r\n\t\t\t\t\t\t\t\t<span>BID/ASK</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #buysell>\r\n\t\t\t\t\t\t\t<p class=\"buy-sell-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"tradeCounter >= tradeClickLimit\" class=\"btn btn-success btn-buy-action btn-sq\" (click)=\"openTradeConfirmationDialog(modalRoot, 'Buy')\"> Buy </button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"tradeCounter >= tradeClickLimit\" class=\"btn btn-danger btn-sell-action btn-sq\" (click)=\"openTradeConfirmationDialog(modalRoot, 'Sell')\"> Sell </button>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- </ng-container> -->\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"trade-count\">\r\n\t\t\t\t\t\t<label class=\"section-label mb-0\">TRADE COUNT</label>\r\n\t\t\t\t\t\t<div class=\"value\">\r\n\t\t\t\t\t\t\t<p style=\"float: right\" class=\"mb-0 trade-click-limit\" [ngClass]=\"{'tooltip': tradeCounter >= tradeCountCalc}\"><span><i *ngIf=\"tradeCounter >= tradeCountCalc\" class =\"fa fa-warning\" [ngStyle]=\"{'color': tradeCounter == tradeClickLimit ? 'red':'yellow', 'padding-right':'5px'}\"></i>{{tradeCounter}}</span>/{{tradeClickLimit}}\r\n\t\t\t\t\t\t\t<span *ngIf=\"tradeCounter >= tradeCountCalc\" class=\"tooltiptext\">{{tradeCountErrMsg}}</span>\r\n\t\t\t\t\t\t\t<!-- <span *ngIf=\"tradeCounter == tradeClickLimit\" class=\"tooltiptext\">Limit exceeded</span> -->\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<app-modal #modalRoot\r\n               [modalTitle]=\"'Orbit'\"\r\n               [width]=\"750\"\r\n               [maximizable]=\"true\"\r\n               [zIndex]=\"1100\"\r\n               >\r\n      <ng-container class=\"app-modal-body\">\r\n\t      \t<div *ngIf=\"checkSpredPercentAlert() == true\" class=\"alert alert-warning p-1\" role=\"alert\" >\r\n\t\t <!-- You min spred is less than current spred &nbsp;<i class=\"fa fa-exclamation-triangle\"></i> -->\r\n\t\t \t<i class=\"fa fa-exclamation-triangle\"></i>&nbsp;The estimated spread of {{frontendApi.tradeFormData.spred_percent}}% is less than {{frontendApi.min_spred_percent}}%\r\n\t  \t\t</div>\r\n        \t<app-trade-form-data></app-trade-form-data>\r\n      </ng-container>\r\n      <ng-container class=\"app-modal-footer\">\r\n\t    <div class=\"float-left pt-2\">\r\n\t  \t\t<input type=\"checkbox\" [checked]=\"!disableTrade\" name=\"trade-agreement\" (change)=\"checkTradeAgreement($event)\"> I agree.\r\n\t  \t</div>\r\n\t  \t<div class=\"float-right\">\r\n\t\t    <button type=\"button\"  [disabled]=\"disableTrade\" class=\"btn btn-outline-dark btn-trade-confirm\" (click)=\"onTradeActionClick()\">Trade</button>\r\n\t\t    <button type=\"button\" class=\"btn btn-outline-dark btn-cancel\" (click)=\"setDefaultCheckBox(modalRoot)\">Cancel</button>\r\n\t\t</div>\r\n      </ng-container>\r\n</app-modal>\r\n<app-modal #minSpredModalRoot\r\n               [modalTitle]=\"'Orbit'\"\r\n               [width]=\"500\"\r\n               [maximizable]=\"true\"\r\n               [zIndex]=\"1100\"\r\n               >\r\n      <ng-container class=\"app-modal-body\">\r\n        <!-- <app-min-spred-modal [modal] = \"minSpredModalRoot\"></app-min-spred-modal> -->\r\n        <form [formGroup]=\"minSpredForm\">\r\n        \t<label>Minimum Spread Percent:</label><br>\r\n\t\t\t<input #minSpred type=\"number\" step=\"0.001\" placeholder=\"Minimum Spread Percent\" formControlName=\"minSpredPercentage\" class=\"form-control\" [ngClass] = \"{ 'error' : minSpredForm.get('minSpredPercentage').invalid }\">\r\n      \t</form>\r\n      </ng-container>\r\n      <ng-container class=\"app-modal-footer\">\r\n        <div class=\"float-right\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark btn-save\" (click)=\"minSpredUpdate(minSpredModalRoot, 'save')\">SAVE</button>\r\n          \t<button type=\"button\" class=\"btn btn-outline-dark btn-reset\" (click)=\"minSpredUpdate(minSpredModalRoot,'reset')\">RESET</button>\r\n          \t<button type=\"button\" class=\"btn btn-outline-dark btn-cancel\" (click)=\"minSpredModalRoot.hide();resetValue()\">CANCEL</button>\r\n        </div>\r\n      </ng-container>\r\n</app-modal>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/socket-io.service */ "./src/app/services/socket-io.service.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/lang */ "./src/app/config/lang.ts");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/constant */ "./src/app/config/constant.ts");
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
    function HomeComponent(router, route, frontendApi, socketService, fb) {
        this.router = router;
        this.route = route;
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this.fb = fb;
        this.disableTrade = true;
        this.tradeButtons = [1.0, 0.1, 0.01, 0.001];
        // public hasError:boolean = false;
        this.timer = {
            nowTime: new Date(),
            countDown: 0,
            resetCountDown: 60
        };
        this.mouseClickAudio = new Audio();
        this.successAudio = new Audio();
        this.errorAudio = new Audio();
        this.tradeCounter = Orbit['CURRENT_USER']['trade_counter'];
        this.tradeClickLimit = Orbit['CURRENT_USER']['trade_click_limit'];
        this.tradeCountCalc = Math.round((_config_constant__WEBPACK_IMPORTED_MODULE_6__["TRADE_COUNTER_PER"] / 100) * this.tradeClickLimit);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getTradeLogList();
        this.createInitialForm();
        this.loadAudio();
        this.changeTradeCounterErrMsg();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
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
        me.socketService.isReconnectionError = false;
        me.socketService.reconnectionErrorMsg = '';
        /*for clear refetch jpy rate interval*/
        clearInterval(me.socketService.refetchJpyRateTimer);
        me.socketService.clientWalletSelModel = Object.assign(me.socketService.clientWalletSelModel, obj);
        if (me.socketService.socket) {
            me.socketService.socket.io.disconnect();
        }
    };
    /**
     * @author SAGIN
     * Initialize and load audio files for mouse click | success message | error message
     */
    HomeComponent.prototype.loadAudio = function () {
        if (Orbit['CURRENT_USER']['user_settings']['enable_trade_amout_click_sound']) {
            this.mouseClickAudio.src = window['BASE_URL'] + 'audio/mouse_click.mp3';
            this.mouseClickAudio.load();
        }
        if (Orbit['CURRENT_USER']['user_settings']['enable_alert_sound']) {
            this.successAudio.src = window['BASE_URL'] + 'audio/success.wav';
            this.successAudio.load();
            this.errorAudio.src = window['BASE_URL'] + 'audio/error.wav';
            this.errorAudio.load();
        }
        if (Orbit['CURRENT_USER']['user_settings']['enable_min_spred_sound']) {
            this.socketService.spredPercentAudio.src = window['BASE_URL'] + 'audio/notify.mp3';
            this.socketService.spredPercentAudio.load();
        }
    };
    HomeComponent.prototype.changeTradeCounterErrMsg = function () {
        if (this.tradeCounter >= this.tradeCountCalc && this.tradeCounter < this.tradeClickLimit) {
            this.tradeCountErrMsg = _config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.tradeClickPerError;
        }
        else {
            this.tradeCountErrMsg = _config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.tradeClickFinishError;
        }
    };
    /**
     * @author SAGIN
     * On trade amount increment/decrement, play mouse click sound.
     */
    HomeComponent.prototype.playMouseClickAudio = function () {
        this.mouseClickAudio.play();
    };
    /**
     * @author SAGIN
     * On Trade success, play success audio sound
     */
    HomeComponent.prototype.playSuccessAudio = function () {
        this.successAudio.play();
    };
    /**
     * @author SAGIN
     * On Trade failure, play error audio sou=
     */
    HomeComponent.prototype.playErrorAudio = function () {
        this.errorAudio.play();
    };
    HomeComponent.prototype.openTradeConfirmationDialog = function (content, trade_type) {
        var CURRENT_USER = Orbit['CURRENT_USER'];
        this.disableTrade = true;
        this.modal = content;
        var currentSpredYPer = this.bitForm.value.spred_percent, tradeBtcAmount = this.bitForm.value.trade_quote_amount, minSpred = 0, wallet_id = CURRENT_USER['default_wallet']['id'];
        /*if(CURRENT_USER && CURRENT_USER.hasOwnProperty('min_spred_percent')){
          minSpred = JSON.parse(Orbit['CURRENT_USER']['min_spred_percent']);
        }*/
        if (this.bitForm.value && this.bitForm.value.hasOwnProperty('min_spred_percent')) {
            minSpred = this.bitForm.value.min_spred_percent;
            if (!this.frontendApi.min_spred_percent) {
                this.frontendApi.min_spred_percent = minSpred;
            }
        }
        else {
            return;
        }
        if (tradeBtcAmount == '' || tradeBtcAmount == '0.000') {
            // alertify.error('Please enter BTC amount');
            alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.emptyBtcAmount);
            return;
        }
        if (this.bitForm.value.spred_percent < 0) {
            alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.negativeSpred);
            return;
        }
        if (this.tradeCounter >= this.tradeClickLimit) {
            alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.tradeClickFinishError);
            return;
        }
        // if(trade_type == 'Buy/Sell'  && currentSpredYPer < minSpred){
        //     // alertify.error('Spred rate is less than your min spred value');
        //     alertify.error(DASHBOARD.errors.spredLessMinSpred);
        //     return;
        // }
        this.bitForm.controls['trade_type'].setValue(trade_type);
        this.bitForm.controls['wallet_id'].setValue(wallet_id);
        this.frontendApi.tradeFormData = JSON.parse(JSON.stringify(this.bitForm.value));
        if (!Orbit.CURRENT_USER.user_settings['enable_trade_confirmation_modal'] && this.bitForm.value.spred_percent > this.frontendApi.min_spred_percent) {
            this.disableTrade = false;
            this.onTradeActionClick();
        }
        content.show();
    };
    /**
     * uncheck checkbox on modal close
     */
    HomeComponent.prototype.setDefaultCheckBox = function (modal) {
        this.disableTrade = true;
        modal.hide();
    };
    /** show alert on trade confirmation */
    HomeComponent.prototype.checkSpredPercentAlert = function () {
        var minSpredPer = this.frontendApi.min_spred_percent, /*this.bitForm.value.min_spred_percent,*/ currentSpredPer = this.frontendApi.tradeFormData.spred_percent;
        if (currentSpredPer < minSpredPer && this.bitForm.value.trade_type == 'Buy/Sell') {
            return true;
        }
        else {
            return false;
        }
    };
    /** check if agreement is cheked or not  */
    HomeComponent.prototype.checkTradeAgreement = function (e) {
        var agreed = e['target']['checked'];
        if (agreed) {
            this.disableTrade = false;
        }
        else {
            this.disableTrade = true;
        }
    };
    HomeComponent.prototype.createInitialForm = function () {
        this.bitForm = this.fb.group({
            'wallet_id': [{ value: this.socketService.activeWalletSelModel.id, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]')]],
            'max_bid_jpy': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'max_bid_rate': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'min_ask_jpy': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'min_ask_rate': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'spred_jpy': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'spred_percent': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'min_spred_percent': [{ value: this.frontendApi.min_spred_percent, disabled: true }],
            'spred_quote': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'spred_base': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'market_buy': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'market_sell': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'trade_base_bid': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'trade_base_ask': [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'trade_quote_amount': [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            'estimated_profit': [{ value: '', disabled: true }],
            'trade_type': [{ value: '', disabled: true }],
            'max_bid_taker_fee': [{ value: '0.0', disabled: true }],
            'min_ask_taker_fee': [{ value: '0.0', disabled: true }],
        });
        this.minSpredForm = this.fb.group({
            'minSpredPercentage': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]),
        });
    };
    Object.defineProperty(HomeComponent.prototype, "minSpred", {
        get: function () {
            return this.minSpredForm.get('minSpredPercentage');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fetch Last 10 Trade Log History
     */
    HomeComponent.prototype.getTradeLogList = function () {
        var _this = this;
        var params = { wallet_id: this.socketService.activeWalletSelModel['id'] };
        this.frontendApi.getTradeLog(params).subscribe(function (res) {
            _this.frontendApi.homeTradeLogData = res['data'];
        });
    };
    /**
     * Trade button validation.
     * Enable or disable button based on trade
     */
    HomeComponent.prototype.onFormChanges = function () {
        var trade_amount = this.bitForm.value.trade_quote_amount;
        if (trade_amount == null || parseFloat(trade_amount) <= 0) {
            // this.hasError = true;
        }
        else {
            // this.hasError = false;
        }
    };
    /**
     * Trade BTC Amount Increment
     * @param {number} val [BIT Value]
     */
    HomeComponent.prototype.onPlusClick = function (val) {
        this.playMouseClickAudio();
        var currentBtcVal = parseFloat(this.bitForm.value['trade_quote_amount']) || 0, max_bid_quote = parseFloat(this.bitForm.value['max_bid_rate']) || 0, min_ask_quote = parseFloat(this.bitForm.value['min_ask_rate']) || 0, setBtcVal = currentBtcVal + val, setBtcValue = parseFloat(setBtcVal);
        /*calculate and set ETH bid/ask and estimated profit*/
        this.socketService.calculateEthBidAskAndProfit(max_bid_quote, min_ask_quote, setBtcValue, this.bitForm);
        // this.onFormChanges();
    };
    /**
       * Trade BTC Amount Decrement
       * @param {[type]} val [BIT Value]
       */
    HomeComponent.prototype.onMinusClick = function (val) {
        this.playMouseClickAudio();
        var currentBtcVal = parseFloat(this.bitForm.value['trade_quote_amount']) || 0;
        if ((currentBtcVal - val) < 0) {
            // alertify.error('Amount cannot be less than 0');
            alertify.error(_config_lang__WEBPACK_IMPORTED_MODULE_5__["DASHBOARD"].errors.negativeAmount);
        }
        else {
            var setBtcVal = currentBtcVal - val, max_bid_quote = parseFloat(this.bitForm.value['max_bid_rate']) || 0, min_ask_quote = parseFloat(this.bitForm.value['min_ask_rate']) || 0, setBtcValue = parseFloat(setBtcVal);
            /*calculate and set ETH bid/ask and estimated profit*/
            this.socketService.calculateEthBidAskAndProfit(max_bid_quote, min_ask_quote, setBtcValue, this.bitForm);
            // this.onFormChanges();
        }
    };
    HomeComponent.prototype.getBalance = function (market_code) {
        var item;
        for (var i = 0; i < this.socketService.clientWalletSelModel.items.length; i++) {
            item = this.socketService.clientWalletSelModel.items[i];
            if (item['code'] === market_code) {
                // return [item['btc_balance'], item['eth_balance']];
                return [item['quote_balance'], item['base_balance']];
            }
        }
        return [0, 0];
    };
    HomeComponent.prototype.onTradeActionClick = function () {
        var _this = this;
        if (this.disableTrade == true) {
            // do nothing
        }
        else {
            var me_1 = this;
            var tradeFormData = this.frontendApi.tradeFormData;
            var trade_type = tradeFormData['trade_type'], 
            // message              = "Do you want to "+trade_type,
            // trade_amount         = this.bitForm.value.trade_quote_amount,
            // currentSpredYPer     = this.bitForm.value.spred_percent,
            minSpred = tradeFormData['min_spred_percent'], //JSON.parse(Orbit['CURRENT_USER']['min_spred_percent']),
            request_time = this.getDateTime(), timestamp = this.getDateTimestamp(), data = {
                trade_type: tradeFormData['trade_type'],
                symbol: me_1.socketService.activeWalletSelModel.symbol,
                spred_percentage: this.bitForm.value.spred_percent,
            };
            var _a = this.getBalance(tradeFormData['market_sell']), quote_balance = _a[0], base_balance = _a[1];
            var bid_data = {
                'max_bid_jpy': this.removeNumberFormatting(tradeFormData['max_bid_jpy']),
                'exchange_rate': tradeFormData['max_bid_rate'],
                'market_sell': tradeFormData['market_sell'],
                'trade_base_amount': this.removeNumberFormatting(tradeFormData['trade_base_bid']),
                'trade_quote_amount': this.removeNumberFormatting(tradeFormData['trade_quote_amount']),
                'spred_percent': tradeFormData['trade_type'] == 'Buy/Sell' ? tradeFormData['spred_percent'] : 0,
                'spred_jpy': tradeFormData['trade_type'] == 'Buy/Sell' ? this.removeNumberFormatting(tradeFormData['spred_jpy']) : 0,
                'spred_quote': tradeFormData['trade_type'] == 'Buy/Sell' ? '' + tradeFormData['spred_quote'] : '0',
                'spred_base': tradeFormData['trade_type'] == 'Buy/Sell' ? '' + tradeFormData['spred_base'] : '0',
                'estimated_profit': tradeFormData['trade_type'] == 'Buy/Sell' ? this.removeNumberFormatting(tradeFormData['estimated_profit']) : 0,
                'is_arbitrage': tradeFormData['trade_type'] == 'Buy/Sell' ? 1 : 0,
                'wallet_id': tradeFormData['wallet_id'],
                'request_time': request_time,
                'quote_balance': quote_balance,
                'base_balance': base_balance,
                'token_id': '' + timestamp
            };
            _b = this.getBalance(tradeFormData['market_buy']), quote_balance = _b[0], base_balance = _b[1];
            var ask_data = {
                'min_ask_jpy': this.removeNumberFormatting(tradeFormData['min_ask_jpy']),
                'exchange_rate': tradeFormData['min_ask_rate'],
                'market_buy': tradeFormData['market_buy'],
                'trade_base_amount': this.removeNumberFormatting(tradeFormData['trade_base_ask']),
                'trade_quote_amount': this.removeNumberFormatting(tradeFormData['trade_quote_amount']),
                'spred_percent': tradeFormData['trade_type'] == 'Buy/Sell' ? tradeFormData['spred_percent'] : 0,
                'spred_jpy': tradeFormData['trade_type'] == 'Buy/Sell' ? this.removeNumberFormatting(tradeFormData['spred_jpy']) : 0,
                'spred_quote': tradeFormData['trade_type'] == 'Buy/Sell' ? '' + tradeFormData['spred_quote'] : '0',
                'spred_base': tradeFormData['trade_type'] == 'Buy/Sell' ? '' + tradeFormData['spred_base'] : '0',
                'estimated_profit': tradeFormData['trade_type'] == 'Buy/Sell' ? this.removeNumberFormatting(tradeFormData['estimated_profit']) : 0,
                'is_arbitrage': tradeFormData['trade_type'] == 'Buy/Sell' ? 1 : 0,
                'wallet_id': tradeFormData['wallet_id'],
                'request_time': request_time,
                'quote_balance': quote_balance,
                'base_balance': base_balance,
                'token_id': '' + timestamp
            };
            bid_data = JSON.stringify(bid_data);
            ask_data = JSON.stringify(ask_data);
            this.frontendApi.isTradeBtnClicked = true;
            // let errors = this.getFormErrors(this.bitForm);
            if (true) {
                if (trade_type == 'Buy/Sell') {
                    me_1.addDraftTradeLogRecord('Sell', me_1.bitForm.value.market_sell, request_time, 1);
                    me_1.addDraftTradeLogRecord('Buy', me_1.bitForm.value.market_buy, request_time, 1);
                    data['bid_data'] = bid_data;
                    data['ask_data'] = ask_data;
                }
                else if (trade_type == 'Sell') {
                    me_1.addDraftTradeLogRecord('Sell', me_1.bitForm.value.market_sell, request_time, 0);
                    data['bid_data'] = bid_data;
                }
                else {
                    me_1.addDraftTradeLogRecord('Buy', me_1.bitForm.value.market_buy, request_time, 0);
                    data['ask_data'] = ask_data;
                }
                // this.hasError = false;
                /*FOR Save Exchange Rate History To Database */
                var params = {
                    tradeData: data,
                    exchangeRateData: me_1.socketService.clientWalletSelModel.items,
                    jpyRate: me_1.socketService.clientWalletSelModel.quote_jpy_rate
                };
                me_1.socketService.saveTradeLog(params);
                me_1.frontendApi.saveTradeLog(data).subscribe(function (res) {
                    var marketBuy = me_1.bitForm.value.market_buy, marketSell = me_1.bitForm.value.market_sell;
                    if (res['success'] == true) {
                        _this.tradeCounter = res['trade_count'];
                        Orbit['CURRENT_USER']['trade_counter'] = res['trade_count'];
                        _this.changeTradeCounterErrMsg();
                        for (var i = 0; i < me_1.socketService.clientWalletSelModel.items.length; i++) {
                            var clientMarketWalletRec = me_1.socketService.clientWalletSelModel.items[i];
                            if (clientMarketWalletRec['enable_trade'] == 1) {
                                var exchangeId = clientMarketWalletRec['code'];
                                me_1.socketService.getMarketBalance(exchangeId);
                            }
                        }
                        _this.playSuccessAudio();
                        alertify.success(res['message']);
                    }
                    else {
                        _this.playErrorAudio();
                        alertify.error(res['message']);
                    }
                    me_1.frontendApi.isTradeBtnClicked = false;
                    me_1.modal.hide();
                    me_1.getTradeLogList();
                });
                // // alertify.confirm(message, function(e) {
                //   // if(e) {
                //     if(trade_type == 'Buy/Sell'){
                //       me.addDraftTradeLogRecord('Buy', me.bitForm.value.market_buy, request_time);
                //       me.addDraftTradeLogRecord('Sell', me.bitForm.value.market_sell, request_time);
                //     }else if(trade_type == 'Sell'){
                //       me.addDraftTradeLogRecord('Sell', me.bitForm.value.market_sell, request_time);
                //     }else{
                //       me.addDraftTradeLogRecord('Buy', me.bitForm.value.market_buy, request_time);
                //     }
                /*FOR Save Exchange Rate History To Database */
                // let params = {
                //   tradeData : data,
                //   exchangeRateData : me.socketService.clientWalletSelModel.items,
                //   jpyRate : me.socketService.clientWalletSelModel.jpyRate
                // };
                // me.socketService.saveTradeLog(params);
                // }else{
                //   // debugger;
                // }
                // })
            }
        }
        var _b;
    };
    HomeComponent.prototype.getDateTime = function () {
        var currentDate = new Date(), year = currentDate.getFullYear(), month = '' + (currentDate.getMonth() + 1), day = '' + currentDate.getUTCDate(), hour = '' + currentDate.getHours(), min = '' + currentDate.getMinutes(), sec = '' + currentDate.getSeconds();
        month = month.length < 2 ? ('0' + month) : month;
        day = day.length < 2 ? ('0' + day) : day;
        min = min.length < 2 ? ('0' + min) : min;
        var date = [year, month, day].join('-') + ' ' + [hour, min, sec].join(':');
        return date;
    };
    HomeComponent.prototype.getDateTimestamp = function () {
        var currentDate = new Date(), year = currentDate.getFullYear(), month = '' + (currentDate.getMonth() + 1), day = '' + currentDate.getUTCDate(), hour = '' + currentDate.getHours(), min = '' + currentDate.getMinutes(), sec = '' + currentDate.getSeconds();
        month = month.length < 2 ? ('0' + month) : month;
        day = day.length < 2 ? ('0' + day) : day;
        min = min.length < 2 ? ('0' + min) : min;
        var date = [year, month, day].join('-') + ' ' + [hour, min, sec].join(':');
        return date;
    };
    HomeComponent.prototype.addDraftTradeLogRecord = function (trade_type, market, request_time, isArbritage) {
        var trade_amount, profit = this.bitForm.value.spred_percent;
        if (trade_type == 'Buy' || trade_type == 'Sell') {
            trade_amount = this.bitForm.value.trade_base_ask;
            if (trade_type == 'Sell') {
                trade_amount = this.bitForm.value.trade_base_bid;
            }
            trade_amount = parseFloat(trade_amount).toFixed(7);
        }
        var obj = {
            image: 'markets/' + market + '.png',
            name: 'ETH/BTC',
            //trade_status  : response_data.trade_status,
            trade_status: 'On Process',
            request_time: request_time,
            response_time: '',
            trade_type: trade_type,
            trade_base_amount: trade_amount,
            spred_percent: profit,
            border_cls: isArbritage == 1 ? 'odd-cls' : '',
            rowspan: (isArbritage == 1 && trade_type == 'Buy') ? 1 : 0,
            is_arbitrage: isArbritage
        };
        if (this.frontendApi.homeTradeLogData.length == 10) {
            if (this.bitForm.value.trade_type == 'Buy/Sell') {
                this.frontendApi.homeTradeLogData.splice(8, 2);
            }
            else if (trade_type == 'Buy' || trade_type == 'Sell') {
                this.frontendApi.homeTradeLogData.splice(9, 1);
            }
        }
        this.frontendApi.homeTradeLogData.unshift(obj);
    };
    /**
     * @author ROHAN :: 2018-05-30
     * Fetch all form errors
     * @param {FormGroup} formGroup [Staff Detail Form]
     * @returns {[Object]} errors
     */
    HomeComponent.prototype.getFormErrors = function (formGroup) {
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
    HomeComponent.prototype.removeNumberFormatting = function (value) {
        return value.replace(',', '');
    };
    HomeComponent.prototype.minSpredClick = function (modal) {
        var modalCls = { ariaLabelledBy: 'modal-basic-title' };
        this.minSpredModal = modal.show();
        this.minSpredForm.controls.minSpredPercentage.setValue(this.frontendApi.min_spred_percent);
    };
    HomeComponent.prototype.minSpredUpdate = function (minSpredModal, saveType) {
        var me = this;
        //minSpred ? Number(minSpred.value) : null;
        var msg = "";
        var isFormValid = true;
        var val = null;
        if (saveType === 'save') {
            msg = 'Are you sure you want to update Minimum Spread Percentage?';
            isFormValid = this.minSpredForm.valid;
            val = this.minSpredForm.controls.minSpredPercentage.value;
        }
        else if (saveType === "reset") {
            msg = 'Are you sure you want to reset Minimum Spread Percentage?';
        }
        if (isFormValid) {
            alertify.confirm(msg, function () {
                me.saveMinSpredPercent(minSpredModal, val);
                return;
            });
        }
    };
    HomeComponent.prototype.saveMinSpredPercent = function (minSpredModal, val) {
        var me = this;
        me.frontendApi.saveMinSpredPercent(val).subscribe(function (response) {
            if (response['success']) {
                me.minSpredPercent = val;
                me.frontendApi.min_spred_percent = val;
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
            minSpredModal.hide();
        });
    };
    HomeComponent.prototype.resetValue = function () {
        this.minSpredForm.controls.minSpredPercentage.setValue(this.frontendApi.min_spred_percent);
    };
    HomeComponent.prototype.onReconnectSocket = function () {
        this.socketService.socket.io.disconnect();
        this.socketService.reconnectionErrorMsg = '';
        this.socketService.isReconnectionError = false;
        this.socketService.connect(this.bitForm);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_frontend_service__WEBPACK_IMPORTED_MODULE_3__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_4__["SocketIoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/ticker-datagrid/ticker-datagrid.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/home/ticker-datagrid/ticker-datagrid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CLIENT MARKET WALLET TABLE WITH TICKER  -->\r\n<div class=\"market-view\">\r\n    <div class=\"bid-rate-refresh-progress pull-right\">\r\n      <span>Next Reload : [{{ timer.countDown | number: '2.0-0' }}] </span>&nbsp; |\r\n      <span>Last Fetched On : [{{timer.nowTime | date:'yyyy-MM-dd hh:mm:ss'}}]</span>&nbsp; |\r\n      <span>1 {{socketService.activeWalletSelModel.base}} = {{socketService.clientWalletSelModel.base_jpy_rate | number : '1.3-3' }} JPY</span>&nbsp; |\r\n      <span>1 {{socketService.activeWalletSelModel.quote}} = {{socketService.clientWalletSelModel.quote_jpy_rate | number : '1.3-3' }} JPY</span>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\" id=\"main-table\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 80px;\"><label class=\"on-off head\">On/Off</label></th>\r\n            <!-- <th style=\"width: 20px;\"><input type=\"checkbox\" class=\"select-all\"><label class=\"select-area head\"></label></th> -->\r\n            <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n            <th style=\"width: 40px;\"><label class=\"country-flag head\"></label></th>\r\n            <th style=\"width: 110px;\"><label class=\"quote-balance head\">{{socketService.activeWalletSelModel.quote}} Balance</label></th>\r\n            <th style=\"width: 110px;\"><label class=\"base-balance head\">{{socketService.activeWalletSelModel.base}} Balance</label></th>\r\n            <th style=\"width: 110px;\"><label class=\"bid-notifier head\">Bid</label></th>\r\n            <th style=\"width: 110px;\"><label class=\"ask-notifier head\">Ask</label></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngIf=\"socketService.clientWalletSelModel.items.length > 0; else emptyClientMarketRecord \">\r\n            <tr *ngFor=\"let item of socketService.clientWalletSelModel.items; let rowIdx = index\">\r\n              <td>\r\n                <a class=\"draggable-col\" href=\"javascript:void(0);\"></a>\r\n                <div class=\"switch select-area\">\r\n                  <ng-container *ngIf=\"item.enable_trade == 1; else offExchangeMarket\">\r\n                    <input id=\"{{item.code}}\" type=\"checkbox\" (change)=\"onOffStatusChange($event,rowIdx,item.code,item.id)\" checked>\r\n                  </ng-container>\r\n                  <ng-template #offExchangeMarket>\r\n                    <input id=\"{{item.code}}\" type=\"checkbox\" (change)=\"onOffStatusChange($event,rowIdx,item.code,item.id)\">\r\n\r\n                  </ng-template>\r\n                  <span class=\"slider\"></span>\r\n                </div>\r\n              </td>\r\n              <!-- <td><span class=\"select-area\"><input type=\"checkbox\"></span></td> -->\r\n              <td>\r\n                <span class=\"crypt-market-img\">\r\n                  <a _ngcontent-c3=\"\" href=\"{{item.dashboard_url}}\" target=\"_blank\">\r\n                    <img src=\"{{frontendApi.BASE_URL}}images/{{item.image}}\" alt=\"{{item.code}}\">\r\n                  </a>\r\n                </span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span class=\"country-flag\">\r\n                  <img src=\"{{frontendApi.BASE_URL}}images/flags/{{item.country}}.png\" alt=\"{{item.country}}\">\r\n                </span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span id=\"{{item.code}}-quote-balance\" class=\"quote-balance\">{{item.quote_balance | bitNumber:'1.8-8':'-'}}</span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span id=\"{{item.code}}-base-balance\" class=\"base-balance\">{{item.base_balance | bitNumber:'1.8-8':'-'}}</span>\r\n              </td>\r\n              <td>\r\n                <p class=\"mb-0\" [ngClass]=\"{'tooltip':item.has_error == 1}\">\r\n                  <span id=\"{{item.code}}-bid\" class=\"bid-notifier text-center mb-0 {{item.bid_status}}\"\r\n                    [ngClass]=\"{'no-value':item.bid==null || item.bid.length==0,'max-bid':item.code == socketService.clientWalletSelModel.max_bid_market}\">{{item.bid | bitNumber : '1.8-8' : 'OFF' : item.has_error : 'NG'}}&nbsp;<i *ngIf=\"item.has_error == 1\" class=\"fa fa-exclamation-triangle error-ng\"></i>\r\n                  </span>\r\n                  <span *ngIf=\"item.has_error == 1\" class=\"tooltiptext\">{{item.error_msg}}</span>\r\n                </p>\r\n              </td>\r\n              <td>\r\n                <p class=\"mb-0\" [ngClass]=\"{'tooltip':item.has_error == 1}\">\r\n                  <span id=\"{{item.code}}-ask\" class=\"ask-notifier text-center mb-0 {{item.ask_status}}\"\r\n                  [ngClass]=\"{'no-value':item.ask == null || item.ask.length==0,'min-ask':item.code == socketService.clientWalletSelModel.min_ask_market}\">\r\n                  {{item.ask | bitNumber : '1.8-8' : 'OFF' : item.has_error : 'NG' }}&nbsp;<i *ngIf=\"item.has_error == 1\" class=\"fa fa-exclamation-triangle error-ng\"></i>\r\n                </span>\r\n                <span *ngIf=\"item.has_error == 1\" class=\"tooltiptext\">{{item.error_msg}}</span>\r\n              </p>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n          <ng-template #emptyClientMarketRecord>\r\n            <tr>\r\n              <td>\r\n                <a class=\"draggable-col\" href=\"javascript:void(0);\"></a>\r\n                <div class=\"switch select-area\">\r\n                  <input id=\"\" type=\"checkbox\">\r\n                  <span class=\"slider\"></span>\r\n                </div>\r\n              </td>\r\n              <!-- <td><span class=\"select-area\"><input type=\"checkbox\"></span></td> -->\r\n              <td>\r\n                <span class=\"crypt-market-img\">\r\n                  <a _ngcontent-c3=\"\" href=\"\">\r\n                  </a>\r\n                </span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span class=\"country-flag\">\r\n                </span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span id=\"btc-balance\" class=\"bit-balance\">-</span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span id=\"jpy-balance\" class=\"cash-balance\">-</span>\r\n              </td>\r\n              <td>\r\n                <span id=\"bid\" class=\"bid-notifier text-center mb-0 no-value\">OFF</span>\r\n              </td>\r\n              <td>\r\n                <span id=\"ask\" class=\"ask-notifier text-center mb-0 no-value\">OFF</span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"3\"><span>Your Total Balance</span></td>\r\n            <td class=\"text-center\"><span id=\"btc-balance-total\">{{socketService.clientWalletSelModel.quote_balance_total | number : '1.8-8' }}</span></td>\r\n            <td class=\"text-center\"><span id=\"cash-balance-total\">{{socketService.clientWalletSelModel.base_balance_total | number : '1.8-8' }}</span></td>\r\n            <td colspan=\"2\" class=\"text-center\"></td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/ticker-datagrid/ticker-datagrid.component.ts ***!
  \******************************************************************************/
/*! exports provided: TickerDatagridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerDatagridComponent", function() { return TickerDatagridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/socket-io.service */ "./src/app/services/socket-io.service.ts");
/* harmony import */ var table_dragger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! table-dragger */ "./node_modules/table-dragger/dist/table-dragger.js");
/* harmony import */ var table_dragger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(table_dragger__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TickerDatagridComponent = /** @class */ (function () {
    function TickerDatagridComponent(frontendApi, socketService) {
        var _this = this;
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this.timer = {
            nowTime: new Date(),
            countDown: 0,
            resetCountDown: 60
        };
        this._subscription = this.socketService.walletChange.subscribe(function (value) {
            _this.socketService.resetBitForm(_this.bitForm);
            _this.getClientMarketWalletList();
        });
    }
    TickerDatagridComponent.prototype.ngOnInit = function () {
        this.getClientMarketWalletList();
    };
    /**
     * Fetch Client Market Wallet List
     */
    TickerDatagridComponent.prototype.getClientMarketWalletList = function () {
        var me = this;
        var params = { symbol: me.socketService.activeWalletSelModel['symbol'] };
        me.frontendApi.clientMarketWalletList(params).subscribe(function (res) {
            me.socketService.clientWalletSelModel.items = res['data'];
            me.ccxtApi();
            /* INITIALIZE TABLE DRAGGER AFTER CLIENT MARKET WALLET INFO HAS BEEN UPDATE TO DATAGRID */
            setTimeout(function () {
                var el = document.getElementById('main-table');
                if (el && me.socketService.clientWalletSelModel.items.length > 0) {
                    var dragger = table_dragger__WEBPACK_IMPORTED_MODULE_3___default()(el, {
                        mode: 'row',
                        dragHandler: '.draggable-col',
                        onlyBody: true,
                        animation: 300
                    });
                    dragger.on('drop', function (from, to) {
                        me.setDisplayOrer(from, to);
                    });
                }
            }, 1000);
        });
    };
    TickerDatagridComponent.prototype.ccxtApi = function () {
        var me = this;
        /* CONNECT TO SOCKET SERVER */
        me.socketService.connect(me.bitForm);
        me.getJpyRate();
        /* COUNTDOWN TIMER TO RE-FETCH JPY RATE */
        me.socketService.refetchJpyRateTimer = setInterval(function () {
            me.timer.countDown += 1;
            if (me.timer.countDown > me.timer.resetCountDown - 1) {
                me.timer.nowTime = new Date();
                me.timer.countDown = 0;
                me.getJpyRate();
            }
        }, 1000);
    };
    /**
     * @author ROHAN
     * Update display order on table row drag.
     * Also, save updated display order to DB.
     * @param from [The position from which to table row is dragged.]
     * @param to [The position to which to table row is dropped.]
     */
    TickerDatagridComponent.prototype.setDisplayOrer = function (from, to) {
        var new_from = from - 1;
        var new_to = to - 1;
        var displayOrderObj = [];
        var newClientMarketWallet = [];
        /* MANAGE NEW DISPLAY ORDER */
        for (var i = 0; i < this.socketService.clientWalletSelModel.items.length; i++) {
            var item = this.socketService.clientWalletSelModel.items[i];
            /* DRAG-N-DROP FROM TOP TO BOTTOM */
            if (from < to) {
                if (i === new_from) {
                    displayOrderObj.push({ id: item['id'], display_order: to });
                    newClientMarketWallet[new_to] = item;
                }
                else if (i < new_from) {
                    newClientMarketWallet[i] = item;
                    // do nothing.
                }
                else if (i > new_from && i <= new_to) {
                    displayOrderObj.push({ id: item['id'], display_order: i });
                    newClientMarketWallet[(i - 1)] = item;
                }
                else if (i > new_to) {
                    // do nothing.
                    newClientMarketWallet[i] = item;
                }
            }
            else {
                if (i === new_from) {
                    displayOrderObj.push({ id: item['id'], display_order: to });
                    newClientMarketWallet[new_to] = item;
                }
                else if (i < new_to) {
                    // do nothing.
                    newClientMarketWallet[i] = item;
                }
                else if (i === new_to) {
                    displayOrderObj.push({ id: item['id'], display_order: (i + 2) });
                    newClientMarketWallet[(i + 1)] = item;
                }
                else if (i >= new_to && i < new_from) {
                    displayOrderObj.push({ id: item['id'], display_order: (i + 2) });
                    newClientMarketWallet[(i + 1)] = item;
                }
                else if (i > new_from) {
                    // do nothing.
                    newClientMarketWallet[i] = item;
                }
            }
        }
        /* SET UPDATED DISPLAY ORDER CLIENT WALLET ITEM TO CLIENT WALLET SELECTION MODEL */
        this.socketService.clientWalletSelModel.items = newClientMarketWallet;
        /* SAVE UPDATED DISPLAY ORDER ITEMS TO DATABASE */
        this.frontendApi.setDisplayOrder(displayOrderObj).subscribe(function (res) {
            if (res['success']) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
            }
        });
    };
    TickerDatagridComponent.prototype.getJpyRate = function () {
        var me = this;
        var symbolsArr = [this.socketService.activeWalletSelModel.base, this.socketService.activeWalletSelModel.quote];
        var params = { fsyms: symbolsArr.join(','), tsyms: 'JPY' };
        this.frontendApi.getJpyRate(params).subscribe(function (response) {
            var base = me.socketService.activeWalletSelModel.base, quote = me.socketService.activeWalletSelModel.quote;
            me.socketService.clientWalletSelModel.base_jpy_rate = response[base] && response[base]['JPY'] ? response[base]['JPY'] : 0;
            me.socketService.clientWalletSelModel.quote_jpy_rate = response[quote] && response[quote]['JPY'] ? response[quote]['JPY'] : 0;
            for (var i = 0; i < me.socketService.clientWalletSelModel.items.length; i++) {
                var data = me.socketService.clientWalletSelModel.items[i];
                if (data['enable_trade'] == 1) {
                    var exchangeId = data['code'];
                    me.socketService.getMarketBalance(exchangeId);
                }
            }
        });
    };
    /**
     * Enable/Disable ticker fetch checkbox toggle event.
     * @param event [Change Event]
     * @param rowIdx [Row Index]
     * @param exchangeId [Market Code]
     * @param recId [Market ID]
     */
    TickerDatagridComponent.prototype.onOffStatusChange = function (event, rowIdx, exchangeId, recId) {
        var controllerName = 'client-market-wallet';
        this.frontendApi.toggleStatus(recId, controllerName).subscribe();
        this.socketService.clientWalletSelModel.bidRateArr = {};
        this.socketService.clientWalletSelModel.askRateArr = {};
        var room = exchangeId + '_' + this.socketService.activeWalletSelModel.symbol;
        /* IF ENABLE TICKER STATUS = ON */
        if (event.target.checked) {
            for (var i = 0; i < this.socketService.clientWalletSelModel.items.length; i++) {
                if (this.socketService.clientWalletSelModel.items[i].code === exchangeId) {
                    this.socketService.clientWalletSelModel.items[i]['enable_trade'] = 1;
                    break;
                }
            }
            /* JOIN ROOM */
            this.socketService.joinRoom(room);
            // this.startTicker(this, exchangeId,true);
            /* FETCH MARKET BALANCE */
            this.socketService.getMarketBalance(exchangeId);
        }
        else {
            var idx = -1;
            var valid_market_count = 0;
            // this.exchangeList[exchangeId]['enable_trade'] = 0;
            for (var i = 0; i < this.socketService.clientWalletSelModel.items.length; i++) {
                var item = this.socketService.clientWalletSelModel.items[i];
                if (item.code === exchangeId) {
                    idx = i;
                    this.socketService.clientWalletSelModel.items[i]['enable_trade'] = 0;
                    // break;
                }
                if (item['enable_trade'] == 1 && item['has_error'] == 0) {
                    valid_market_count++;
                }
            }
            /* RESET BIT FORM IF ALL MARKET ARE SET TO OFF OR HAVE ERROR WHILE FETCHING TICKER INFO */
            if (valid_market_count == 0) {
                this.socketService.resetBitForm(this.bitForm);
            }
            /* LEAVE ROOM */
            this.socketService.leaveRoom(room);
            //for set value and update its classes
            var obj = {
                bid: null,
                ask: null,
                bid_status: null,
                ask_status: null,
                quote_balance: null,
                // jpy_balance : null,
                base_balance: null,
                error_msg: '',
                has_error: 0,
            };
            if (this.socketService.clientWalletSelModel.items[idx]['code'] === this.socketService.clientWalletSelModel.max_bid_market) {
                this.socketService.clientWalletSelModel.max_bid_market = null;
            }
            if (this.socketService.clientWalletSelModel.items[idx]['code'] === this.socketService.clientWalletSelModel.min_ask_market) {
                this.socketService.clientWalletSelModel.min_ask_market = null;
            }
            this.socketService.clientWalletSelModel.items[idx] = Object.assign(this.socketService.clientWalletSelModel.items[idx], obj);
            delete this.socketService.clientWalletSelModel.base_balance_arr[exchangeId];
            delete this.socketService.clientWalletSelModel.quote_balance_arr[exchangeId];
            // delete this.socketService.clientWalletSelModel.cash_balance_arr[exchangeId];
            this.socketService.calculateTotal();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TickerDatagridComponent.prototype, "bitForm", void 0);
    TickerDatagridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticker-datagrid',
            template: __webpack_require__(/*! ./ticker-datagrid.component.html */ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.html"),
            styles: [__webpack_require__(/*! ./ticker-datagrid.component.css */ "./src/app/components/home/ticker-datagrid/ticker-datagrid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], TickerDatagridComponent);
    return TickerDatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i { cursor: pointer; }"

/***/ }),

/***/ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"market-view trade-history secondary-tble\">\r\n  <h2 class=\"block-title\">\r\n    <span>\r\n      Trade History\r\n      <a  title=\"Open Trade Log Panel\">\r\n        <i (click)=\"openTradeLog()\" class=\"fa fa-external-link\"></i>\r\n      </a>\r\n    </span>\r\n  </h2>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\" id='log-table'>\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Market</label></th>\r\n          <!-- <th style=\"width: 80px;\"><label class=\"crypt-market-img head\">Wallet </label></th> -->\r\n          <th style=\"width: 70px;\"><label class=\"country-flag head\">Status</label></th>\r\n          <!-- <th style=\"width: 110px;\"><label class=\"bid-notifier head\">Trade Date Time</label></th> -->\r\n          <th style=\"width: 140px;\"><label class=\"bid-notifier head\">Request Time</label></th>\r\n          <th style=\"width: 140px;\"><label class=\"bid-notifier head\">Response Time</label></th>\r\n          <th style=\"width: 60px;\"><label class=\"bit-balance head\">Type</label></th>\r\n          <th style=\"width: 70px;\"><label class=\"cash-balance head\">Amount</label></th>\r\n          <th style=\"width: 70px;\"><label class=\"cash-balance head\">Profit (%)</label></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngIf=\"frontendApi.homeTradeLogData?.length > 0; else emptyTradeLogRecord \">\r\n          <tr class=\"{{item.border_cls}}\" *ngFor=\"let item of frontendApi.homeTradeLogData\" style=\"text-align: center\">\r\n            <td>\r\n              <span class=\"crypt-market-img\">\r\n                <img src=\"{{frontendApi.BASE_URL}}images/{{item.image}}\" alt=\"{{item.market_name_en}}\">\r\n              </span>\r\n            </td>\r\n            <!-- <td>{{item.name}}</td> -->\r\n            <td>{{item.trade_status}}</td>\r\n            <td>{{item.request_time}}</td>\r\n            <td>{{item.response_time}}</td>\r\n            <td>{{item.trade_type}}</td>\r\n            <td>{{item.trade_base_amount}}</td>\r\n            <td rowspan=\"2\" *ngIf=\"item.rowspan == '1' && item.is_arbitrage == '1'\">{{ item.spred_percent }}</td>\r\n                  <td *ngIf=\"item.is_arbitrage == '0'\"></td>\r\n          </tr>\r\n        </ng-container>\r\n        <ng-template #emptyTradeLogRecord>\r\n          <tr style=\"text-align: center\">\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n            <td> &nbsp; </td>\r\n          </tr>\r\n          <tr style=\"text-align: center\">\r\n            <td colspan=\"7\">No Trade History Records Found</td>\r\n          </tr>\r\n        </ng-template>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.ts ***!
  \************************************************************************************/
/*! exports provided: TradeLogDatagridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeLogDatagridComponent", function() { return TradeLogDatagridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/socket-io.service */ "./src/app/services/socket-io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeLogDatagridComponent = /** @class */ (function () {
    function TradeLogDatagridComponent(frontendApi, socketService) {
        var _this = this;
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this._subscription = this.socketService.walletChange.subscribe(function (value) {
            var params = { wallet_id: _this.socketService.activeWalletSelModel['id'] };
            _this.frontendApi.getTradeLog(params).subscribe(function (res) {
                _this.frontendApi.homeTradeLogData = res['data'];
            });
        });
    }
    TradeLogDatagridComponent.prototype.ngOnInit = function () {
    };
    TradeLogDatagridComponent.prototype.openTradeLog = function () {
        window.open(window['BASE_URL'] + '#tradeLog', 'tradeLogPopUp', 'toolbar=yes,scrollbars=yes');
    };
    TradeLogDatagridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade-log-datagrid',
            template: __webpack_require__(/*! ./trade-log-datagrid.component.html */ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.html"),
            styles: [__webpack_require__(/*! ./trade-log-datagrid.component.css */ "./src/app/components/home/trade-log-datagrid/trade-log-datagrid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"]])
    ], TradeLogDatagridComponent);
    return TradeLogDatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/min-spred-modal/min-spred-modal.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/min-spred-modal/min-spred-modal.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/min-spred-modal/min-spred-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/min-spred-modal/min-spred-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<label>Do you want to change Minimum Spred Percentage ?</label>\r\n\t<input #minSpred type=\"number\" placeholder=\"Minimum Spred Percentage\" value=\"{{frontendApi.min_spred_percent}}\"><br><br><br><br>\r\n\t<button type=\"button\" class=\"btn btn-outline-dark\" style=\"float: right;\" (click)=\"minSpredCancel(minSpred)\">CANCEL</button>\r\n\t<button type=\"button\" class=\"btn btn-outline-dark\" style=\"float: right;\" (click)=\"minSpredReset()\">RESET</button>\r\n\t<button type=\"button\" class=\"btn btn-outline-dark\" style=\"float: right;\" (click)=\"minSpredSave(minSpred)\">SAVE</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/min-spred-modal/min-spred-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/min-spred-modal/min-spred-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: MinSpredModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinSpredModalComponent", function() { return MinSpredModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinSpredModalComponent = /** @class */ (function () {
    function MinSpredModalComponent(frontendApi) {
        this.frontendApi = frontendApi;
    }
    MinSpredModalComponent.prototype.ngOnInit = function () {
    };
    MinSpredModalComponent.prototype.minSpredSave = function (minSpred) {
        var me = this;
        me.minSpredPercentage = Number(minSpred.value);
        me.frontendApi.saveMinSpredPercent(me.minSpredPercentage).subscribe(function (response) {
            if (response['success']) {
                alertify.success(response['message']);
            }
            else {
                alertify.error(response['message']);
            }
            me.modal.hide();
        });
    };
    MinSpredModalComponent.prototype.minSpredReset = function () {
        var me = this;
        alertify.confirm('Do you want to Reset Minimum Spred Percentage ?', function () {
            // me.minSpredPercentage=null;
            me.frontendApi.saveMinSpredPercent(null).subscribe(function (response) {
                if (response['success']) {
                    alertify.success(response['message']);
                }
                else {
                    alertify.error(response['message']);
                }
                me.modal.hide();
            });
        });
    };
    MinSpredModalComponent.prototype.minSpredCancel = function (minSpred) {
        this.modal.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MinSpredModalComponent.prototype, "modal", void 0);
    MinSpredModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-min-spred-modal',
            template: __webpack_require__(/*! ./min-spred-modal.component.html */ "./src/app/components/min-spred-modal/min-spred-modal.component.html"),
            styles: [__webpack_require__(/*! ./min-spred-modal.component.css */ "./src/app/components/min-spred-modal/min-spred-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]])
    ], MinSpredModalComponent);
    return MinSpredModalComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-modal/modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/ng-modal/modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-modal-overlay,\r\n.ui-modal {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n.ui-modal-overlay {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.ui-modal {\r\n\tmax-width: 100%;\r\n\toutline: none;\r\n\tbackground-color: #fefefe;\r\n\tpadding: 0;\r\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.ui-modal-header {\r\n\tposition: relative;\r\n\tpadding: 8px 16px;\r\n\tbackground-color: #5b9bd5;\r\n\tcolor: white;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: nowrap;\r\n\talign-items: center;\r\n}\r\n.ui-modal-body {\r\n\tposition: relative;\r\n\tpadding: 10px 16px;\r\n\tmax-height: calc(100vh - 200px);\r\n\toverflow-y: auto;\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n.ui-modal-footer {\r\n\tpadding: 15px;\r\n}\r\n.ui-titlebar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-grow: 1;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n}\r\n.ui-modal-title {\r\n\tfont-size: 20px;\r\n}\r\n.ui-controlbar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.ui-icon {\r\n\tcursor: pointer;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: transparent;\r\n\tmargin-left: 5px;\r\n}\r\n.ui-icon:hover {\r\n\topacity: 0.75;\r\n}\r\n.dragging {\r\n\tcursor: move;\r\n\tborder-color: #66afe9;\r\n\toutline: 0;\r\n\tbox-shadow: 0 4px 8px rgba(102,175,233,.6), 0 6px 20px rgba(0,0,0,.2);\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t -ms-user-select: none;\r\n\t     user-select: none;\r\n}\r\n.resizing {\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t -ms-user-select: none;\r\n\t     user-select: none;\r\n}\r\n.ui-resizable-se {\r\n\tposition:absolute;\r\n\tcursor: se-resize;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n.ui-resizable-e {\r\n\tposition:absolute;\r\n\tcursor: e-resize;\r\n\theight: 100%;\r\n\twidth: 7px;\r\n\tright: -5px;\r\n\ttop: 0;\r\n}\r\n.ui-resizable-s {\r\n\tposition:absolute;\r\n\tcursor: s-resize;\r\n\theight: 7px;\r\n\twidth: 100%;\r\n\tbottom: -5px;\r\n\tleft: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/ng-modal/modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/ng-modal/modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-modal-overlay\"\r\n     [style.zIndex]=\"zIndex\"\r\n     [ngStyle]=\"{'display': (visible && backdrop) ? 'block' : 'none'}\">\r\n</div>\r\n\r\n<div class=\"ui-modal\" tabindex=\"-1\" role=\"dialog\"\r\n     #modalRoot\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none'}\"\r\n     [style.width.px]=\"width\"\r\n     [style.minWidth.px]=\"minWidth\"\r\n     [style.zIndex]=\"contentzIndex\"\r\n     (mousedown)=\"moveOnTop()\"\r\n     (touchstart)=\"moveOnTop()\">\r\n    <div class=\"ui-modal-header\" #modalHeader\r\n         (mousedown)=\"initDrag($event.pageX, $event.pageY)\"\r\n         (touchstart)=\"initDrag($event.touches[0].pageX, $event.touches[0].pageY)\">\r\n      <div class=\"ui-titlebar\">\r\n          <span class=\"ui-modal-title\" *ngIf=\"modalTitle\">{{modalTitle}}</span>\r\n          <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"ui-controlbar\">\r\n          <span *ngIf=\"maximizable\" (click)=\"toggleMaximize($event)\">\r\n              <svg *ngIf=\"!maximized\" class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n                <path fill=\"currentColor\" d=\"M27.55 3.9h-22.6c-0.55 0-1 0.45-1 1v22.3c0 0.55 0.45 1 1 1h22.55c0.55 0 1-0.45 1-1v-22.3c0.050-0.55-0.4-1-0.95-1zM5.95 26.15v-18h20.55v18h-20.55z\"></path>\r\n              </svg>\r\n              <svg *ngIf=\"maximized\" class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n                <path fill=\"currentColor\" d=\"M27.9 3.75h-18.8c-0.4 0-0.75 0.35-0.75 0.75v4.3c0 0.1 0 0.2 0.050 0.3h-4.2c-0.55 0-1 0.45-1 1v17.4c0 0.55 0.45 1 1 1h17.65c0.55 0 1-0.45 1-1v-3.7c0.050 0 0.1 0.050 0.2 0.050h4.9c0.4 0 0.75-0.35 0.75-0.75v-18.6c-0.050-0.4-0.4-0.75-0.8-0.75zM5.2 26.5v-12.95c0.050 0 0.1 0 0.15 0h15.4c0.050 0 0.1 0 0.15 0v12.95h-15.7zM27.15 22.35h-4.15c-0.050 0-0.15 0-0.2 0.050v-12.3c0-0.55-0.45-1-1-1h-12c0.050-0.1 0.050-0.2 0.050-0.3v-3.55h17.3v17.1z\"></path>\r\n              </svg>\r\n          </span>\r\n          <span (click)=\"hide()\"\r\n                (mousedown)=\"onCloseIcon($event)\"\r\n                (touchstart)=\"onCloseIcon($event)\">\r\n            <svg class=\"ui-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"32\" viewBox=\"0 0 28 32\">\r\n              <path fill=\"currentColor\" d=\"M17.75 16l9.85-9.85c0.5-0.5 0.5-1.3 0-1.75-0.5-0.5-1.3-0.5-1.75 0l-9.85 9.85-9.85-9.9c-0.5-0.5-1.3-0.5-1.75 0-0.5 0.5-0.5 1.3 0 1.75l9.85 9.9-9.9 9.85c-0.5 0.5-0.5 1.3 0 1.75 0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35l9.85-9.85 9.85 9.85c0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35c0.5-0.5 0.5-1.3 0-1.75l-9.9-9.85z\"></path>\r\n            </svg>\r\n          </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-modal-body\" #modalBody>\r\n      <ng-content select=\".app-modal-body\"></ng-content>\r\n    </div>\r\n    <div class=\"ui-modal-footer\" #modalFooter>\r\n      <ng-content select=\".app-modal-footer\"></ng-content>\r\n    </div>\r\n\r\n  <div class=\"ui-resizable-s\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeS($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeS($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n  <div class=\"ui-resizable-e\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeE($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeE($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n  <div class=\"ui-resizable-se\"\r\n       *ngIf=\"!maximized\"\r\n       [style.zIndex]=\"contentzIndex\"\r\n       (mousedown)=\"initResizeSE($event.pageX, $event.pageY)\"\r\n       (touchstart)=\"initResizeSE($event.touches[0].pageX, $event.touches[0].pageY)\"></div>\r\n</div>\r\n"

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

module.exports = "\t<div class=\"progress-screen\" *ngIf=\"frontendApi.isOrderDetailDataEmpty == true\">\r\n\t\t<p>\r\n\t\t\t<img src=\"{{frontendApi.BASE_URL}}images/processing.gif\" alt=\"\">\r\n\t\t\t<span>Loading Data..</span>\r\n\t\t</p>\r\n\t</div>\r\n\t<ng-container *ngIf=\"frontendApi.isOrderDetailDataEmpty == false\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading row\">\r\n\t\t\t\t<div class=\"col-md-12 mt-0\">\r\n\t\t\t\t\t<h2 class=\"panel-title bg-light px-3 py-2\">\r\n\t\t\t\t\t\tRequest Trade Info\r\n\t\t\t\t\t\t<span class=\"badge float-right\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{'badge-info':frontendApi.orderDetailData.status=='open',\r\n\t\t\t\t\t\t\t\t\t\t'badge-success':frontendApi.orderDetailData.status=='closed',\r\n\t\t\t\t\t\t\t\t\t\t'badge-warning':frontendApi.orderDetailData.status=='cancel'}\">\r\n\t\t\t\t\t\t\t{{frontendApi.orderDetailData.status}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<table align=\"center\" class=\"border mb-4\">\r\n\t\t\t\t\t<colgroup>\r\n\t\t\t\t\t\t<col width=\"40%\">\r\n\t\t\t\t\t\t<col width=\"60%\">\r\n\t\t\t\t\t</colgroup>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Market: </td>\r\n\t\t\t\t\t\t<td><span><img src=\"{{frontendApi.BASE_URL}}images/markets/{{frontendApi.orderDetailData.market_code}}.png\" alt=\"{{frontendApi.orderDetailData.market_code}}\"></span> </td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Order Id: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.order_id}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Exchange Rate: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.exchange_rate }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Estimated Profit: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.estimated_profit }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade {{frontendApi.orderDetailData['request_trade_info'].quoteId}} Amount: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.trade_quote_amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade {{frontendApi.orderDetailData['request_trade_info'].baseId}} Amount: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.trade_base_amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Type: </td>\r\n\t\t\t\t\t\t<td>{{frontendApi.orderDetailData.request_trade_info.trade_type}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-header\">\r\n\t\t\t\t<h2 class=\"panel-title bg-light px-3 py-2\">Response Trade Info</h2>\r\n\t\t\t</div>\r\n\t\t\t<div *ngFor=\"let item of frontendApi.orderDetailData.response_trade_info\" class=\"panel-body\">\r\n\t\t\t\t<table align=\"center\" class=\"border mb-4\">\r\n\t\t\t\t<colgroup>\r\n\t\t\t\t\t<col width=\"40%\">\r\n\t\t\t\t\t<col width=\"60%\">\r\n\t\t\t\t</colgroup>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Trade Id: </td>\r\n\t\t\t\t\t\t<td>{{item.id}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td> Time: </td>\r\n\t\t\t\t\t\t<td>{{item.formatted_timestamp }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Symbol: </td>\r\n\t\t\t\t\t\t<td>{{item.symbol }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Type: </td>\r\n\t\t\t\t\t\t<td>{{item.type}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Side: </td>\r\n\t\t\t\t\t\t<td>{{item.side}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Price ({{frontendApi.orderDetailData['request_trade_info'].quoteId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.price}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Cost: </td>\r\n\t\t\t\t\t\t<td>{{item.cost}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Amount ({{frontendApi.orderDetailData['request_trade_info'].baseId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.amount}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Filled ({{frontendApi.orderDetailData['request_trade_info'].baseId}}): </td>\r\n\t\t\t\t\t\t<td>{{item.filled}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Remaining: </td>\r\n\t\t\t\t\t\t<td>{{item.remaining}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Status: </td>\r\n\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Fee ({{item.fee ? item.fee.currency : ''}}): </td>\r\n\t\t\t\t\t\t<td>{{item.fee ? item.fee.cost : 0}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<!-- <ng-container *ngIf=\"frontendApi.orderDetailData.oldStatus == frontendApi.orderDetailData.status; else disableUpdateBtn\">\r\n\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onFeatchApiResponseClick()\" disabled>Update Status</button>\r\n\t</ng-container>\r\n\t<ng-template #disableUpdateBtn>\r\n\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onFeatchApiResponseClick()\">Update Status</button>\r\n\t</ng-template> -->\r\n    <!-- <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">OK</button> -->\r\n"

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
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/frontend.service */ "./src/app/services/frontend.service.ts");
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
    function OrderDetailModalComponent(frontendApi) {
        this.frontendApi = frontendApi;
    }
    OrderDetailModalComponent.prototype.ngOnInit = function () {
    };
    OrderDetailModalComponent.prototype.onFeatchApiResponseClick = function () {
        var _this = this;
        var me = this, rowIdx = this.frontendApi.orderDetailData.rowIdx;
        var apiResponse = this.frontendApi.orderDetailData;
        var api_response = {
            'trade_status': apiResponse['status'],
        };
        var params = {
            'api_response': JSON.stringify(api_response),
            'trade_history_id': apiResponse['trade_history_id'],
        };
        this.frontendApi.tradeLogData[rowIdx]['trade_status'] = this.frontendApi.orderDetailData['status'];
        this.frontendApi.featchApiResponse(params).subscribe(function (res) {
            if (res['success']) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
            }
            _this.modal.close('Save click');
        });
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
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]])
    ], OrderDetailModalComponent);
    return OrderDetailModalComponent;
}());



/***/ }),

/***/ "./src/app/components/trade-form-data/trade-form-data.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/trade-form-data/trade-form-data.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trade-form-data/trade-form-data.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/trade-form-data/trade-form-data.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<app-loading-mask *ngIf=\"frontendApi.isTradeBtnClicked == true\" [mask_text] =\"frontendApi.mask_text\"></app-loading-mask>\r\n\t<div [ngClass]=\"{'col-md-6': frontendApi.tradeFormData.trade_type == 'Buy/Sell', 'col-md-12' : frontendApi.tradeFormData.trade_type == 'Buy', 'd-none': frontendApi.tradeFormData.trade_type == 'Sell'}\">\r\n\t\t<h3>Buy Info</h3>\r\n\t\t<table align=\"center\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Market: </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.market_buy}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Price (BTC): </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.min_ask_rate}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Trade Amount (ETH): </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.trade_base_ask | bitNumber: '1.8-8'}}</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t</table>\r\n\t</div>\r\n\t<div [ngClass]=\"{'col-md-6': frontendApi.tradeFormData.trade_type == 'Buy/Sell', 'col-md-12' : frontendApi.tradeFormData.trade_type == 'Sell', 'd-none': frontendApi.tradeFormData.trade_type == 'Buy'}\">\r\n\t\t<h3>Sell Info</h3>\r\n\t\t<table align=\"center\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Market: </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.market_sell}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Price (BTC): </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.max_bid_rate}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Trade Amount (ETH): </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.trade_base_bid | bitNumber: '1.8-8'}}</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"col-md-12\">\r\n\t\t<table align=\"center\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Trade Amount (BTC): </td>\r\n\t\t\t\t<td>{{frontendApi.tradeFormData.trade_quote_amount}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<ng-container *ngIf=\"frontendApi.tradeFormData.trade_type == 'Buy/Sell' \">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Spread Amount (BTC): </td>\r\n\t\t\t\t\t<td>{{frontendApi.tradeFormData.spred_jpy }}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Spread Percent: </td>\r\n\t\t\t\t\t<td>{{frontendApi.tradeFormData.spred_percent }}%</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Estimated Profit (JPY): </td>\r\n\t\t\t\t\t<td>{{frontendApi.tradeFormData.estimated_profit}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</ng-container>\r\n\t\t</table>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/trade-form-data/trade-form-data.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/trade-form-data/trade-form-data.component.ts ***!
  \*************************************************************************/
/*! exports provided: TradeFormDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFormDataComponent", function() { return TradeFormDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/frontend.service */ "./src/app/services/frontend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradeFormDataComponent = /** @class */ (function () {
    function TradeFormDataComponent(frontendApi) {
        this.frontendApi = frontendApi;
    }
    TradeFormDataComponent.prototype.ngOnInit = function () {
        var me = this;
        me.frontendApi.mask_text = "Processing Trade..";
    };
    TradeFormDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade-form-data',
            template: __webpack_require__(/*! ./trade-form-data.component.html */ "./src/app/components/trade-form-data/trade-form-data.component.html"),
            styles: [__webpack_require__(/*! ./trade-form-data.component.css */ "./src/app/components/trade-form-data/trade-form-data.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"]])
    ], TradeFormDataComponent);
    return TradeFormDataComponent;
}());



/***/ }),

/***/ "./src/app/components/trade-log/trade-log.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/trade-log/trade-log.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trade-log/trade-log.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/trade-log/trade-log.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fx\">\r\n   <app-loading-mask *ngIf=\"frontendApi.isSyncOrderClicked == true\" [mask_text] =\"frontendApi.mask_text\"></app-loading-mask>\r\n  <div class=\"row select-client-and-date\">\r\n    <div class=\"col-md-12\">\r\n      <label class=\"ele-label\">Date From:</label>\r\n      <input type=\"text\" id=\"dateFrom\" class=\"datepicker\" name=\"trade_date\">\r\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <label class=\"ele-label\">Date To:</label>\r\n      <input type=\"text\" id=\"dateTo\" class=\"datepicker\" name=\"trade_date\">\r\n      <span class=\"btn btn-primary btn-sm pull-right\" (click)=\"onSyncOrderClick()\" ><i class=\"fa fa-refresh\"></i> Sync Order</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"market-view\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\" style=\"text-align: center\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"2\">BUY</th>\r\n            <th colspan=\"2\">SELL</th>\r\n            <th>ESTIMATED PROFIT</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>{{tradeSummary['base']}}</td>\r\n            <td>{{tradeSummary['quote']}}</td>\r\n            <td>{{tradeSummary['base']}}</td>\r\n            <td>{{tradeSummary['quote']}}</td>\r\n            <td>JPY</td>\r\n          </tr>\r\n          <ng-template #summaryAmt>\r\n            <tr>\r\n              <td>{{tradeSummary['buy_base']}}</td>\r\n              <td>{{tradeSummary['buy_quote']}}</td>\r\n              <td>{{tradeSummary['sell_base']}}</td>\r\n              <td>{{tradeSummary['sell_quote']}}</td>\r\n              <td>{{tradeSummary['jpy_amt']}}</td>\r\n            </tr>\r\n          </ng-template>\r\n          <tr *ngIf=\"tradeSummary['message'] == 'Not Listed'; else summaryAmt\">\r\n            <td>0</td>\r\n            <td>0</td>\r\n            <td>0</td>\r\n            <td>0</td>\r\n            <td>0</td>\r\n          </tr>\r\n        </tbody>\r\n        <!-- <tfoot *ngIf=\"tradeSummary['message'] == 'Not Listed';\">\r\n          <td colspan=\"5\">No results</td>\r\n        </tfoot> -->\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"market-view\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\" datatable [dtOptions]=\"dtOptions\" id='log-table'>\r\n        <colgroup>\r\n          <col width=\"60px\">\r\n          <col width=\"90px\">\r\n          <!-- <col width=\"80px\"> -->\r\n          <col width=\"125px\">\r\n          <col width=\"100px\">\r\n          <col width=\"140px\">\r\n          <col width=\"140px\">\r\n          <col width=\"65px\">\r\n          <col width=\"90px\">\r\n          <col width=\"80px\">\r\n          <!-- <col width=\"80px\"> -->\r\n        </colgroup>\r\n        <thead>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"{{list.border_cls}}\" *ngFor=\"let list of frontendApi.tradeLogData; let idx=index\" style=\"text-align: center\">\r\n            <td>\r\n              <i *ngIf=\"list.trade_status == 'open'\" (click)=\"onCancelOrderClick(list, idx)\" class=\"fa fa-remove text-danger\" title=\"Cancel Order\" style=\"cursor: pointer;font-size:18px;\"></i>\r\n            </td>\r\n            <td><span><img src=\"{{frontendApi.BASE_URL}}images/{{list.image}}\" alt=\"{{ list.code}}\"></span> </td>\r\n            <!-- <td>{{ list.name }}</td> -->\r\n            <td><a class=\"order_id\" href=\"javascript:void(0);\" (click)=\"onOrderIdClick(modalRoot, list, idx)\">{{ list.order_id }}</a></td>\r\n            <td>{{ list.trade_status }}</td>\r\n            <td>{{ list.request_time }}</td>\r\n            <td>{{ list.response_time }}</td>\r\n            <td>{{ list.trade_type }}</td>\r\n            <td>{{ list.trade_base_amount }}</td>\r\n            <!-- <td>{{ list.token_id }}</td> -->\r\n            <td rowspan=\"2\" *ngIf=\"list.rowspan == '1' && list.is_arbitrage == '1'\">{{ list.spred_percent }}</td>\r\n            <td *ngIf=\"list.is_arbitrage == '0'\"></td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td></td>\r\n            <td></td>\r\n            <td><input style=\"width: 100%\" type=\"text\" name=\"image\" class=\"filter-input\"></td>\r\n            <td><input style=\"width: 100%\" type=\"text\" name=\"order_id\" class=\"filter-input\"></td>\r\n            <td>\r\n              <select name = \"status\" style=\"width: 100%; height: 100%\" class=\"filter-input trade_status\">\r\n                <option *ngFor = \"let item of trade_status | keyvalue\"  value=\"{{item.key}}\">{{item.value}}</option>\r\n              </select>\r\n            </td>\r\n            <td>\r\n              <input style=\"width: 100%\" type=\"text\" id=\"request_time\" class=\"date-search-input datepicker filter-input\" name=\"trade_date\">\r\n            </td>\r\n            <td>\r\n              <input style=\"width: 100%\" type=\"text\" id=\"response_time\" class=\"date-search-input datepicker filter-input\" name=\"trade_date\">\r\n            </td>\r\n            <td>\r\n              <select name = \"trade_type\" style=\"width: 100%; height: 100%\" class=\"filter-input trade_type\">\r\n                <option *ngFor = \"let item of trade_type | keyvalue\"  value=\"{{item.key}}\">{{item.value}}</option>\r\n              </select>\r\n            </td>\r\n            <td><input style=\"width: 100%\" type=\"text\" name=\"trade_base_amount\" class=\"filter-input\"></td>\r\n            <td><input style=\"width: 100%\" type=\"text\" name=\"spred_percent\" class=\"filter-input\"></td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-modal #modalRoot\r\n               [modalTitle]=\"'Orbit'\"\r\n               [width]=\"500\"\r\n               [maximizable]=\"true\"\r\n               [zIndex]=\"1100\"\r\n               >\r\n      <ng-container class=\"app-modal-body\">\r\n        <app-order-detail-modal [modal] = \"modal\"></app-order-detail-modal>\r\n      </ng-container>\r\n      <ng-container class=\"app-modal-footer\">\r\n        <div class=\"float-right\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modalRoot.hide()\">OK</button>\r\n        </div>\r\n      </ng-container>\r\n</app-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/trade-log/trade-log.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/trade-log/trade-log.component.ts ***!
  \*************************************************************/
/*! exports provided: TradeLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeLogComponent", function() { return TradeLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/constant */ "./src/app/config/constant.ts");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/socket-io.service */ "./src/app/services/socket-io.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TradeLogComponent = /** @class */ (function () {
    function TradeLogComponent(router, route, frontendApi, socketService) {
        this.router = router;
        this.route = route;
        this.frontendApi = frontendApi;
        this.socketService = socketService;
        this.tradeSummary = [];
        this.changeDateStatus = '';
        this.sColumn = null;
        this.search = {};
        this.trade_status = Orbit['TRADE_STATUS'];
        this.trade_type = Orbit['TRADE_TYPE'];
        this.dtParams = null;
        this._dt = new Date();
        this.dtOptions = {};
        this.cols = [
            { title: 'ID', data: 'id', visible: false },
            { title: 'Action', data: 'server_response', sortable: false },
            { title: 'Market', data: 'image' },
            // { title : 'Wallet', data: 'name' }, 
            { title: 'Order ID', data: 'order_id' },
            { title: 'Status', data: 'trade_status' },
            { title: 'Request Time', data: 'request_time' },
            { title: 'Response Time', data: 'response_time' },
            { title: 'Type', data: 'trade_type' },
            { title: 'Amount', data: 'trade_base_amount' },
            // { title : 'Token', data: 'token_id' },
            { title: 'Profit (%)', data: 'spred_percent' }
        ];
        var me = this;
        this._subscription = this.socketService.walletChange.subscribe(function (value) {
            me.onDateFilter();
        });
    }
    TradeLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        // this.onDateFilter();
        me.frontendApi.mask_text = "Processing Sync Order..";
        /* TO FIND FIRST AND LAST DATE IN CURRENT MONTH */
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var getFirstDay = new Date(y, m, 1);
        this.fromDate = new Date(getFirstDay);
        this.toDate = new Date();
        // this.getTradeSummaryData(this.fromDate, this.toDate);
        this.dtOptions = {
            pagingType: 'simple_numbers',
            pageLength: _config_constant__WEBPACK_IMPORTED_MODULE_5__["PAGE_PER_SIZE"],
            serverSide: true,
            processing: true,
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
                    me.sColumn = e.target.name;
                    me.search['value'] = e.target.value;
                });
                dataTablesParameters['wallet_id'] = _this.socketService.activeWalletSelModel['id'];
                dataTablesParameters['client_id'] = Orbit.CURRENT_USER.user_id;
                dataTablesParameters['startDate'] = _this.formatDate(_this.fromDate);
                dataTablesParameters['endDate'] = _this.formatDate(_this.toDate);
                dataTablesParameters['sColumn'] = _this.sColumn;
                dataTablesParameters['search']['value'] = _this.search['value'] == null ? '' : _this.search['value'];
                dataTablesParameters['search']['regex'] = false;
                dataTablesParameters['search']['type'] = me.search['type'] == null ? '' : me.search['type'];
                _this.frontendApi.getTradeLog(dataTablesParameters).subscribe(function (res) {
                    me.frontendApi.tradeLogData = res.data;
                    callback({
                        recordsTotal: res.recordsTotal,
                        recordsFiltered: res.recordsFiltered,
                        data: []
                    });
                    $('#log-table tfoot tr').appendTo('#log-table thead');
                });
                var symbol = _this.socketService.activeWalletSelModel.symbol, wallet_id = _this.socketService.activeWalletSelModel.id, params = {
                    'symbol': symbol,
                    'wallet_id': wallet_id,
                    'start_date': dataTablesParameters['startDate'],
                    'end_date': dataTablesParameters['endDate'],
                    'columns': JSON.stringify(dataTablesParameters['columns'])
                };
                _this.dtParams = params['columns'];
                _this.frontendApi.getTradeSummaryData(params).subscribe(function (res) {
                    _this.tradeSummary = res['data'];
                    _this.tradeSummary['buy_base'] = _this.tradeSummary['buy_base'] == null ? 0 : _this.tradeSummary['buy_base'];
                    _this.tradeSummary['buy_quote'] = _this.tradeSummary['buy_quote'] == null ? 0 : _this.tradeSummary['buy_quote'];
                    _this.tradeSummary['sell_base'] = _this.tradeSummary['sell_base'] == null ? 0 : _this.tradeSummary['sell_base'];
                    _this.tradeSummary['sell_quote'] = _this.tradeSummary['sell_quote'] == null ? 0 : _this.tradeSummary['sell_quote'];
                    _this.tradeSummary['base'] = res['base'];
                    _this.tradeSummary['quote'] = res['quote'];
                    _this.tradeSummary['symbol'] = res['symbol'];
                    _this.tradeSummary['message'] = res['message'];
                    if (res['success'] == false) {
                        alertify.error(res['message']);
                    }
                });
            },
            columns: this.cols
        };
        this.headerFilterConfig();
    };
    TradeLogComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        this.datatableFilterProcessing();
    };
    TradeLogComponent.prototype.datatableFilterProcessing = function () {
        var me = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        if (that.search() !== this['value']) {
                            me.search['type'] = me.sColumn == 'trade_base_amount' || me.sColumn == 'spred_percent' ? 'num' : null;
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
    TradeLogComponent.prototype.headerFilterConfig = function () {
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
        //change date values
        this.setChangedDate();
        //show datepicker on textfield click
        this.showDatePickerOnClick();
        //clear date
        $(document).on("click", ".ui-datepicker-close", function () {
            $('.datepicker').val("");
            me.onDatatableReload();
        });
        // $('.date-search-input').on( 'change', function (e) {
        //    me.onHeaderFilterSearchInput(e);
        // });
        //filter records on date change
        $('#dateFrom').on('change', function (e) {
            me.onDateFrom(e);
        });
        $('#dateTo').on('change', function (e) {
            me.onDateTo(e);
        });
        //on datepicker today date btn click
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
                // me.datatablesFilterProcessing();
                // me.onHeaderFilterSearchInput(e);
                // e.target.name = 'trade_date';
            }
            $.datepicker._curInst.input.datepicker('hide');
        });
    };
    TradeLogComponent.prototype.onHeaderFilterSearchInput = function (e) {
        this.sColumn = e.target.name;
        this.search['value'] = e.target.value;
        this.search['type'] = 'num';
        $('#log-table').DataTable().draw();
    };
    TradeLogComponent.prototype.showDatePickerOnClick = function () {
        var me = this;
        $('#request_time').click(function () {
            $('#request_time').datepicker('show');
            me.datePickerClicked = 'request_time';
        });
        $('#response_time').click(function () {
            $('#response_time').datepicker('show');
            me.datePickerClicked = 'response_time';
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
    TradeLogComponent.prototype.onDatatableReload = function () {
        // me.sColumn = $(this).attr('name');
        this.search['value'] = '';
        this.search['type'] = '';
        $('#log-table').DataTable().draw();
    };
    TradeLogComponent.prototype.setChangedDate = function () {
        $("#dateFrom").datepicker("setDate", this.formatDate(this.fromDate));
        $("#dateTo").datepicker("setDate", this.formatDate(this.toDate));
    };
    TradeLogComponent.prototype.onDateFilter = function () {
        var date = this.tradeHistoryParams();
        $('#log-table').data('wallet_id', this.socketService.activeWalletSelModel.id);
        $('#log-table').data('startDate', date.startDate);
        $('#log-table').data('endDate', date.endDate);
        $('#log-table').data('search.value', '');
        $('#log-table').data('search.type', 'num');
        $('#log-table').DataTable().draw();
    };
    TradeLogComponent.prototype.onOrderIdClick = function (modal, list, idx) {
        var modalCls = { ariaLabelledBy: 'modal-basic-title' };
        this.modal = modal.show();
        this.frontendApi.orderDetailData = {};
        this.frontendApi.isOrderDetailDataEmpty = true;
        this.openOrderDetailDialog(modal, list, idx);
    };
    TradeLogComponent.prototype.openOrderDetailDialog = function (modal, item, rowIdx) {
        var _this = this;
        var recId = item['id'], orderId = item['order_id'], marketCode = item['code'], symbol = item['name'], status = item['trade_status'];
        var _a = symbol.split('/'), baseId = _a[0], quoteId = _a[1];
        this.frontendApi.viewOrderDetail(recId, orderId, marketCode).subscribe(function (res) {
            if (res['success']) {
                // var modalCls:any= {ariaLabelledBy: 'modal-basic-title'};
                _this.frontendApi.isOrderDetailDataEmpty = false;
                _this.frontendApi.orderDetailData.market_code = res.market_code;
                _this.frontendApi.orderDetailData.status = res.status;
                _this.frontendApi.orderDetailData['request_trade_info'] = res['request_trade_info'];
                _this.frontendApi.orderDetailData['response_trade_info'] = res['response_trade_info'];
                _this.frontendApi.orderDetailData['request_trade_info']['trade_history_id'] = recId;
                _this.frontendApi.orderDetailData['request_trade_info']['oldStatus'] = status;
                _this.frontendApi.orderDetailData['request_trade_info']['rowIdx'] = rowIdx;
                _this.frontendApi.orderDetailData['request_trade_info']['baseId'] = baseId;
                _this.frontendApi.orderDetailData['request_trade_info']['quoteId'] = quoteId;
                // this.modal = this.modalService.open(content, modalCls);
            }
            else {
                alertify.error(res['message']);
                modal.hide();
            }
        });
    };
    TradeLogComponent.prototype.getTradeSummaryData = function (from, to) {
        var _this = this;
        var symbol = this.socketService.activeWalletSelModel.symbol, wallet_id = this.socketService.activeWalletSelModel.id, params = {
            'symbol': symbol,
            'wallet_id': wallet_id,
            'start_date': this.formatDate(from),
            'end_date': this.formatDate(to),
            'columns': this.dtParams
        };
        this.frontendApi.getTradeSummaryData(params).subscribe(function (res) {
            _this.tradeSummary = res['data'];
            _this.tradeSummary['base'] = res['base'];
            _this.tradeSummary['quote'] = res['quote'];
            _this.tradeSummary['symbol'] = res['symbol'];
            _this.tradeSummary['message'] = res['message'];
            if (res['success'] == false) {
                alertify.error(res['message']);
            }
        });
    };
    // validateDateFilter(event){
    //   var selectedDate = this.formatDate(event),//event+'-01'; //
    //      todayDate = new Date(),
    //      tomorrow = this.formatDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 1));
    //   if(selectedDate >= tomorrow){
    //     alertify.error("Date has been set Incorrectly");
    //   }else{
    //     this.onDateFilter()
    //   }
    // }
    TradeLogComponent.prototype.onDateFrom = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'from';
        this.changeDate(event);
        this.selectedFromDate = this.formatDate(event);
        this.selectedToDate = this.formatDate(this.toDate);
        this.onDateFilter();
        // this.getTradeSummaryData(this.selectedFromDate,this.selectedToDate);
    };
    TradeLogComponent.prototype.onDateTo = function (e) {
        var event = new Date(e.target.value);
        this.changeDateStatus = 'from';
        this.changeDateStatus = 'to';
        this.changeDate(event);
        this.selectedFromDate = this.formatDate(this.fromDate);
        this.selectedToDate = this.formatDate(event);
        this.onDateFilter();
        // this.getTradeSummaryData(this.selectedFromDate,this.selectedToDate);
    };
    TradeLogComponent.prototype.setLastDay = function (date) {
        this.selectedToDate = this.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
        this.toDate = this.selectedToDate;
    };
    TradeLogComponent.prototype.getTradeHistoryList = function () {
        var _this = this;
        this.frontendApi.getTradeLog(this.tradeHistoryParams()).subscribe(function (res) {
            _this.frontendApi.tradeLogData = res['data'];
        });
    };
    TradeLogComponent.prototype.tradeHistoryParams = function () {
        var startDate = this.selectedFromDate || 0, endDate = this.selectedToDate || 0;
        var obj = {
            startDate: startDate,
            endDate: endDate
        };
        return obj;
    };
    TradeLogComponent.prototype.onSyncOrderClick = function () {
        var _this = this;
        var me = this;
        this.frontendApi.isSyncOrderClicked = true;
        var tradeLogData = this.frontendApi.tradeLogData;
        var params = {
            // 'tradeLogData' : JSON.stringify(tradeLogData),
            'date_from': me.formatDate(me.fromDate),
            'date_to': me.formatDate(me.toDate)
        };
        this.frontendApi.syncOrder(params).subscribe(function (res) {
            if (res['success']) {
                alertify.success(res['message']);
            }
            else {
                alertify.error(res['message']);
            }
            _this.frontendApi.isSyncOrderClicked = false;
        });
    };
    TradeLogComponent.prototype.formatDate = function (params) {
        var d = new Date(params), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        month = month.length < 2 ? ('0' + month) : month;
        day = day.length < 2 ? ('0' + day) : day;
        return [year, month, day].join('-');
    };
    TradeLogComponent.prototype.changeDate = function (argDate) {
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
    TradeLogComponent.prototype.onCancelOrderClick = function (list, idx) {
        var me = this;
        var message = 'Do you want to cancel order #' + list.order_id + '?';
        alertify.confirm(message, function (e) {
            if (e) {
                var params = {
                    'id': list.id,
                    'market_code': list.code,
                    'symbol': list.name,
                    'order_id': list.order_id,
                };
                me.frontendApi.cancelOrder(params).subscribe(function (res) {
                    if (res['success']) {
                        alertify.success(res['message']);
                        me.onDatatableReload();
                    }
                    else {
                        alertify.error(res['message']);
                    }
                });
            }
            else {
                // 
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", typeof (_a = typeof datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && datatables_net_dt__WEBPACK_IMPORTED_MODULE_2___default.a) === "function" && _a || Object)
    ], TradeLogComponent.prototype, "datatableElement", void 0);
    TradeLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade-log',
            template: __webpack_require__(/*! ./trade-log.component.html */ "./src/app/components/trade-log/trade-log.component.html"),
            styles: [__webpack_require__(/*! ./trade-log.component.css */ "./src/app/components/trade-log/trade-log.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _services_socket_io_service__WEBPACK_IMPORTED_MODULE_6__["SocketIoService"]])
    ], TradeLogComponent);
    return TradeLogComponent;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/user-settings/general-settings/general-settings.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user-settings/general-settings/general-settings.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tborder:  3px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/user-settings/general-settings/general-settings.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user-settings/general-settings/general-settings.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-form-container col-md-12\">\r\n\t<h2>General Settings</h2>\r\n\t<form class=\"change-pwd-form\" [formGroup]=\"form\">\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Enable Trade Sounds</label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" formControlName = \"enable_trade_amout_click_sound\" checked>\r\n\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Enable Alert Sounds</label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" formControlName = \"enable_alert_sound\" checked>\r\n\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Enable Trade Confirmation Modal</label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" formControlName = \"enable_trade_confirmation_modal\" checked>\r\n\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Enable Min-spread Sounds</label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" formControlName = \"enable_min_spred_sound\" checked>\r\n\t\t\t\t\t<span class=\"slider\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- min Spred Percentage Start-->\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Minimum Spread Percentage</label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<input type=\"number\" min=\"0\" max=\"100\" step=\"0.01\" class=\"form-control\" formControlName=\"min_spred_percent\" placeholder=\"minimum spread percentage\" [ngClass] = \"{ 'error' : form.get('min_spred_percent').invalid }\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- min Spred Percentage End -->\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-3\">Default theme </label>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<select formControlName=\"default_theme\" class=\"form-control\">\r\n\t\t\t\t\t<option value =\"1\">Day</option>\r\n\t\t\t\t\t<option value =\"0\">Night</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<div class=\"col-md-4 offset-md-3\">\r\n\t\t\t\t<button (click)=\"saveUserInfo()\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t<button (click)=\"onCancelBtnClick()\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-settings/general-settings/general-settings.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/user-settings/general-settings/general-settings.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GeneralSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsComponent", function() { return GeneralSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralSettingsComponent = /** @class */ (function () {
    function GeneralSettingsComponent(frontEndApi, fb) {
        this.frontEndApi = frontEndApi;
        this.fb = fb;
        this.userInfo = [];
    }
    GeneralSettingsComponent.prototype.ngOnInit = function () {
        this.createInitialForm();
        this.getUserInfo();
    };
    GeneralSettingsComponent.prototype.changeTheme = function (day) {
    };
    GeneralSettingsComponent.prototype.createInitialForm = function () {
        var me = this;
        var user = Orbit.CURRENT_USER;
        this.form = this.fb.group({
            'username': [{ value: '', disabled: true }],
            'client_name_en': [user.full_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address_line1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'mobile_no': '',
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'enable_trade_confirmation_modal': '',
            'enable_min_spred_sound': '',
            'enable_alert_sound': '',
            'enable_trade_amout_click_sound': '',
            'country': '',
            'default_theme': user.user_settings.default_theme,
            'min_spred_percent': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
    };
    GeneralSettingsComponent.prototype.saveUserInfo = function () {
        var _this = this;
        if (this.form.valid) {
            var min_Spred_Percentage = this.form.value.min_spred_percent;
            var formValue = this.form.value;
            var data = {
                'enable_trade_amout_click_sound': formValue.enable_trade_amout_click_sound == (true || 1) ? 1 : 0,
                'enable_alert_sound': formValue.enable_alert_sound == (true || 1) ? 1 : 0,
                'enable_trade_confirmation_modal': formValue.enable_trade_confirmation_modal == (true || 1) ? 1 : 0,
                'enable_min_spred_sound': formValue.enable_min_spred_sound == (true || 1) ? 1 : 0,
                'default_theme': formValue.default_theme == (true || 1) ? 1 : 0,
                'min_spred_percent': formValue.min_spred_percent,
            };
            this.frontEndApi.saveGeneralSettings(data).subscribe(function (res) {
                if (res['success']) {
                    alertify.success('Settings Saved Succesfully');
                    _this.setUserSettings();
                    alertify.confirm('Do you want to Reload this Page?', function (e) {
                        if (e) {
                            window.location.reload();
                        }
                    });
                }
            });
        }
    };
    GeneralSettingsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.frontEndApi.getUserInfo().subscribe(function (res) {
            _this.userInfo = res['data'];
            _this.form.setValue(res.data);
        });
    };
    GeneralSettingsComponent.prototype.setUserSettings = function () {
        Orbit['CURRENT_USER']['user_settings']['enable_trade_amout_click_sound'] = this.form.value.enable_trade_amout_click_sound == (true || 1) ? 1 : 0;
        Orbit['CURRENT_USER']['user_settings']['enable_alert_sound'] = this.form.value.enable_alert_sound == (true || 1) ? 1 : 0;
        Orbit['CURRENT_USER']['user_settings']['enable_trade_confirmation_modal'] = this.form.value.enable_trade_confirmation_modal == (true || 1) ? 1 : 0;
        Orbit['CURRENT_USER']['user_settings']['enable_min_spred_sound'] = this.form.value.enable_min_spred_sound == (true || 1) ? 1 : 0;
        Orbit['CURRENT_USER']['user_settings']['default_theme'] = this.form.value.default_theme == (true || 1) ? 1 : 0;
    };
    GeneralSettingsComponent.prototype.onCancelBtnClick = function () {
        var me = this;
        if (me.form.dirty) {
            alertify.confirm('Do you want to cancel these changes?', function (e) {
                if (e) {
                    me.form.setValue(me.userInfo);
                    me.form.markAsPristine();
                }
            });
        }
    };
    GeneralSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-settings',
            template: __webpack_require__(/*! ./general-settings.component.html */ "./src/app/components/user-settings/general-settings/general-settings.component.html"),
            styles: [__webpack_require__(/*! ./general-settings.component.css */ "./src/app/components/user-settings/general-settings/general-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], GeneralSettingsComponent);
    return GeneralSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-settings/password-info/password-info.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/user-settings/password-info/password-info.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-settings/password-info/password-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user-settings/password-info/password-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-form-container col-md-12\">\r\n\t<h2>Change Password</h2>\r\n\t<form class=\"change-pwd-form\" [formGroup]=\"form\">\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Old Password</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"password\" class=\"form-control\" placeholder=\"*************\" formControlName = \"old_password\"> </div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['old_password']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">New Password</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"password\" class=\"form-control\" placeholder=\"*************\" formControlName = \"new_password\"> </div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['new_password']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Confirm Password</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"password\" class=\"form-control\" placeholder=\"*************\" formControlName = \"confirm_password\"> </div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['confirm_password']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<div class=\"col-md-5 offset-md-2\">\r\n\t\t\t\t<button (click)=\"saveUserPassword()\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t<button (click)=\"onCancelBtnClick()\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-settings/password-info/password-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user-settings/password-info/password-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PasswordInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordInfoComponent", function() { return PasswordInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordInfoComponent = /** @class */ (function () {
    function PasswordInfoComponent(frontEndApi, fb) {
        this.frontEndApi = frontEndApi;
        this.fb = fb;
        this.formErrors = {};
    }
    PasswordInfoComponent.prototype.ngOnInit = function () {
        this.createInitialForm();
    };
    PasswordInfoComponent.prototype.createInitialForm = function () {
        var me = this;
        this.form = this.fb.group({
            'old_password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'new_password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'confirm_password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    PasswordInfoComponent.prototype.saveUserPassword = function () {
        if (this.form.value.new_password != this.form.value.confirm_password) {
            alertify.error('New password and confirm password do not match');
            return;
        }
        if (!this.form.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var me = this;
            var data_1 = {
                'old_password': this.form.value.old_password,
                'new_password': this.form.value.new_password,
                'confirm_password': this.form.value.confirm_password
            }, message = "Do you want to change your password";
            alertify.confirm(message, function (e) {
                if (e) {
                    me.frontEndApi.savePasswordSettings(data_1).subscribe(function (res) {
                        if (res['success']) {
                            alertify.success(res['message']);
                            me.form.reset();
                            me.formErrors = {};
                            alertify.confirm('Do you want to Reload this Page?', function (e) {
                                if (e) {
                                    window.location.reload();
                                }
                            });
                        }
                        else {
                            alertify.error(res['message']);
                        }
                        me.form.reset();
                        me.formErrors = {};
                    });
                }
            });
        }
    };
    PasswordInfoComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.form);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('email')) {
                    this.formErrors[key] = 'Please Enter a valid email address.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater than ' + obj['min']['min'] + '.';
                }
                else {
                }
            }
        }
    };
    PasswordInfoComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    PasswordInfoComponent.prototype.onCancelBtnClick = function () {
        var me = this;
        if (me.form.dirty) {
            alertify.confirm('Do you want to cancel these changes?', function (e) {
                if (e) {
                    me.form.reset();
                }
            });
        }
    };
    PasswordInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-info',
            template: __webpack_require__(/*! ./password-info.component.html */ "./src/app/components/user-settings/password-info/password-info.component.html"),
            styles: [__webpack_require__(/*! ./password-info.component.css */ "./src/app/components/user-settings/password-info/password-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PasswordInfoComponent);
    return PasswordInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user-settings/user-info/user-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/user-settings/user-info/user-info.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control[disabled] {\r\n    background-color: white;\r\n    border: 0;\r\n    box-shadow: none;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/components/user-settings/user-info/user-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-settings/user-info/user-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-form-container col-md-12\">\r\n\t<h2>User Information</h2>\r\n\t<form class=\"basic-info-form\" [formGroup]=\"form\">\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">User Name</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"text\" class=\"form-control\"  formControlName=\"username\"> </div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Full Name</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"text\" class=\"form-control\"  formControlName=\"client_name_en\"> </div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['client_name_en']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Address</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"text\" class=\"form-control\" formControlName=\"address_line1\"> </div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['address_line1']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Country</label>\r\n\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t<select type=\"text\" formControlName=\"country\" class=\"form-control\" id=\"country\">\r\n\t\t\t\t\t<option *ngFor=\"let item of country\" [value]=\"item.country_code\">{{item.country_name}}</option>\r\n\t\t\t\t</select> \r\n\t\t\t\t<!-- <div><span class=\"error\" style=\"color:red\">{{formErrors['country']}}</span></div> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Contact</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"text\" class=\"form-control\"  formControlName=\"mobile_no\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<label class=\"col-md-2\">Email</label>\r\n\t\t\t<div class=\"col-md-5\"><input type=\"text\" class=\"form-control\"  formControlName=\"email\"></div>\r\n\t\t\t<div class=\"col-md-5 offset-md-2\"><span class=\"error\">{{formErrors['email']}}</span></div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group row\">\r\n\t\t\t<div class=\"col-md-5 offset-md-2\">\r\n\t\t\t\t<button (click)=\"saveUserInfo()\" class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t<button (click)=\"onCancelBtnClick()\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-settings/user-info/user-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-settings/user-info/user-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(frontEndApi, fb) {
        this.frontEndApi = frontEndApi;
        this.fb = fb;
        this.formErrors = this.frontEndApi.formErrors;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createInitialForm();
        this.frontEndApi.getCountryList().subscribe(function (result) {
            _this.country = result['data'];
        });
        this.frontEndApi.getUserInfo().subscribe(function (res) {
            _this.userInfo = res['data'];
            _this.form.setValue(_this.userInfo);
        });
    };
    UserInfoComponent.prototype.createInitialForm = function () {
        var me = this;
        this.form = this.fb.group({
            'username': [{ value: '', disabled: true }],
            'client_name_en': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address_line1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'mobile_no': '',
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'enable_trade_confirmation_modal': '',
            'enable_min_spred_sound': '',
            'enable_alert_sound': '',
            'enable_trade_amout_click_sound': '',
            'country': '',
            'default_theme': '',
            'min_spred_percent': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
        });
    };
    UserInfoComponent.prototype.saveUserInfo = function () {
        var _this = this;
        var me = this;
        if (!this.form.valid) {
            this.formErrors = {};
            /* IF FORM IS INVALID SET ERROR MESSAGE */
            this.setFormErrorMsg();
            // this.validateAllFormFields(this.staffDetailForm);
        }
        else {
            var data = {
                'client_name': this.form.value.client_name_en,
                'address': this.form.value.address_line1,
                'mobile_no': this.form.value.mobile_no,
                'email': this.form.value.email,
                'country': this.form.value.country
            };
            this.frontEndApi.savePersonalInfo(data).subscribe(function (res) {
                if (res['success']) {
                    me.formErrors = {};
                    alertify.success('User Info Saved Succesfully');
                    Orbit['CURRENT_USER']['full_name'] = _this.form.value.client_name_en;
                    alertify.confirm('Do you want to Reload this Page?', function (e) {
                        if (e) {
                            window.location.reload();
                        }
                    });
                }
            });
        }
    };
    UserInfoComponent.prototype.setFormErrorMsg = function () {
        var errors = this.getFormErrors(this.form);
        for (var key in errors) {
            if (errors[key] != null) {
                var obj = errors[key];
                if (obj.hasOwnProperty('required')) {
                    this.formErrors[key] = 'This field is required.';
                }
                else if (obj.hasOwnProperty('email')) {
                    this.formErrors[key] = 'Please Enter a valid email address.';
                }
                else if (obj.hasOwnProperty('min')) {
                    this.formErrors[key] = 'This field\'s value must be greater than ' + obj['min']['min'] + '.';
                }
                else {
                }
            }
        }
    };
    UserInfoComponent.prototype.getFormErrors = function (formGroup) {
        var _this = this;
        var errors = {};
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                errors[field] = control.errors;
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                errors[field] = _this.getFormErrors(control);
            }
        });
        return errors;
    };
    UserInfoComponent.prototype.onCancelBtnClick = function () {
        var me = this;
        if (me.form.dirty) {
            alertify.confirm('Do you want to cancel these changes?', function (e) {
                if (e) {
                    me.form.setValue(me.userInfo);
                    me.form.markAsPristine();
                }
            });
        }
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/components/user-settings/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-settings/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_1__["FrontendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user-settings/user-settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/user-settings/user-settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-settings/user-settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-settings/user-settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-settings\" >\r\n\t<ul class=\"nav nav-tabs form-tabs\" id=\"client-form-tabs\" role=\"tablist\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" id=\"client-basic-tab\" data-toggle=\"tab\" href=\"#user-info\" role=\"tab\" aria-controls=\"client-basic\" aria-selected=\"true\">Personal Information</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" id=\"client-address-tab\" data-toggle=\"tab\" href=\"#general-settings\" role=\"tab\" aria-controls=\"client-address\" aria-selected=\"true\">General Settings</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" id=\"client-contact-tab\" data-toggle=\"tab\" href=\"#password-info\" role=\"tab\" aria-controls=\"client-contact\" aria-selected=\"true\">Password Settings</a>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div class=\"change-pwd-container tab-pane fade\" id=\"general-settings\" role=\"tabpanel\" aria-labelledby=\"client-address-tab\">\r\n\t\t\t<app-general-settings></app-general-settings>\r\n\t\t</div>\r\n\t\t<div class=\"change-pwd-container tab-pane fade\" id=\"password-info\" role=\"tabpanel\" aria-labelledby=\"client-contact-tab\">\r\n\t\t\t<app-password-info></app-password-info>\r\n\t\t</div>\r\n\t\t<div class=\"change-pwd-container tab-pane fade active show\" id=\"user-info\" role=\"tabpanel\" aria-labelledby=\"client-basic-tab\">\r\n\t\t\t<app-user-info></app-user-info>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-settings/user-settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-settings/user-settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
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

var UserSettingsComponent = /** @class */ (function () {
    function UserSettingsComponent() {
    }
    UserSettingsComponent.prototype.ngOnInit = function () {
    };
    UserSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! ./user-settings.component.html */ "./src/app/components/user-settings/user-settings.component.html"),
            styles: [__webpack_require__(/*! ./user-settings.component.css */ "./src/app/components/user-settings/user-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSettingsComponent);
    return UserSettingsComponent;
}());



/***/ }),

/***/ "./src/app/config/constant.ts":
/*!************************************!*\
  !*** ./src/app/config/constant.ts ***!
  \************************************/
/*! exports provided: PAGE_PER_SIZE, SOCKET_RECONNECTION_ATTEMPTS, TRADE_COUNTER_PER, SOCKET_RECONNECTION_MIN_INTERVAL, SOCKET_RECONNECTION_MAX_INTERVAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PER_SIZE", function() { return PAGE_PER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCKET_RECONNECTION_ATTEMPTS", function() { return SOCKET_RECONNECTION_ATTEMPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_COUNTER_PER", function() { return TRADE_COUNTER_PER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCKET_RECONNECTION_MIN_INTERVAL", function() { return SOCKET_RECONNECTION_MIN_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCKET_RECONNECTION_MAX_INTERVAL", function() { return SOCKET_RECONNECTION_MAX_INTERVAL; });
//Datatables Constants
var PAGE_PER_SIZE = 50;
//sockect reconnection attempts constant
var SOCKET_RECONNECTION_ATTEMPTS = 10;
//Trade Counter Percentage
var TRADE_COUNTER_PER = 80;
// socket reconnect time interval(in milliseconds)
var SOCKET_RECONNECTION_MIN_INTERVAL = 60000;
var SOCKET_RECONNECTION_MAX_INTERVAL = 300000;


/***/ }),

/***/ "./src/app/config/lang.ts":
/*!********************************!*\
  !*** ./src/app/config/lang.ts ***!
  \********************************/
/*! exports provided: DASHBOARD, API_SETTINGS, TRADE_LOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD", function() { return DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_SETTINGS", function() { return API_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_LOG", function() { return TRADE_LOG; });
var DASHBOARD = {
    // headers : {
    // 	onOff        :'On/Off',
    // 	market       :'Market',
    // 	quote_balance  :'BTC Balance1111',
    // 	base_balance  :'ETH Balance222',
    // 	bid          :'Bid',
    // 	ask          :'Ask',
    // 	status       :'Status',
    // 	request_time :'Request Time',
    // 	response_time:'Response Time',
    // 	type         :'Type',
    // 	amount       :'Amount',
    // 	profit       :'Profit (%)'
    // },
    // labels:{
    // 	lblnextReload:'Next Reload',
    // 	lbllastFetched:'Last Fetched On',
    // 	lbltradeHistory:'Trade History',
    // 	lbltradebtcAmt:'TRADE BTC AMOUNT',
    // 	lblestimateProfit:'ESTIMATED PROFIT'
    // },
    errors: {
        emptyBtcAmount: 'Please enter BTC amount',
        spredLessMinSpred: 'Spread rate is less than your min spread value',
        negativeAmount: 'Amount cannot be less than 0',
        reconnectionError: 'Error while connecting to the ticker server. Please contact system admin for more details.',
        multipleConnectionError: 'Already connected from another device.',
        tradeClickPerError: 'Trade limit is about to exceed',
        tradeClickFinishError: 'Trade limit has exceeded',
        negativeSpred: 'Spread Percentage is Negative.'
    }
};
var API_SETTINGS = {
    // headers : {
    // 	OnOff      :'On/Off',
    // 	market     :'Market',
    // 	api_keys   :'API KEYS',
    // 	secret_keys:'SECRET KEYS',
    // 	min_spred_percent:'MINIMUM SPRED PERCENTAGE',
    // },
    errors: {
        minSpredNegative: 'Minimum Spread Percentage must be a positive number',
        idEmpty: 'Record not found please Save the Record First!',
        keysInvalid: "Api/Secret Keys Are Invalid For ",
        noChanges: "No modified/new record(s) found for save.",
    },
    confirm: {
        save: "Do you want to save the changes?"
    }
};
var TRADE_LOG = {
    // headers : {
    // 	buy             :'BUY',
    // 	sell            :'SELL',
    // 	estimate_profit :'ESTIMATED PROFIT',
    // 	id              :'ID',
    // 	market          :'Market',
    // 	wallet          :'Wallet',
    // 	order_id        :'Order ID',
    // 	status          :'Status',
    // 	request_time    :'Request Time',
    // 	response_time   :'Response Time',
    // 	trade_type      :'Type',
    // 	trade_base_amount:'Amount',
    // 	spred_percent   :'Profit (%)'
    // },
    // labels:{
    // 	lbldateFrom:'Date From:',
    // 	lbldateTo:'Date To:'
    // },
    errors: {
        invalidDate: "Date has been set Incorrectly",
    },
    success: {
        fetchedByDate: 'Loaded Records According To DATE',
    }
};
// export const BUTTONS ={
// 	btnSave           :'Save',
// 	btnReset          :'Reset',
// 	btnVerify         :'Verify',
// 	btnVerified       :'Verified',
// 	btnTradeAction    :'Trade Action',
// 	menubtnDashboard  :'Dashboard',
// 	menubtnApiSettings:'API Settings',
// 	menubtnTradeLog   :'Trade Log',
// 	menubtnLogout     :'Logout',
// 	menubtnDayMode    :'Day Mode',
// 	menubtnNightMode  :'Night Mode',
// 	btnBuy            :'Buy',
// 	btnSell           :'Sell',
// }


/***/ }),

/***/ "./src/app/pipes/bit-number.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/bit-number.pipe.ts ***!
  \******************************************/
/*! exports provided: BitNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitNumberPipe", function() { return BitNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BitNumberPipe = /** @class */ (function () {
    function BitNumberPipe(_locale) {
        this._locale = _locale;
    }
    BitNumberPipe.prototype.transform = function (value, digitsInfo, emptyTxt, hasError, errorTxt, locale) {
        if (value == null || value === '' || value !== value) {
            return hasError == 1 ? errorTxt : emptyTxt;
        }
        try {
            locale = locale || this._locale;
            var num = strToNumber(value);
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(num, locale, digitsInfo);
        }
        catch (error) {
            return emptyTxt;
        }
        /**
         * Transforms a string into a number (if needed).
         */
        function strToNumber(value) {
            // Convert strings to numbers
            if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
                return Number(value);
            }
            if (typeof value !== 'number') {
                throw new Error(value + " is not a number");
            }
            return value;
        }
    };
    BitNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'bitNumber'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], BitNumberPipe);
    return BitNumberPipe;
}());



/***/ }),

/***/ "./src/app/services/frontend.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/frontend.service.ts ***!
  \**********************************************/
/*! exports provided: FrontendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendService", function() { return FrontendService; });
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
var FrontendService = /** @class */ (function () {
    function FrontendService(http) {
        this.http = http;
        this.BASE_URL = window['BASE_URL'];
        this.tradeFormData = {};
        this.tradeLogData = [];
        this.orderDetailData = {};
        this.isOrderDetailDataEmpty = true;
        this.sideBarStatus = false;
        this.isTradeBtnClicked = false;
        this.routerName = '';
        this.isSyncOrderClicked = false;
        this.homeTradeLogData = [];
        this.min_spred_percent = Orbit['CURRENT_USER']['min_spred_percent'];
        this.formErrors = {};
        this.CSRF_TOKEN = $('meta[name="csrf-token"]').attr("content");
    }
    /********************************** COMMON HTTP FUNCTIONS :: START **********************************/
    FrontendService.prototype.getRequest = function (url, params) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in params) {
            var value = params[key];
            httpParams = httpParams.set(key, value);
        }
        return this.http.get(url, { headers: httpHeaders, responseType: 'json', params: httpParams });
    };
    FrontendService.prototype.getKeyValue = function (url, data) {
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
        // httpParams = httpParams.set('_csrf', this.CSRF_TOKEN);
        var body = httpParams.toString();
        return this.http.get(url, { headers: httpHeaders, responseType: 'json', params: httpParams });
    };
    FrontendService.prototype.postKeyValue = function (url, data) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
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
        var body = httpParams.toString();
        return this.http.post(url, body, { headers: httpHeaders, responseType: 'json', });
    };
    FrontendService.prototype.postJson = function (url, data) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.set('_csrf', this.CSRF_TOKEN);
        httpParams = httpParams.set('data', JSON.stringify(data));
        var body = httpParams.toString();
        return this.http.post(url, body, { headers: httpHeaders, responseType: 'json' });
    };
    /********************************** COMMON HTTP FUNCTIONS :: END **********************************/
    /********************************** HEADER FUNCTIONS :: START **********************************/
    /**
     * fetch active wallets
     */
    FrontendService.prototype.getDefaultWallet = function () {
        var url = BASE_URL + 'wallet-master/get-wallet-list';
        return this.getRequest(url, '');
    };
    FrontendService.prototype.logout = function () {
        var url = BASE_URL + 'auth/logout';
        return this.postKeyValue(url, {});
    };
    /********************************** HEADER FUNCTIONS :: END **********************************/
    /********************************** DASHBOARD FUNCTIONS :: START **********************************/
    FrontendService.prototype.clientMarketWalletList = function (params) {
        if (params === void 0) { params = {}; }
        var url = BASE_URL + 'client-market-wallet/get-list';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.getTradeLog = function (params) {
        var url = BASE_URL + 'trade-history/list';
        return this.getKeyValue(url, params);
    };
    FrontendService.prototype.getJpyRate = function (params) {
        var url = 'https://min-api.cryptocompare.com/data/pricemulti';
        // const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsym=NPR&tsyms=JPY';
        // let url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=JPY';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.getMarketBalance = function (exchangeId) {
        var params = { market: exchangeId };
        var url = BASE_URL + 'client-market-wallet/get-market-balance';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.viewOrderDetail = function (recId, orderId, marketCode) {
        var params = { id: recId, order_id: orderId, market_code: marketCode };
        var url = BASE_URL + 'exchange/fetch-order';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.featchApiResponse = function (apiResponse) {
        var url = BASE_URL + 'trade-history/featch-api-response';
        return this.postKeyValue(url, apiResponse);
    };
    FrontendService.prototype.cancelOrder = function (params) {
        var url = BASE_URL + 'trade-history/order-cancel';
        return this.postKeyValue(url, params);
    };
    FrontendService.prototype.syncOrder = function (apiResponse) {
        // const url = BASE_URL+'trade-history/sync-order';
        var url = BASE_URL + 'trade-history/sync-order-cron';
        return this.postKeyValue(url, apiResponse);
    };
    /**
     * TradeLog Action Click save function
     * @param  {any} params []
     * @return {any}        []
     */
    FrontendService.prototype.saveTradeLog = function (params) {
        var url = BASE_URL + 'trade-history/create-order';
        return this.postKeyValue(url, params);
    };
    FrontendService.prototype.setDisplayOrder = function (params) {
        var url = BASE_URL + 'client-market-wallet/set-display-order';
        return this.postJson(url, params);
    };
    /********************************** DASHBOARD FUNCTIONS :: END **********************************/
    /********************************** API SETTINGS FUNCTIONS :: START **********************************/
    FrontendService.prototype.getApiSettingsList = function (params) {
        if (params === void 0) { params = {}; }
        var url = BASE_URL + 'client-market/list';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.getMinSpredPercentData = function (controller) {
        var url = controller + '/get-min-spred';
        return this.http.get(url);
    };
    FrontendService.prototype.saveClientMarketApi = function (params) {
        var url = BASE_URL + 'client-market/save-api-keys';
        return this.postJson(url, params);
    };
    FrontendService.prototype.saveMinSpredPercent = function (params) {
        var url = BASE_URL + 'client/save-min-spred-percentage';
        return this.postJson(url, params);
    };
    FrontendService.prototype.verifyApiKey = function (params) {
        var url = BASE_URL + 'client-market/verify-apikey';
        return this.getRequest(url, params);
    };
    /********************************** API SETTINGS FUNCTIONS :: END **********************************/
    /**
     * Status Toggle Functionality
     * @param {number} id         []
     * @param {string} controller []
     */
    FrontendService.prototype.toggleStatus = function (id, controller) {
        var url = BASE_URL + controller + '/status-toggle';
        return this.postKeyValue(url, { id: id });
    };
    FrontendService.prototype.getTradeSummaryData = function (params) {
        var url = BASE_URL + 'trade-history/get-trade-summary';
        return this.getRequest(url, params);
    };
    FrontendService.prototype.getUserInfo = function () {
        var url = BASE_URL + 'client/get-user-info';
        return this.postJson(url, '');
    };
    FrontendService.prototype.savePersonalInfo = function (params) {
        var url = BASE_URL + 'client/save-personal-info';
        return this.postKeyValue(url, params);
    };
    FrontendService.prototype.saveGeneralSettings = function (params) {
        var url = BASE_URL + 'client/save-general-settings';
        return this.postKeyValue(url, params);
    };
    FrontendService.prototype.savePasswordSettings = function (params) {
        var url = BASE_URL + 'client/save-password-settings';
        return this.postKeyValue(url, params);
    };
    FrontendService.prototype.getCountryList = function () {
        var url = 'backend/country/list';
        return this.getRequest(url, '');
    };
    FrontendService.prototype.getNetworkInterface = function () {
        var url = 'network-interface/get-data';
        return this.getRequest(url, '');
    };
    FrontendService.prototype.saveNetworkInterface = function (data, id) {
        var params = { data: data, network_interface_id: id };
        var url = 'network-interface/save-network-settings';
        return this.postJson(url, params);
    };
    FrontendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FrontendService);
    return FrontendService;
}());



/***/ }),

/***/ "./src/app/services/socket-io.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/socket-io.service.ts ***!
  \***********************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_frontend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/frontend.service */ "./src/app/services/frontend.service.ts");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constant */ "./src/app/config/constant.ts");
/* harmony import */ var _config_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/lang */ "./src/app/config/lang.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
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
var SocketIoService = /** @class */ (function () {
    function SocketIoService(frontendApi) {
        var _this = this;
        this.frontendApi = frontendApi;
        this.reconnectionAttempts = _config_constant__WEBPACK_IMPORTED_MODULE_3__["SOCKET_RECONNECTION_ATTEMPTS"];
        this.reconnectionDelay = 5000;
        this.isReconnectionError = false;
        this.reconnectInterval = _config_constant__WEBPACK_IMPORTED_MODULE_3__["SOCKET_RECONNECTION_MIN_INTERVAL"];
        this.activeWalletSelModel = Orbit['CURRENT_USER']['default_wallet'];
        this.walletChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isWalletchange = false;
        this.clientWalletSelModel = {
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
        this.spredPercentAudio = new Audio();
        this.walletChange.subscribe(function (value) {
            _this.isWalletchange = value;
        });
    }
    /**
 * @author SAGIN
 * On spred_percentage greater than min_Spred_percentage
 */
    SocketIoService.prototype.playSpredPercentAudio = function () {
        this.spredPercentAudio.play();
    };
    /**
   * @author ROHAN
   * On wallet selection change,
   * 1. Set active wallet
   * 2. Re-fetch client market wallet
   * 3. Leave old socket rooms.
   * 4. Join new roomw.
   * @param {[Object]} walletItem [selected wallet]
   */
    SocketIoService.prototype.changeActiveWallet = function (newWalletInfo) {
        var symbol = newWalletInfo['code'];
        var _a = symbol.split('/'), base = _a[0], quote = _a[1];
        var newActiveWallet = {
            id: newWalletInfo['id'],
            symbol: newWalletInfo['code'],
            base: base,
            quote: quote //newWalletInfo['quote']
        };
        Orbit.CURRENT_USER.default_wallet = newActiveWallet;
        this.activeWalletSelModel = newActiveWallet;
        this.onWalletChangeDisconnect();
        this.isWalletchange = true;
        this.walletChange.next(this.isWalletchange);
    };
    SocketIoService.prototype.onWalletChangeDisconnect = function () {
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
            symbol: this.activeWalletSelModel['symbol'],
            tradeActionChecked: true
        };
        this.isReconnectionError = false;
        this.reconnectionErrorMsg = '';
        /*for clear refetch jpy rate interval*/
        clearInterval(this.refetchJpyRateTimer);
        this.clientWalletSelModel = Object.assign(this.clientWalletSelModel, obj);
        if (this.socket) {
            this.socket.io.disconnect();
        }
    };
    /**
     * Initialize Socket Conneciton
     * @param {[FormGroup]} bitForm [BitForm]
     */
    SocketIoService.prototype.connect = function (bitForm) {
        var me = this;
        var user = Orbit.CURRENT_USER;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(SOCKET_URL, {
            reconnection: true,
            reconnectionDelay: me.reconnectionDelay,
            // reconnectionDelayMax : 7000,
            reconnectionAttempts: me.reconnectionAttempts,
            query: 'client_id=' + user.user_id + '&access_token=' + user.access_token
        });
        this.socket.on('reconnect_failed', function () {
            me.reconnectionErrorMsg = _config_lang__WEBPACK_IMPORTED_MODULE_4__["DASHBOARD"].errors.reconnectionError;
            me.isReconnectionError = true;
            /*For clear old bid/ask rate*/
            for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                var obj = {
                    bid: null,
                    ask: null,
                    bid_status: null,
                    ask_status: null,
                    error_msg: '',
                    has_error: 0,
                };
                me.clientWalletSelModel.items[i] = Object.assign(me.clientWalletSelModel.items[i], obj);
                me.clientWalletSelModel.bidRateArr = {};
                me.clientWalletSelModel.askRateArr = {};
                if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.max_bid_market) {
                    me.clientWalletSelModel.max_bid_market = null;
                }
                if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.min_ask_market) {
                    me.clientWalletSelModel.min_ask_market = null;
                }
            }
            ;
            /*For reset bitform*/
            me.resetBitForm(bitForm);
            me.socket.io.disconnect();
            setTimeout(function () {
                me.reconnectInterval += 60000;
                if (_config_constant__WEBPACK_IMPORTED_MODULE_3__["SOCKET_RECONNECTION_MAX_INTERVAL"] < me.reconnectInterval) {
                    me.reconnectInterval = _config_constant__WEBPACK_IMPORTED_MODULE_3__["SOCKET_RECONNECTION_MAX_INTERVAL"];
                }
                me.connect(bitForm);
            }, me.reconnectInterval);
        });
        this.socket.on('connect', function (data) {
            me.reconnectionErrorMsg = '';
            me.isReconnectionError = false;
            me.reconnectInterval = _config_constant__WEBPACK_IMPORTED_MODULE_3__["SOCKET_RECONNECTION_MIN_INTERVAL"];
        });
        this.socket.on('ticker', function (resp) {
            // alertify.success(data);
            try {
                var data = JSON.parse(resp);
                me.clientWalletSelModel.tickers[data['room']] = data;
                me.setFormData(me, data, data['exchangeId'], bitForm);
                // return data;
            }
            catch (e) {
                // console.error('Ticker Error:', e);
            }
        });
        this.socket.on('tickerError', function (data) {
            try {
                data = JSON.parse(data);
                var valid_market_count = 0;
                for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                    if (me.clientWalletSelModel.items[i]['code'] == data.exchangeId && me.clientWalletSelModel.items[i]['enable_trade'] == 1) {
                        var obj = {
                            bid: null,
                            ask: null,
                            bid_status: null,
                            ask_status: null,
                            error_msg: data.error_msg,
                            has_error: 1,
                        };
                        me.clientWalletSelModel.items[i] = Object.assign(me.clientWalletSelModel.items[i], obj);
                        if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.max_bid_market) {
                            me.clientWalletSelModel.max_bid_market = null;
                        }
                        if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.min_ask_market) {
                            me.clientWalletSelModel.min_ask_market = null;
                        }
                        delete me.clientWalletSelModel.bidRateArr[me.clientWalletSelModel.items[i]['code']];
                        delete me.clientWalletSelModel.askRateArr[me.clientWalletSelModel.items[i]['code']];
                    }
                    if (me.clientWalletSelModel.items[i]['enable_trade'] == 1 && me.clientWalletSelModel.items[i]['has_error'] == 0) {
                        valid_market_count++;
                    }
                }
                ;
                if (valid_market_count == 0) {
                    /*For reset bitform*/
                    me.resetBitForm(bitForm);
                }
                // return data;
            }
            catch (e) {
                // console.error('Ticker Error:', e);
            }
        });
        this.socket.on('loadMarketsError', function (data) {
            try {
                data = JSON.parse(data);
                var valid_market_count = 0;
                for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                    if (me.clientWalletSelModel.items[i]['code'] == data.exchangeId && me.clientWalletSelModel.items[i]['enable_trade'] == 1) {
                        var obj = {
                            bid: null,
                            ask: null,
                            bid_status: null,
                            ask_status: null,
                            error_msg: data.error_msg,
                            has_error: 1,
                        };
                        me.clientWalletSelModel.items[i] = Object.assign(me.clientWalletSelModel.items[i], obj);
                        if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.max_bid_market) {
                            me.clientWalletSelModel.max_bid_market = null;
                        }
                        if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.min_ask_market) {
                            me.clientWalletSelModel.min_ask_market = null;
                        }
                        delete me.clientWalletSelModel.bidRateArr[me.clientWalletSelModel.items[i]['code']];
                        delete me.clientWalletSelModel.askRateArr[me.clientWalletSelModel.items[i]['code']];
                    }
                    if (me.clientWalletSelModel.items[i]['enable_trade'] == 1 && me.clientWalletSelModel.items[i]['has_error'] == 0) {
                        valid_market_count++;
                    }
                }
                ;
                if (valid_market_count == 0) {
                    /*For reset bitform*/
                    me.resetBitForm(bitForm);
                }
                // return data;
            }
            catch (e) {
                // console.error('Ticker Error:', e);
            }
        });
        this.socket.on('socketAuthFailed', function (resp) {
            try {
                var data = JSON.parse(resp);
                // if(data['status_code'] == 403){
                me.reconnectionErrorMsg = data.msg; //DASHBOARD.errors.multipleConnectionError;
                me.isReconnectionError = true;
                me.socket.io.disconnect();
                // }
            }
            catch (e) {
                // console.error('Ticker Error:', e);
            }
        });
        this.socket.on('proceed_to_join_room', function (resp) {
            me.clientWalletSelModel.items.forEach(function (exchangeItem) {
                if (exchangeItem['enable_trade'] == 1) {
                    var exchangeId = exchangeItem.code;
                    var room = exchangeId + '_' + me.activeWalletSelModel.symbol;
                    me.joinRoom(room);
                }
            });
        });
    };
    SocketIoService.prototype.saveTradeLog = function (params) {
        this.socket.emit('saveTradeLog', params);
    };
    /**
     * Join Room
     * room name format is {exchangeId}_{walletSymbol}, such as poloniex_ETH/BTC
     * @param {[string]} room [name of the room to join]
     */
    SocketIoService.prototype.joinRoom = function (room) {
        this.socket.emit('join', { room: room });
    };
    /**
     * Leave room
     * @param {[string]} room [name of the room to leave]
     */
    SocketIoService.prototype.leaveRoom = function (room) {
        this.socket.emit('leaveRoom', { room: room });
    };
    SocketIoService.prototype.setFormData = function (me, ticker, exchangeId, bitForm) {
        try {
            var idx = -1;
            for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                if (me.clientWalletSelModel.items[i]['code'] == exchangeId) {
                    idx = i;
                    break;
                }
            }
            ;
            var bid = parseFloat(ticker.bid);
            var ask = parseFloat(ticker.ask);
            var bid_status = ticker.bidStatus;
            var ask_status = ticker.askStatus;
            if (!bid && !ask) {
                var obj_1 = {
                    bid: null,
                    ask: null,
                    bid_status: null,
                    ask_status: null,
                    error_msg: '',
                    has_error: 0,
                };
                me.clientWalletSelModel.items[idx] = Object.assign(me.clientWalletSelModel.items[idx], obj_1);
                if (me.clientWalletSelModel.items[idx]['code'] == me.clientWalletSelModel.max_bid_market) {
                    me.clientWalletSelModel.max_bid_market = null;
                }
                if (me.clientWalletSelModel.items[idx]['code'] == me.clientWalletSelModel.min_ask_market) {
                    me.clientWalletSelModel.min_ask_market = null;
                }
                return;
            }
            me.clientWalletSelModel.bidRateArr[exchangeId] = bid;
            me.clientWalletSelModel.askRateArr[exchangeId] = ask;
            var max_bid_1 = 0;
            var min_ask_1 = 0;
            var _max_bid_market_1 = '';
            var _min_ask_market_1 = '';
            /*For get max_bid rate and market*/
            Object.keys(me.clientWalletSelModel.bidRateArr).forEach(function (key) {
                if (max_bid_1 < me.clientWalletSelModel.bidRateArr[key]) {
                    _max_bid_market_1 = key;
                    max_bid_1 = me.clientWalletSelModel.bidRateArr[key];
                }
            });
            me.clientWalletSelModel.max_bid_market = _max_bid_market_1;
            /*For get min_ask rate and market*/
            Object.keys(me.clientWalletSelModel.askRateArr).forEach(function (key) {
                if (min_ask_1 > me.clientWalletSelModel.askRateArr[key] || min_ask_1 == 0) {
                    _min_ask_market_1 = key;
                    min_ask_1 = me.clientWalletSelModel.askRateArr[key];
                }
            });
            me.clientWalletSelModel.min_ask_market = _min_ask_market_1;
            //for set all bid value and update its classes
            me.clientWalletSelModel.items[idx]['has_error'] = 0;
            me.clientWalletSelModel.items[idx]['error_msg'] = '';
            me.clientWalletSelModel.items[idx]['bid'] = bid;
            me.clientWalletSelModel.items[idx]['bid_status'] = bid_status;
            //for set all ask value and update its classes
            me.clientWalletSelModel.items[idx]['ask'] = ask;
            me.clientWalletSelModel.items[idx]['ask_status'] = ask_status;
            var max_bid_jpy = me.activeWalletSelModel.symbol == 'BTC/JPY' ? me.toComma(Math.floor(max_bid_1)) : me.toComma((max_bid_1 * (me.clientWalletSelModel.quote_jpy_rate || 0)).toFixed());
            var min_ask_jpy = me.activeWalletSelModel.symbol == 'BTC/JPY' ? me.toComma(Math.ceil(min_ask_1)) : me.toComma((min_ask_1 * (me.clientWalletSelModel.quote_jpy_rate || 0)).toFixed());
            var max_bid_quote = me.activeWalletSelModel.symbol == 'BTC/JPY' ? max_bid_1.toFixed(3) : max_bid_1.toFixed(8);
            var min_ask_quote = me.activeWalletSelModel.symbol == 'BTC/JPY' ? min_ask_1.toFixed(3) : min_ask_1.toFixed(8);
            var spredAmt = max_bid_quote - min_ask_quote;
            var spredPercent = (((spredAmt / min_ask_quote) * 100) || 0).toFixed(3);
            /*calculate and set ETH bid/ask and estimated profit*/
            var btcAmt = parseFloat(bitForm.value['trade_quote_amount']) || 0;
            me.calculateEthBidAskAndProfit(max_bid_quote, min_ask_quote, btcAmt, bitForm);
            max_bid_1 = me.activeWalletSelModel.symbol == 'BTC/JPY' ? Math.floor(max_bid_1) : max_bid_1.toFixed(8);
            min_ask_1 = me.activeWalletSelModel.symbol == 'BTC/JPY' ? Math.ceil(min_ask_1) : min_ask_1.toFixed(8);
            spredAmt = me.activeWalletSelModel.symbol == 'BTC/JPY' ? Math.ceil(spredAmt) : (spredAmt).toFixed(8);
            // var btcAmt = bitForm.value['trade_quote_amount'],
            // estProfit:any = (spredPercent/100) * btcAmt * me.clientWalletSelModel.quote_jpy_rate;
            var max_bid_idx = -1, min_ask_idx = -1;
            for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.max_bid_market) {
                    max_bid_idx = i;
                }
                if (me.clientWalletSelModel.items[i]['code'] == me.clientWalletSelModel.min_ask_market) {
                    min_ask_idx = i;
                }
            }
            ;
            var max_bid_taker_fee = me.clientWalletSelModel.items[max_bid_idx]['taker_fee'], min_ask_taker_fee = me.clientWalletSelModel.items[min_ask_idx]['taker_fee'], min_spred_percent = max_bid_taker_fee > min_ask_taker_fee ? max_bid_taker_fee : min_ask_taker_fee;
            min_spred_percent = (!me.frontendApi.min_spred_percent || me.frontendApi.min_spred_percent == 0) ? min_spred_percent : me.frontendApi.min_spred_percent;
            var obj = {
                'market_buy': me.clientWalletSelModel.min_ask_market,
                'market_sell': me.clientWalletSelModel.max_bid_market,
                'max_bid_rate': max_bid_1,
                'min_ask_rate': min_ask_1,
                'max_bid_jpy': max_bid_jpy,
                'min_ask_jpy': min_ask_jpy,
                'spred_jpy': spredAmt,
                'spred_percent': spredPercent,
                'spred_quote': spredAmt,
                'max_bid_taker_fee': max_bid_taker_fee,
                'min_ask_taker_fee': min_ask_taker_fee,
                'min_spred_percent': min_spred_percent,
            };
            me.createUpdatedForm(obj, bitForm);
        }
        catch (e) {
            // console.error("setFormData error",e);
        }
    };
    SocketIoService.prototype.createUpdatedForm = function (valueObj, bitForm) {
        try {
            var obj = bitForm.value;
            obj = Object.assign(obj, valueObj);
            bitForm.setValue(obj);
            // bitForm = bitForm.group(obj);
        }
        catch (e) {
            // console.error("createUpdateForm Error:",e);
        }
        // if(this.frontendApi.min_spred_percent<bitForm.controls.spred_percent.value)//Min Spred < spred_percentage
        if (this.oldSpredPercentValue != bitForm.value.spred_percent) {
            {
                // console.log('Old Spred Percent Value',this.oldSpredPercentValue);
                // console.log('Form Spred Percent Value',bitForm.value.spred_percent);
                this.oldSpredPercentValue = bitForm.value.spred_percent;
                if (bitForm.value.min_spred_percent < bitForm.value.spred_percent)
                    this.playSpredPercentAudio();
            }
        }
    };
    SocketIoService.prototype.resetBitForm = function (bitForm) {
        /*For reset bitform*/
        var obj = {
            'trade_quote_amount': '',
            'trade_base_bid': '',
            'trade_base_ask': '',
            'spred_base': '',
            'estimated_profit': '',
            'market_buy': '',
            'market_sell': '',
            'max_bid_rate': '',
            'min_ask_rate': '',
            'max_bid_jpy': '',
            'min_ask_jpy': '',
            'spred_jpy': '',
            'spred_percent': '',
            'spred_quote': '',
            'max_bid_taker_fee': '',
            'min_ask_taker_fee': '',
            'min_spred_percent': '',
        };
        this.createUpdatedForm(obj, bitForm);
    };
    SocketIoService.prototype.calculateEthBidAskAndProfit = function (max_bid_quote, min_ask_quote, btcAmt, bitForm) {
        var trade_base_bid = max_bid_quote == 0 ? 0 : parseFloat(((1 / max_bid_quote) * btcAmt).toFixed(8)), trade_base_ask = min_ask_quote == 0 ? 0 : parseFloat(((1 / min_ask_quote) * btcAmt).toFixed(8)), spred_base = trade_base_ask - trade_base_bid, estProfit = (spred_base) * this.clientWalletSelModel.base_jpy_rate;
        var obj = {
            'trade_quote_amount': btcAmt.toFixed(3),
            'trade_base_bid': trade_base_bid.toFixed(8),
            'trade_base_ask': trade_base_ask.toFixed(8),
            'spred_base': spred_base.toFixed(8),
            'estimated_profit': this.toComma(parseFloat(estProfit).toFixed())
        };
        this.createUpdatedForm(obj, bitForm);
    };
    SocketIoService.prototype.toComma = function (value) {
        var newVal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return newVal;
    };
    SocketIoService.prototype.getMarketBalance = function (exchangeId) {
        var me = this;
        try {
            me.frontendApi.getMarketBalance(exchangeId).subscribe(function (result) {
                if (result['success'] && result['data']) {
                    var idx = -1;
                    //   // if(me.exchangeList[exchangeId]['enable_trade'] == 0){
                    for (var i = 0; i < me.clientWalletSelModel.items.length; i++) {
                        var clientMarketWalletRec = me.clientWalletSelModel.items[i];
                        if (clientMarketWalletRec['code'] === exchangeId) {
                            if (clientMarketWalletRec['enable_trade'] == 0) {
                                return false;
                            }
                            idx = i;
                            break;
                        }
                    }
                    var data = result['data'], quote_balance = data['btc'] ? parseFloat(data['btc']) : 0, base_balance = data['eth'] ? parseFloat(data['eth']) : 0;
                    if (me.clientWalletSelModel.items[idx]) {
                        // me.clientWalletSelModel.items[idx]['jpy_balance'] = quote_balance*me.clientWalletSelModel.quote_jpy_rate;
                        me.clientWalletSelModel.items[idx]['quote_balance'] = quote_balance;
                        me.clientWalletSelModel.items[idx]['base_balance'] = base_balance;
                    }
                    me.clientWalletSelModel.quote_balance_arr[exchangeId] = quote_balance;
                    me.clientWalletSelModel.base_balance_arr[exchangeId] = base_balance;
                    // me.clientWalletSelModel.cash_balance_arr[exchangeId] = quote_balance*me.clientWalletSelModel.quote_jpy_rate;
                    me.calculateTotal();
                }
                else {
                    // alertify.error('Fatch Balance Error!!!');
                }
            });
        }
        catch (e) {
            //
        }
    };
    /**
     * Client Market Wallet Grid's Balance Summary Calculation
     * @param {[type]} me [description]
   */
    SocketIoService.prototype.calculateTotal = function () {
        var me = this;
        var base_total = 0;
        Object.keys(me.clientWalletSelModel.base_balance_arr).forEach(function (key) {
            base_total += me.clientWalletSelModel.base_balance_arr[key];
        });
        var quote_total = 0;
        Object.keys(me.clientWalletSelModel.quote_balance_arr).forEach(function (key) {
            quote_total += me.clientWalletSelModel.quote_balance_arr[key];
        });
        // let cash_total:number = 0;
        // Object.keys(me.clientWalletSelModel.cash_balance_arr).forEach(function(key){
        //   cash_total += me.clientWalletSelModel.cash_balance_arr[key];
        // });
        me.clientWalletSelModel.base_balance_total = base_total;
        me.clientWalletSelModel.quote_balance_total = quote_total;
        // me.clientWalletSelModel.cash_balance_total = cash_total;
    };
    SocketIoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_frontend_service__WEBPACK_IMPORTED_MODULE_2__["FrontendService"]])
    ], SocketIoService);
    return SocketIoService;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! D:\wamp\www\project_base\bit-base\v0.2\ng-bitbase\src\main.ts */"./src/main.ts");


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