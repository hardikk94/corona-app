(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/page-not-found404/page-not-found404.component */ "./src/app/core/components/page-not-found404/page-not-found404.component.ts");
/* harmony import */ var _core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/providers/auth.guard.service */ "./src/app/core/providers/auth.guard.service.ts");






const routes = [
    {
        path: "",
        redirectTo: "/auth",
        pathMatch: "full",
        canActivate: [_core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: "auth",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-authentication-authentication-module */ "pages-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./pages/authentication/authentication.module */ "./src/app/pages/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
    },
    {
        path: "home",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
        canActivate: [_core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'not-found',
        component: _core_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFound404Component"],
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "not-found"
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions_toast_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/toast.action */ "./src/app/store/actions/toast.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/providers/loader.service */ "./src/app/core/providers/loader.service.ts");
/* harmony import */ var _core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/providers/toast.service */ "./src/app/core/providers/toast.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent {
    constructor(store, loadingService, toastService) {
        this.store = store;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.loadingText = "Loading...";
    }
    ngOnInit() {
        // toast show and clear state
        this.toastSubscription = this.store.select('toastInfo').subscribe((toast) => {
            if (toast.isToast) {
                this.toastService.showToastMessage(toast.type, toast.title, toast.message);
            }
            else {
                this.store.dispatch(new _store_actions_toast_action__WEBPACK_IMPORTED_MODULE_1__["ToastHideRequested"]());
            }
        });
        // loading show and hide with clear state
        this.loadingSubscription = this.store.select('loadingInfo').subscribe((loading) => {
            if (loading.isLoading) {
                this.loadingText = loading.message;
                this.loadingService.loadingShow();
            }
            else {
                this.loadingService.loadingHide();
            }
        });
    }
    ngOnDestroy() {
        if (this.toastSubscription) {
            this.toastSubscription.unsubscribe();
        }
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["size", "medium", "color", "#87B074", "type", "ball-spin-clockwise", "text", "Loading..."], [2, "font-size", "20px", "color", "white"], [1, "main__wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loadingText);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".main__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkaWsua290aGFyaS9Eb2N1bWVudHMvUHJvamVjdHMtRGF0YS9jb3JvbmEtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX193cmFwcGVye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIubWFpbl9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }, { type: _core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/app.reducer */ "./src/app/store/reducers/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/auth.effects */ "./src/app/store/effects/auth.effects.ts");
/* harmony import */ var _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects/dashboard.effect */ "./src/app/store/effects/dashboard.effect.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





// ngrx module














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__["AuthEffects"], _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__["DashboardEffect"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot(),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__["AuthEffects"], _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__["DashboardEffect"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]
                ],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/page-not-found404/page-not-found404.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/page-not-found404/page-not-found404.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageNotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound404Component", function() { return PageNotFound404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFound404Component {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFound404Component.ɵfac = function PageNotFound404Component_Factory(t) { return new (t || PageNotFound404Component)(); };
PageNotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFound404Component, selectors: [["app-page-not-found404"]], decls: 2, vars: 0, template: function PageNotFound404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " page-not-found404 works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZDQwNC9wYWdlLW5vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFound404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found404',
                templateUrl: './page-not-found404.component.html',
                styleUrls: ['./page-not-found404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/toastr.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/toastr.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["toast-component", ""];
function ToastComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ToastComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.action($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.undoString, " ");
} }
function ToastComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToastComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ToastComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r4.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.message, " ");
} }
function ToastComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r5.width + "%");
} }
class ToastComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"] {
    // constructor is only necessary when not using AoT
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        // used for demo purposes
        this.undoString = 'undo';
    }
    action(event) {
        event.stopPropagation();
        this.undoString = 'undid';
        this.toastPackage.triggerAction();
        return false;
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"])); };
ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["", "toast-component", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 11, vars: 8, consts: [[1, "upper-row"], [1, "upper-title"], [3, "class", 4, "ngIf"], ["class", "btn btn-pink btn-sm", 3, "click", 4, "ngIf"], [1, "down-row"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-pink", "btn-sm", 3, "click"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastComponent_div_3_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ToastComponent_a_5_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ToastComponent_a_6_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ToastComponent_div_8_Template, 1, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ToastComponent_div_9_Template, 2, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ToastComponent_div_10_Template, 2, 2, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.state.value === "inactive" ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.options.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translate3d(100%, 0, 0) ',
                        opacity: 0,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'none',
                        opacity: 1,
                    }),
                ]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translate3d(100%, 0, 0)',
                        opacity: 0,
                    }),
                ]))),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[toast-component]',
                template: `
  <div [style.display]="state.value === 'inactive' ? 'none' : ''">
      <div class="upper-row">
          <div class="upper-title">
              <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
                  {{ title }}
              </div>       
          </div>

          <div>
              <a *ngIf="!options.closeButton" class="btn btn-pink btn-sm" (click)="action($event)">
                {{ undoString }}
              </a>
              <a *ngIf="options.closeButton" (click)="remove()" class="btn btn-pink btn-sm">
              close
              </a>
          </div>
      </div>

      <div class="down-row">
          <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
            [class]="options.messageClass" [innerHTML]="message">
          </div>

          <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
          [class]="options.messageClass" [attr.aria-label]="message">
          {{ message }}
          </div>
      </div>

    </div>
    
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'translate3d(100%, 0, 0) ',
                                opacity: 0,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'none',
                                opacity: 1,
                            }),
                        ]))),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'translate3d(100%, 0, 0)',
                                opacity: 0,
                            }),
                        ]))),
                    ]),
                ],
                preserveWhitespaces: false,
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toastr.component */ "./src/app/core/components/toastr.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found404/page-not-found404.component */ "./src/app/core/components/page-not-found404/page-not-found404.component.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/toast.service */ "./src/app/core/providers/toast.service.ts");
/* harmony import */ var _providers_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/api.service */ "./src/app/core/providers/api.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/auth.guard.service */ "./src/app/core/providers/auth.guard.service.ts");
/* harmony import */ var _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../store/providers/auth.service */ "./src/app/store/providers/auth.service.ts");
/* harmony import */ var _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../store/stores/auth.store */ "./src/app/store/stores/auth.store.ts");
/* harmony import */ var _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../store/stores/dashboard.store */ "./src/app/store/stores/dashboard.store.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/loader.service */ "./src/app/core/providers/loader.service.ts");
/* harmony import */ var _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/modal.service */ "./src/app/core/providers/modal.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




















class CoreModule {
    constructor() {
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _providers_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _providers_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
        _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__["AuthStoreService"],
        _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__["DashboardStoreService"],
        _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
        _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
                toastComponent: _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]
        ],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
        _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFound404Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]], exports: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
                    _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFound404Component"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
                        toastComponent: _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
                    }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]
                ],
                exports: [
                    _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                ],
                entryComponents: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"]],
                providers: [
                    _providers_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
                    _providers_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
                    _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
                    _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__["AuthStoreService"],
                    _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__["DashboardStoreService"],
                    _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                    _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
                    _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"],
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/providers/api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/providers/api.service.ts ***!
  \***********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");







class ApiService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url;
        console.log("api url on build", this.apiURL);
    }
    /**
     * handle error
     * @param error
     */
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error.message);
    }
    ;
    /**
     * setting a header for json data
     */
    setJsonDataHeaders() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            })
        };
        return httpOptions.headers;
    }
    /**
     * get api (list)
     * @param path  api url
     * @param params req params data
     */
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}${path}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /**
     * put api call (update)
     * @param path  api url
     * @param body  req params data
     * @param isJson is json data or not
     */
    put(path, body = {}, isJson = true) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}${path}`, body, { headers: this.setJsonDataHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /**
     * post api call (add)
     * @param path api url
     * @param body request params
     * @param isJson is json data or not
     */
    post(path, body = {}, isJson = true) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}${path}`, body, { headers: this.setJsonDataHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /**
     * delete api (delete data)
     * @param path api url
     */
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url}${path}`, { headers: this.setJsonDataHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/providers/auth.guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/providers/auth.guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/providers/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem('authtoken')) {
            console.log("comes gere");
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/providers/loader.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/providers/loader.service.ts ***!
  \**************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");



class LoaderService {
    constructor(spinner) {
        this.spinner = spinner;
    }
    loadingShow() {
        this.spinner.show();
    }
    loadingHide() {
        this.spinner.hide();
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/providers/modal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/providers/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class ModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal(componentname, title, message, size = "lg") {
        const modalRef = this.modalService.open(componentname, { size: 'lg' });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        const instance = modalRef._windowCmptRef.instance;
        setTimeout(() => {
            instance.windowClass += ' animate-end ';
        }, 250);
        return modalRef;
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/providers/toast.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/providers/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class ToastService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.toastOptions = {
            closeButton: true,
            progressBar: false,
            progressAnimation: "increasing",
            titleClass: "toast-title",
            messageClass: "toast-message",
            maxOpened: 3
        };
    }
    showToastMessage(type, title, message, positionClass = 'toast-top-right', timeOut = 5000) {
        this.toastOptions.positionClass = positionClass;
        this.toastOptions.timeOut = timeOut;
        switch (type) {
            case 'success': {
                this.toastrService.success(message, title, this.toastOptions);
                break;
            }
            case 'info': {
                this.toastrService.info(message, title, this.toastOptions);
                break;
            }
            case 'error': {
                this.toastrService.error(message, title, this.toastOptions);
                break;
            }
            case 'warning': {
                this.toastrService.warning(message, title, this.toastOptions);
                break;
            }
            default: {
                this.toastrService.info(message, title, this.toastOptions);
                break;
            }
        }
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/actions/auth.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/auth.action.ts ***!
  \**********************************************/
/*! exports provided: authActionTypes, LoginRequestedAction, LoginCompletedAction, AuthErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authActionTypes", function() { return authActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequestedAction", function() { return LoginRequestedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCompletedAction", function() { return LoginCompletedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthErrorAction", function() { return AuthErrorAction; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/store/utils.ts");

const authActionTypes = {
    LOGIN_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Login] -Login Requested-"),
    LOGIN_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Login] -Login Completed-"),
    AUTH_ERROR: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Auth] - Auth Error-"),
};
class LoginRequestedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionTypes.LOGIN_REQUESTED;
    }
}
class LoginCompletedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionTypes.LOGIN_COMPLETED;
    }
}
class AuthErrorAction {
    constructor(payload) {
        this.payload = payload;
        this.type = authActionTypes.AUTH_ERROR;
    }
}


/***/ }),

/***/ "./src/app/store/actions/dashboard.action.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/dashboard.action.ts ***!
  \***************************************************/
/*! exports provided: dashboardActionTypes, ListRequestedAction, ListCompletedAction, ListAddRequestedAction, ListAddCompletedAction, ListDeleteRequestedAction, ListDeleteCompletedAction, ListUpdateRequestedAction, ListUpdateCompletedAction, ListErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardActionTypes", function() { return dashboardActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRequestedAction", function() { return ListRequestedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCompletedAction", function() { return ListCompletedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAddRequestedAction", function() { return ListAddRequestedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAddCompletedAction", function() { return ListAddCompletedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDeleteRequestedAction", function() { return ListDeleteRequestedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDeleteCompletedAction", function() { return ListDeleteCompletedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUpdateRequestedAction", function() { return ListUpdateRequestedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUpdateCompletedAction", function() { return ListUpdateCompletedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorAction", function() { return ListErrorAction; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/store/utils.ts");

const dashboardActionTypes = {
    LIST_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Requested-"),
    LIST_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Completed-"),
    LIST_DELETE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Delete Requested-"),
    LIST_DELETE_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Delete Completed-"),
    LIST_ADD_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Add Requested-"),
    LIST_ADD_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Add Completed-"),
    LIST_UPDATED_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Update Requested-"),
    LIST_UPDATED_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Update Completed-"),
    LIST_ERROR: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] - Auth Error-"),
};
class ListRequestedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_REQUESTED;
    }
}
class ListCompletedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_COMPLETED;
    }
}
class ListAddRequestedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_ADD_REQUESTED;
    }
}
class ListAddCompletedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_ADD_COMPLETED;
    }
}
class ListDeleteRequestedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_DELETE_REQUESTED;
    }
}
class ListDeleteCompletedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_DELETE_COMPLETED;
    }
}
class ListUpdateRequestedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_UPDATED_REQUESTED;
    }
}
class ListUpdateCompletedAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_UPDATED_COMPLETED;
    }
}
class ListErrorAction {
    constructor(payload) {
        this.payload = payload;
        this.type = dashboardActionTypes.LIST_ERROR;
    }
}


/***/ }),

/***/ "./src/app/store/actions/loading.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/loading.action.ts ***!
  \*************************************************/
/*! exports provided: LoadingActionType, LoadingShowRequested, LoadingHideRequested, LoadingResetRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingActionType", function() { return LoadingActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingShowRequested", function() { return LoadingShowRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingHideRequested", function() { return LoadingHideRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingResetRequested", function() { return LoadingResetRequested; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/store/utils.ts");

const LoadingActionType = {
    LOADING_SHOW_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader show Requested-"),
    LOADING_HIDE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader hide Requested-"),
    LOADING_RESET: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader Loader Requested-")
};
class LoadingShowRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = LoadingActionType.LOADING_SHOW_REQUESTED;
    }
}
class LoadingHideRequested {
    constructor(payload = null) {
        this.payload = payload;
        this.type = LoadingActionType.LOADING_HIDE_REQUESTED;
    }
}
class LoadingResetRequested {
    constructor(payload = null) {
        this.payload = payload;
        this.type = LoadingActionType.LOADING_RESET;
    }
}


/***/ }),

/***/ "./src/app/store/actions/toast.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/toast.action.ts ***!
  \***********************************************/
/*! exports provided: ToastActionType, ToastShowRequested, ToastHideRequested, ToastResetRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastActionType", function() { return ToastActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastShowRequested", function() { return ToastShowRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastHideRequested", function() { return ToastHideRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastResetRequested", function() { return ToastResetRequested; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/store/utils.ts");

const ToastActionType = {
    TOAST_SHOW_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast show Requested-"),
    TOAST_HIDE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast hide Requested-"),
    TOAST_RESET: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast reset Requested-")
};
class ToastShowRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = ToastActionType.TOAST_SHOW_REQUESTED;
    }
}
class ToastHideRequested {
    constructor(payload = null) {
        this.payload = payload;
        this.type = ToastActionType.TOAST_HIDE_REQUESTED;
    }
}
class ToastResetRequested {
    constructor(payload = null) {
        this.payload = payload;
        this.type = ToastActionType.TOAST_RESET;
    }
}


/***/ }),

/***/ "./src/app/store/effects/auth.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions/auth.action */ "./src/app/store/actions/auth.action.ts");
/* harmony import */ var _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/loading.action */ "./src/app/store/actions/loading.action.ts");
/* harmony import */ var _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../actions/toast.action */ "./src/app/store/actions/toast.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/auth.service */ "./src/app/store/providers/auth.service.ts");











class AuthEffects {
    constructor(authService, actions$) {
        this.authService = authService;
        this.actions$ = actions$;
        this.loginAction$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["authActionTypes"].LOGIN_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.toPayload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(payload => this.authService.signIn(payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])((res) => {
            console.log("res", res);
            let loading = { isLoading: false, message: null };
            let toast;
            let authResponse;
            if (res.success) {
                toast = { type: 'success', message: res.message, title: 'SUCCESS', isToast: true };
                authResponse = { userData: res.data, isLoggedIn: true, success: res.success };
            }
            else {
                toast = { type: 'error', message: res.error, title: 'ERROR', isToast: true };
                authResponse = { userData: res.error, isLoggedIn: true, success: res.success, error: res.error };
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([
                (new _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__["ToastShowRequested"](toast)),
                (new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading)),
                (new _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["LoginCompletedAction"](authResponse))
            ]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
    }
    handleError(error) {
        let loading = { isLoading: false, message: null };
        let toast = { type: 'error', message: error, title: 'ERROR', isToast: true };
        let errorResponse = {
            success: 0,
            isLoggedIn: false,
            userData: {},
            error: error
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([
            (new _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__["ToastShowRequested"](toast)),
            (new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading)),
            (new _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["AuthErrorAction"](errorResponse))
        ]);
    }
    toPayload(action) {
        return action.payload;
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffects.prototype, "loginAction$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, { loginAction$: [] }); })();


/***/ }),

/***/ "./src/app/store/effects/dashboard.effect.ts":
/*!***************************************************!*\
  !*** ./src/app/store/effects/dashboard.effect.ts ***!
  \***************************************************/
/*! exports provided: DashboardEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffect", function() { return DashboardEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions/dashboard.action */ "./src/app/store/actions/dashboard.action.ts");
/* harmony import */ var _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/loading.action */ "./src/app/store/actions/loading.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/auth.service */ "./src/app/store/providers/auth.service.ts");










class DashboardEffect {
    constructor(authService, actions$) {
        this.authService = authService;
        this.actions$ = actions$;
        this.getNotes$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["dashboardActionTypes"].LIST_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.toPayload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(payload => this.authService.getList(payload)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((res) => {
            let loading = { isLoading: false, message: null };
            let dashboardResponse;
            let list = [];
            if (res && res.length > 0) {
                list = res.slice(0, 10);
                list = list.map((item, index) => {
                    return {
                        id: Math.floor(Math.random() * 100),
                        title: item.provinceState,
                        name: item.combinedKey
                    };
                });
                dashboardResponse = { list };
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([
                (new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading)),
                (new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["ListCompletedAction"](dashboardResponse))
            ]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    handleError(error) {
        let loading = { isLoading: false, message: null };
        let errorResponse = {
            list: []
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([
            (new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading)),
            (new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["ListErrorAction"](errorResponse))
        ]);
    }
    toPayload(action) {
        return action.payload;
    }
}
DashboardEffect.ɵfac = function DashboardEffect_Factory(t) { return new (t || DashboardEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
DashboardEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardEffect, factory: DashboardEffect.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DashboardEffect.prototype, "getNotes$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, { getNotes$: [] }); })();


/***/ }),

/***/ "./src/app/store/providers/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/store/providers/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/providers/api.service */ "./src/app/core/providers/api.service.ts");





class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    signIn(authData) {
        if (authData.email == "covid19@gmail.com" && authData.password == "covid@123") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                message: "Successfully loggedin",
                success: true,
                data: {
                    email: authData.email,
                    authToken: "zstfwrefcdvqhabbzudchhckeqweloil"
                },
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                message: "User is not exist!",
                success: false,
                error: "User is not exist!"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
        }
    }
    getList(authData) {
        let today = this.formatDate();
        return this.apiService.get('daily/' + today);
    }
    formatDate() {
        var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + (d.getDate() - 1), year = d.getFullYear();
        return [month, day, year].join('-');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/reducers/app.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
/* harmony import */ var _toast_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.reducer */ "./src/app/store/reducers/toast.reducer.ts");
/* harmony import */ var _loading_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.reducer */ "./src/app/store/reducers/loading.reducer.ts");
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.reducer */ "./src/app/store/reducers/dashboard.reducer.ts");




const reducers = {
    authInfo: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    toastInfo: _toast_reducer__WEBPACK_IMPORTED_MODULE_1__["ToastReducer"],
    loadingInfo: _loading_reducer__WEBPACK_IMPORTED_MODULE_2__["LoadingReducer"],
    dashboardInfo: _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__["dashboardReducer"]
};


/***/ }),

/***/ "./src/app/store/reducers/auth.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/*! exports provided: authInitalState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitalState", function() { return authInitalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/auth.action */ "./src/app/store/actions/auth.action.ts");

const authInitalState = {
    userData: null,
    isLoggedIn: false,
    success: null
};
function authReducer(state = authInitalState, action) {
    switch (action.type) {
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_0__["authActionTypes"].LOGIN_COMPLETED: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/reducers/dashboard.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/dashboard.reducer.ts ***!
  \*****************************************************/
/*! exports provided: listInitalState, dashboardReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listInitalState", function() { return listInitalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardReducer", function() { return dashboardReducer; });
/* harmony import */ var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/dashboard.action */ "./src/app/store/actions/dashboard.action.ts");

const listInitalState = {
    list: [],
};
function dashboardReducer(state = listInitalState, action) {
    switch (action.type) {
        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_COMPLETED: {
            return Object.assign({}, state, action.payload);
        }
        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_ADD_REQUESTED: {
            let id = Math.floor(Math.random() * 100);
            let note = Object.assign({ id }, action.payload);
            let list = [note, ...state.list];
            let data = {
                list
            };
            return Object.assign({}, state, data);
        }
        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_DELETE_REQUESTED: {
            if (state.list && state.list.length > 0) {
                let index = state.list.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    let list = [...state.list];
                    list.splice(index, 1);
                    let data = {
                        list
                    };
                    return Object.assign({}, state, data);
                }
            }
        }
        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_UPDATED_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/reducers/loading.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/loading.reducer.ts ***!
  \***************************************************/
/*! exports provided: LoadingInitialState, LoadingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInitialState", function() { return LoadingInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingReducer", function() { return LoadingReducer; });
/* harmony import */ var _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/loading.action */ "./src/app/store/actions/loading.action.ts");

const LoadingInitialState = {
    isLoading: false,
    message: null,
};
function LoadingReducer(state = LoadingInitialState, action) {
    switch (action.type) {
        case _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__["LoadingActionType"].LOADING_SHOW_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        case _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__["LoadingActionType"].LOADING_HIDE_REQUESTED: {
            return LoadingInitialState;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/reducers/toast.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/toast.reducer.ts ***!
  \*************************************************/
/*! exports provided: toastInitialState, ToastReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastInitialState", function() { return toastInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastReducer", function() { return ToastReducer; });
/* harmony import */ var _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/toast.action */ "./src/app/store/actions/toast.action.ts");

const toastInitialState = {
    title: null,
    message: null,
    type: null,
    isToast: false
};
function ToastReducer(state = toastInitialState, action) {
    switch (action.type) {
        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_SHOW_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_HIDE_REQUESTED:
        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_RESET: {
            return toastInitialState;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/stores/auth.store.ts":
/*!********************************************!*\
  !*** ./src/app/store/stores/auth.store.ts ***!
  \********************************************/
/*! exports provided: AuthStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStoreService", function() { return AuthStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.action */ "./src/app/store/actions/auth.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class AuthStoreService {
    constructor(store) {
        this.store = store;
    }
    dispatchLoginAction(user) {
        this.store.dispatch(new _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["LoginRequestedAction"](user));
    }
    storeSelect() {
        return this.store.select('authInfo');
    }
}
AuthStoreService.ɵfac = function AuthStoreService_Factory(t) { return new (t || AuthStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AuthStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthStoreService, factory: AuthStoreService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/stores/dashboard.store.ts":
/*!*************************************************!*\
  !*** ./src/app/store/stores/dashboard.store.ts ***!
  \*************************************************/
/*! exports provided: DashboardStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardStoreService", function() { return DashboardStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/dashboard.action */ "./src/app/store/actions/dashboard.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class DashboardStoreService {
    constructor(store) {
        this.store = store;
    }
    dispatchListAction(item) {
        this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListRequestedAction"](item));
    }
    dispatchListAddAction(item) {
        this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListAddRequestedAction"](item));
    }
    dispatchListDeleteAction(item) {
        this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListDeleteRequestedAction"](item));
    }
    dispatchListUpdateAction(item) {
        this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListUpdateRequestedAction"](item));
    }
    storeSelect() {
        return this.store.select('dashboardInfo');
    }
}
DashboardStoreService.ɵfac = function DashboardStoreService_Factory(t) { return new (t || DashboardStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
DashboardStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardStoreService, factory: DashboardStoreService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/utils.ts":
/*!********************************!*\
  !*** ./src/app/store/utils.ts ***!
  \********************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
const typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }
    typeCache[label] = true;
    return label;
}


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
const environment = {
    production: false,
    api_url: 'http://covid19.mathdro.id/api/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hardik.kothari/Documents/Projects-Data/corona-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map