function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/components/page-not-found404/page-not-found404.component */
    "./src/app/core/components/page-not-found404/page-not-found404.component.ts");
    /* harmony import */


    var _core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/providers/auth.guard.service */
    "./src/app/core/providers/auth.guard.service.ts");

    var routes = [{
      path: "",
      redirectTo: "/auth",
      pathMatch: "full",
      canActivate: [_core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: "auth",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-authentication-authentication-module */
        "pages-authentication-authentication-module").then(__webpack_require__.bind(null,
        /*! ./pages/authentication/authentication.module */
        "./src/app/pages/authentication/authentication.module.ts")).then(function (m) {
          return m.AuthenticationModule;
        });
      }
    }, {
      path: "home",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-dashboard-dashboard-module */
        "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./pages/dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      },
      canActivate: [_core_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'not-found',
      component: _core_components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFound404Component"],
      pathMatch: "full"
    }, {
      path: "**",
      redirectTo: "not-found"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_toast_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./store/actions/toast.action */
    "./src/app/store/actions/toast.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/providers/loader.service */
    "./src/app/core/providers/loader.service.ts");
    /* harmony import */


    var _core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/providers/toast.service */
    "./src/app/core/providers/toast.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store, loadingService, toastService) {
        _classCallCheck(this, AppComponent);

        this.store = store;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.loadingText = "Loading...";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // toast show and clear state
          this.toastSubscription = this.store.select('toastInfo').subscribe(function (toast) {
            if (toast.isToast) {
              _this.toastService.showToastMessage(toast.type, toast.title, toast.message);
            } else {
              _this.store.dispatch(new _store_actions_toast_action__WEBPACK_IMPORTED_MODULE_1__["ToastHideRequested"]());
            }
          }); // loading show and hide with clear state

          this.loadingSubscription = this.store.select('loadingInfo').subscribe(function (loading) {
            if (loading.isLoading) {
              _this.loadingText = loading.message;

              _this.loadingService.loadingShow();
            } else {
              _this.loadingService.loadingHide();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.toastSubscription) {
            this.toastSubscription.unsubscribe();
          }

          if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 1,
      consts: [["size", "medium", "color", "#87B074", "type", "ball-spin-clockwise", "text", "Loading..."], [2, "font-size", "20px", "color", "white"], [1, "main__wrapper"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loadingText);
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".main__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkaWsua290aGFyaS9Eb2N1bWVudHMvUHJvamVjdHMtRGF0YS9jb3JvbmEtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX193cmFwcGVye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIubWFpbl9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _core_providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: _core_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/reducers/app.reducer */
    "./src/app/store/reducers/app.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/effects/auth.effects */
    "./src/app/store/effects/auth.effects.ts");
    /* harmony import */


    var _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/effects/dashboard.effect */
    "./src/app/store/effects/dashboard.effect.ts");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // ngrx module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__["AuthEffects"], _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__["DashboardEffect"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
        maxAge: 25
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_9__["AuthEffects"], _store_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_10__["DashboardEffect"]]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
            maxAge: 25
          }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/page-not-found404/page-not-found404.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/core/components/page-not-found404/page-not-found404.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PageNotFound404Component */

  /***/
  function srcAppCoreComponentsPageNotFound404PageNotFound404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFound404Component", function () {
      return PageNotFound404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFound404Component = /*#__PURE__*/function () {
      function PageNotFound404Component() {
        _classCallCheck(this, PageNotFound404Component);
      }

      _createClass(PageNotFound404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFound404Component;
    }();

    PageNotFound404Component.ɵfac = function PageNotFound404Component_Factory(t) {
      return new (t || PageNotFound404Component)();
    };

    PageNotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFound404Component,
      selectors: [["app-page-not-found404"]],
      decls: 2,
      vars: 0,
      template: function PageNotFound404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " page-not-found404 works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZDQwNC9wYWdlLW5vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFound404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found404',
          templateUrl: './page-not-found404.component.html',
          styleUrls: ['./page-not-found404.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/toastr.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/components/toastr.component.ts ***!
    \*****************************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcAppCoreComponentsToastrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["toast-component", ""];

    function ToastComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.options.titleClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
      }
    }

    function ToastComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_a_5_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.action($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.undoString, " ");
      }
    }

    function ToastComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToastComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.remove();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ToastComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.options.messageClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function ToastComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r4.options.messageClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r4.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.message, " ");
      }
    }

    function ToastComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r5.width + "%");
      }
    }

    var ToastComponent = /*#__PURE__*/function (_ngx_toastr__WEBPACK_) {
      _inherits(ToastComponent, _ngx_toastr__WEBPACK_);

      var _super = _createSuper(ToastComponent);

      // constructor is only necessary when not using AoT
      function ToastComponent(toastrService, toastPackage) {
        var _this2;

        _classCallCheck(this, ToastComponent);

        _this2 = _super.call(this, toastrService, toastPackage);
        _this2.toastrService = toastrService;
        _this2.toastPackage = toastPackage; // used for demo purposes

        _this2.undoString = 'undo';
        return _this2;
      }

      _createClass(ToastComponent, [{
        key: "action",
        value: function action(event) {
          event.stopPropagation();
          this.undoString = 'undid';
          this.toastPackage.triggerAction();
          return false;
        }
      }]);

      return ToastComponent;
    }(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"]);

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["", "toast-component", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      decls: 11,
      vars: 8,
      consts: [[1, "upper-row"], [1, "upper-title"], [3, "class", 4, "ngIf"], ["class", "btn btn-pink btn-sm", 3, "click", 4, "ngIf"], [1, "down-row"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-pink", "btn-sm", 3, "click"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translate3d(100%, 0, 0) ',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'none',
          opacity: 1
        })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0
        })])))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: '[toast-component]',
          template: "\n  <div [style.display]=\"state.value === 'inactive' ? 'none' : ''\">\n      <div class=\"upper-row\">\n          <div class=\"upper-title\">\n              <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n                  {{ title }}\n              </div>       \n          </div>\n\n          <div>\n              <a *ngIf=\"!options.closeButton\" class=\"btn btn-pink btn-sm\" (click)=\"action($event)\">\n                {{ undoString }}\n              </a>\n              <a *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"btn btn-pink btn-sm\">\n              close\n              </a>\n          </div>\n      </div>\n\n      <div class=\"down-row\">\n          <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n            [class]=\"options.messageClass\" [innerHTML]=\"message\">\n          </div>\n\n          <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n          [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n          {{ message }}\n          </div>\n      </div>\n\n    </div>\n    \n    <div *ngIf=\"options.progressBar\">\n      <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n    </div>\n    ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(100%, 0, 0) ',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'none',
            opacity: 1
          })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(100%, 0, 0)',
            opacity: 0
          })])))])],
          preserveWhitespaces: false
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/toastr.component */
    "./src/app/core/components/toastr.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-not-found404/page-not-found404.component */
    "./src/app/core/components/page-not-found404/page-not-found404.component.ts");
    /* harmony import */


    var _providers_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./providers/toast.service */
    "./src/app/core/providers/toast.service.ts");
    /* harmony import */


    var _providers_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./providers/api.service */
    "./src/app/core/providers/api.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./providers/auth.guard.service */
    "./src/app/core/providers/auth.guard.service.ts");
    /* harmony import */


    var _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../store/providers/auth.service */
    "./src/app/store/providers/auth.service.ts");
    /* harmony import */


    var _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../store/stores/auth.store */
    "./src/app/store/stores/auth.store.ts");
    /* harmony import */


    var _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../store/stores/dashboard.store */
    "./src/app/store/stores/dashboard.store.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./providers/loader.service */
    "./src/app/core/providers/loader.service.ts");
    /* harmony import */


    var _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./providers/modal.service */
    "./src/app/core/providers/modal.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [_providers_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _providers_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__["AuthStoreService"], _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__["DashboardStoreService"], _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"], _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
        toastComponent: _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"]
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFound404Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]],
        exports: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _components_page_not_found404_page_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFound404Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
            toastComponent: _components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"]
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]],
          exports: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]],
          entryComponents: [_components_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"]],
          providers: [_providers_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _providers_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"], _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_12__["AuthStoreService"], _store_stores_dashboard_store__WEBPACK_IMPORTED_MODULE_13__["DashboardStoreService"], _store_providers_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _providers_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"], _providers_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/providers/api.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/providers/api.service.ts ***!
    \***********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCoreProvidersApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url;
        console.log("api url on build", this.apiURL);
      }
      /**
       * handle error
       * @param error
       */


      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error.message);
        }
      }, {
        key: "setJsonDataHeaders",

        /**
         * setting a header for json data
         */
        value: function setJsonDataHeaders() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            })
          };
          return httpOptions.headers;
        }
        /**
         * get api (list)
         * @param path  api url
         * @param params req params data
         */

      }, {
        key: "get",
        value: function get(path) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        /**
         * put api call (update)
         * @param path  api url
         * @param body  req params data
         * @param isJson is json data or not
         */

      }, {
        key: "put",
        value: function put(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var isJson = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), body, {
            headers: this.setJsonDataHeaders()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        /**
         * post api call (add)
         * @param path api url
         * @param body request params
         * @param isJson is json data or not
         */

      }, {
        key: "post",
        value: function post(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var isJson = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), body, {
            headers: this.setJsonDataHeaders()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        /**
         * delete api (delete data)
         * @param path api url
         */

      }, {
        key: "delete",
        value: function _delete(path) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url).concat(path), {
            headers: this.setJsonDataHeaders()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/providers/auth.guard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/providers/auth.guard.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppCoreProvidersAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/core/providers/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService, router) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (sessionStorage.getItem('authtoken')) {
            console.log("comes gere");
            return true;
          }

          this.router.navigate(['auth']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/providers/loader.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/providers/loader.service.ts ***!
    \**************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppCoreProvidersLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var LoaderService = /*#__PURE__*/function () {
      function LoaderService(spinner) {
        _classCallCheck(this, LoaderService);

        this.spinner = spinner;
      }

      _createClass(LoaderService, [{
        key: "loadingShow",
        value: function loadingShow() {
          this.spinner.show();
        }
      }, {
        key: "loadingHide",
        value: function loadingHide() {
          this.spinner.hide();
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
    };

    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/providers/modal.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/providers/modal.service.ts ***!
    \*************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppCoreProvidersModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService(modalService) {
        _classCallCheck(this, ModalService);

        this.modalService = modalService;
      }

      _createClass(ModalService, [{
        key: "openModal",
        value: function openModal(componentname, title, message) {
          var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "lg";
          var modalRef = this.modalService.open(componentname, {
            size: 'lg'
          });
          modalRef.componentInstance.title = title;
          modalRef.componentInstance.message = message;
          var instance = modalRef._windowCmptRef.instance;
          setTimeout(function () {
            instance.windowClass += ' animate-end ';
          }, 250);
          return modalRef;
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/providers/toast.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/providers/toast.service.ts ***!
    \*************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppCoreProvidersToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastrService) {
        _classCallCheck(this, ToastService);

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

      _createClass(ToastService, [{
        key: "showToastMessage",
        value: function showToastMessage(type, title, message) {
          var positionClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'toast-top-right';
          var timeOut = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;
          this.toastOptions.positionClass = positionClass;
          this.toastOptions.timeOut = timeOut;

          switch (type) {
            case 'success':
              {
                this.toastrService.success(message, title, this.toastOptions);
                break;
              }

            case 'info':
              {
                this.toastrService.info(message, title, this.toastOptions);
                break;
              }

            case 'error':
              {
                this.toastrService.error(message, title, this.toastOptions);
                break;
              }

            case 'warning':
              {
                this.toastrService.warning(message, title, this.toastOptions);
                break;
              }

            default:
              {
                this.toastrService.info(message, title, this.toastOptions);
                break;
              }
          }
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
    };

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/actions/auth.action.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/actions/auth.action.ts ***!
    \**********************************************/

  /*! exports provided: authActionTypes, LoginRequestedAction, LoginCompletedAction, AuthErrorAction */

  /***/
  function srcAppStoreActionsAuthActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authActionTypes", function () {
      return authActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRequestedAction", function () {
      return LoginRequestedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCompletedAction", function () {
      return LoginCompletedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthErrorAction", function () {
      return AuthErrorAction;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/app/store/utils.ts");

    var authActionTypes = {
      LOGIN_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Login] -Login Requested-"),
      LOGIN_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Login] -Login Completed-"),
      AUTH_ERROR: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Auth] - Auth Error-")
    };

    var LoginRequestedAction = function LoginRequestedAction(payload) {
      _classCallCheck(this, LoginRequestedAction);

      this.payload = payload;
      this.type = authActionTypes.LOGIN_REQUESTED;
    };

    var LoginCompletedAction = function LoginCompletedAction(payload) {
      _classCallCheck(this, LoginCompletedAction);

      this.payload = payload;
      this.type = authActionTypes.LOGIN_COMPLETED;
    };

    var AuthErrorAction = function AuthErrorAction(payload) {
      _classCallCheck(this, AuthErrorAction);

      this.payload = payload;
      this.type = authActionTypes.AUTH_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/dashboard.action.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/actions/dashboard.action.ts ***!
    \***************************************************/

  /*! exports provided: dashboardActionTypes, ListRequestedAction, ListCompletedAction, ListAddRequestedAction, ListAddCompletedAction, ListDeleteRequestedAction, ListDeleteCompletedAction, ListUpdateRequestedAction, ListUpdateCompletedAction, ListErrorAction */

  /***/
  function srcAppStoreActionsDashboardActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dashboardActionTypes", function () {
      return dashboardActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRequestedAction", function () {
      return ListRequestedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListCompletedAction", function () {
      return ListCompletedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListAddRequestedAction", function () {
      return ListAddRequestedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListAddCompletedAction", function () {
      return ListAddCompletedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListDeleteRequestedAction", function () {
      return ListDeleteRequestedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListDeleteCompletedAction", function () {
      return ListDeleteCompletedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUpdateRequestedAction", function () {
      return ListUpdateRequestedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUpdateCompletedAction", function () {
      return ListUpdateCompletedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListErrorAction", function () {
      return ListErrorAction;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/app/store/utils.ts");

    var dashboardActionTypes = {
      LIST_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Requested-"),
      LIST_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Completed-"),
      LIST_DELETE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Delete Requested-"),
      LIST_DELETE_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Delete Completed-"),
      LIST_ADD_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Add Requested-"),
      LIST_ADD_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Add Completed-"),
      LIST_UPDATED_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Update Requested-"),
      LIST_UPDATED_COMPLETED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] -List Update Completed-"),
      LIST_ERROR: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Dashboard] - Auth Error-")
    };

    var ListRequestedAction = function ListRequestedAction(payload) {
      _classCallCheck(this, ListRequestedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_REQUESTED;
    };

    var ListCompletedAction = function ListCompletedAction(payload) {
      _classCallCheck(this, ListCompletedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_COMPLETED;
    };

    var ListAddRequestedAction = function ListAddRequestedAction(payload) {
      _classCallCheck(this, ListAddRequestedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_ADD_REQUESTED;
    };

    var ListAddCompletedAction = function ListAddCompletedAction(payload) {
      _classCallCheck(this, ListAddCompletedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_ADD_COMPLETED;
    };

    var ListDeleteRequestedAction = function ListDeleteRequestedAction(payload) {
      _classCallCheck(this, ListDeleteRequestedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_DELETE_REQUESTED;
    };

    var ListDeleteCompletedAction = function ListDeleteCompletedAction(payload) {
      _classCallCheck(this, ListDeleteCompletedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_DELETE_COMPLETED;
    };

    var ListUpdateRequestedAction = function ListUpdateRequestedAction(payload) {
      _classCallCheck(this, ListUpdateRequestedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_UPDATED_REQUESTED;
    };

    var ListUpdateCompletedAction = function ListUpdateCompletedAction(payload) {
      _classCallCheck(this, ListUpdateCompletedAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_UPDATED_COMPLETED;
    };

    var ListErrorAction = function ListErrorAction(payload) {
      _classCallCheck(this, ListErrorAction);

      this.payload = payload;
      this.type = dashboardActionTypes.LIST_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/loading.action.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/actions/loading.action.ts ***!
    \*************************************************/

  /*! exports provided: LoadingActionType, LoadingShowRequested, LoadingHideRequested, LoadingResetRequested */

  /***/
  function srcAppStoreActionsLoadingActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingActionType", function () {
      return LoadingActionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingShowRequested", function () {
      return LoadingShowRequested;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingHideRequested", function () {
      return LoadingHideRequested;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingResetRequested", function () {
      return LoadingResetRequested;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/app/store/utils.ts");

    var LoadingActionType = {
      LOADING_SHOW_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader show Requested-"),
      LOADING_HIDE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader hide Requested-"),
      LOADING_RESET: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Loader] -Loader Loader Requested-")
    };

    var LoadingShowRequested = function LoadingShowRequested(payload) {
      _classCallCheck(this, LoadingShowRequested);

      this.payload = payload;
      this.type = LoadingActionType.LOADING_SHOW_REQUESTED;
    };

    var LoadingHideRequested = function LoadingHideRequested() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, LoadingHideRequested);

      this.payload = payload;
      this.type = LoadingActionType.LOADING_HIDE_REQUESTED;
    };

    var LoadingResetRequested = function LoadingResetRequested() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, LoadingResetRequested);

      this.payload = payload;
      this.type = LoadingActionType.LOADING_RESET;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/toast.action.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/toast.action.ts ***!
    \***********************************************/

  /*! exports provided: ToastActionType, ToastShowRequested, ToastHideRequested, ToastResetRequested */

  /***/
  function srcAppStoreActionsToastActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastActionType", function () {
      return ToastActionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastShowRequested", function () {
      return ToastShowRequested;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastHideRequested", function () {
      return ToastHideRequested;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastResetRequested", function () {
      return ToastResetRequested;
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../utils */
    "./src/app/store/utils.ts");

    var ToastActionType = {
      TOAST_SHOW_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast show Requested-"),
      TOAST_HIDE_REQUESTED: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast hide Requested-"),
      TOAST_RESET: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["type"])("[Toast] -Toast reset Requested-")
    };

    var ToastShowRequested = function ToastShowRequested(payload) {
      _classCallCheck(this, ToastShowRequested);

      this.payload = payload;
      this.type = ToastActionType.TOAST_SHOW_REQUESTED;
    };

    var ToastHideRequested = function ToastHideRequested() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, ToastHideRequested);

      this.payload = payload;
      this.type = ToastActionType.TOAST_HIDE_REQUESTED;
    };

    var ToastResetRequested = function ToastResetRequested() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, ToastResetRequested);

      this.payload = payload;
      this.type = ToastActionType.TOAST_RESET;
    };
    /***/

  },

  /***/
  "./src/app/store/effects/auth.effects.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/effects/auth.effects.ts ***!
    \***********************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppStoreEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../actions/auth.action */
    "./src/app/store/actions/auth.action.ts");
    /* harmony import */


    var _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../actions/loading.action */
    "./src/app/store/actions/loading.action.ts");
    /* harmony import */


    var _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../actions/toast.action */
    "./src/app/store/actions/toast.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../providers/auth.service */
    "./src/app/store/providers/auth.service.ts");

    var AuthEffects = /*#__PURE__*/function () {
      function AuthEffects(authService, actions$) {
        var _this3 = this;

        _classCallCheck(this, AuthEffects);

        this.authService = authService;
        this.actions$ = actions$;
        this.loginAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["authActionTypes"].LOGIN_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.toPayload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (payload) {
          return _this3.authService.signIn(payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (res) {
          console.log("res", res);
          var loading = {
            isLoading: false,
            message: null
          };
          var toast;
          var authResponse;

          if (res.success) {
            toast = {
              type: 'success',
              message: res.message,
              title: 'SUCCESS',
              isToast: true
            };
            authResponse = {
              userData: res.data,
              isLoggedIn: true,
              success: res.success
            };
          } else {
            toast = {
              type: 'error',
              message: res.error,
              title: 'ERROR',
              isToast: true
            };
            authResponse = {
              userData: res.error,
              isLoggedIn: true,
              success: res.success,
              error: res.error
            };
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([new _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__["ToastShowRequested"](toast), new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading), new _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["LoginCompletedAction"](authResponse)]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
      }

      _createClass(AuthEffects, [{
        key: "handleError",
        value: function handleError(error) {
          var loading = {
            isLoading: false,
            message: null
          };
          var toast = {
            type: 'error',
            message: error,
            title: 'ERROR',
            isToast: true
          };
          var errorResponse = {
            success: 0,
            isLoggedIn: false,
            userData: {},
            error: error
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([new _actions_toast_action__WEBPACK_IMPORTED_MODULE_6__["ToastShowRequested"](toast), new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading), new _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["AuthErrorAction"](errorResponse)]);
        }
      }, {
        key: "toPayload",
        value: function toPayload(action) {
          return action.payload;
        }
      }]);

      return AuthEffects;
    }();

    AuthEffects.ɵfac = function AuthEffects_Factory(t) {
      return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]));
    };

    AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthEffects,
      factory: AuthEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AuthEffects.prototype, "loginAction$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }];
      }, {
        loginAction$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/effects/dashboard.effect.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/effects/dashboard.effect.ts ***!
    \***************************************************/

  /*! exports provided: DashboardEffect */

  /***/
  function srcAppStoreEffectsDashboardEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardEffect", function () {
      return DashboardEffect;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../actions/dashboard.action */
    "./src/app/store/actions/dashboard.action.ts");
    /* harmony import */


    var _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../actions/loading.action */
    "./src/app/store/actions/loading.action.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../providers/auth.service */
    "./src/app/store/providers/auth.service.ts");

    var DashboardEffect = /*#__PURE__*/function () {
      function DashboardEffect(authService, actions$) {
        var _this4 = this;

        _classCallCheck(this, DashboardEffect);

        this.authService = authService;
        this.actions$ = actions$;
        this.getNotes$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["dashboardActionTypes"].LIST_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.toPayload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (payload) {
          return _this4.authService.getList(payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (res) {
          var loading = {
            isLoading: false,
            message: null
          };
          var dashboardResponse;
          var list = [];

          if (res && res.length > 0) {
            list = res.slice(0, 10);
            list = list.map(function (item, index) {
              return {
                id: Math.floor(Math.random() * 100),
                title: item.provinceState,
                name: item.combinedKey
              };
            });
            dashboardResponse = {
              list: list
            };
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading), new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["ListCompletedAction"](dashboardResponse)]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
      }

      _createClass(DashboardEffect, [{
        key: "handleError",
        value: function handleError(error) {
          var loading = {
            isLoading: false,
            message: null
          };
          var errorResponse = {
            list: []
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])([new _actions_loading_action__WEBPACK_IMPORTED_MODULE_5__["LoadingHideRequested"](loading), new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_4__["ListErrorAction"](errorResponse)]);
        }
      }, {
        key: "toPayload",
        value: function toPayload(action) {
          return action.payload;
        }
      }]);

      return DashboardEffect;
    }();

    DashboardEffect.ɵfac = function DashboardEffect_Factory(t) {
      return new (t || DashboardEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]));
    };

    DashboardEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DashboardEffect,
      factory: DashboardEffect.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], DashboardEffect.prototype, "getNotes$", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }];
      }, {
        getNotes$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/store/providers/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/providers/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppStoreProvidersAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../core/providers/api.service */
    "./src/app/core/providers/api.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(apiService) {
        _classCallCheck(this, AuthService);

        this.apiService = apiService;
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(authData) {
          if (authData.email == "covid19@gmail.com" && authData.password == "covid@123") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
              message: "Successfully loggedin",
              success: true,
              data: {
                email: authData.email,
                authToken: "zstfwrefcdvqhabbzudchhckeqweloil"
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
              message: "User is not exist!",
              success: false,
              error: "User is not exist!"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
          }
        }
      }, {
        key: "getList",
        value: function getList(authData) {
          var today = this.formatDate();
          return this.apiService.get('daily/' + today);
        }
      }, {
        key: "formatDate",
        value: function formatDate() {
          var d = new Date(),
              month = '' + (d.getMonth() + 1),
              day = '' + (d.getDate() - 1),
              year = d.getFullYear();
          return [month, day, year].join('-');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _core_providers_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/reducers/app.reducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/reducers/app.reducer.ts ***!
    \***********************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppStoreReducersAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.reducer */
    "./src/app/store/reducers/auth.reducer.ts");
    /* harmony import */


    var _toast_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast.reducer */
    "./src/app/store/reducers/toast.reducer.ts");
    /* harmony import */


    var _loading_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading.reducer */
    "./src/app/store/reducers/loading.reducer.ts");
    /* harmony import */


    var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.reducer */
    "./src/app/store/reducers/dashboard.reducer.ts");

    var reducers = {
      authInfo: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
      toastInfo: _toast_reducer__WEBPACK_IMPORTED_MODULE_1__["ToastReducer"],
      loadingInfo: _loading_reducer__WEBPACK_IMPORTED_MODULE_2__["LoadingReducer"],
      dashboardInfo: _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__["dashboardReducer"]
    };
    /***/
  },

  /***/
  "./src/app/store/reducers/auth.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/auth.reducer.ts ***!
    \************************************************/

  /*! exports provided: authInitalState, authReducer */

  /***/
  function srcAppStoreReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authInitalState", function () {
      return authInitalState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authReducer", function () {
      return authReducer;
    });
    /* harmony import */


    var _actions_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../actions/auth.action */
    "./src/app/store/actions/auth.action.ts");

    var authInitalState = {
      userData: null,
      isLoggedIn: false,
      success: null
    };

    function authReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : authInitalState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_auth_action__WEBPACK_IMPORTED_MODULE_0__["authActionTypes"].LOGIN_COMPLETED:
          {
            return Object.assign({}, state, action.payload);
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/dashboard.reducer.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/reducers/dashboard.reducer.ts ***!
    \*****************************************************/

  /*! exports provided: listInitalState, dashboardReducer */

  /***/
  function srcAppStoreReducersDashboardReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listInitalState", function () {
      return listInitalState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dashboardReducer", function () {
      return dashboardReducer;
    });
    /* harmony import */


    var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../actions/dashboard.action */
    "./src/app/store/actions/dashboard.action.ts");

    var listInitalState = {
      list: []
    };

    function dashboardReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : listInitalState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_COMPLETED:
          {
            return Object.assign({}, state, action.payload);
          }

        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_ADD_REQUESTED:
          {
            var id = Math.floor(Math.random() * 100);
            var note = Object.assign({
              id: id
            }, action.payload);
            var list = [note].concat(_toConsumableArray(state.list));
            var data = {
              list: list
            };
            return Object.assign({}, state, data);
          }

        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_DELETE_REQUESTED:
          {
            if (state.list && state.list.length > 0) {
              var index = state.list.findIndex(function (item) {
                return item.id === action.payload.id;
              });

              if (index !== -1) {
                var _list = _toConsumableArray(state.list);

                _list.splice(index, 1);

                var _data = {
                  list: _list
                };
                return Object.assign({}, state, _data);
              }
            }
          }

        case _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_0__["dashboardActionTypes"].LIST_UPDATED_REQUESTED:
          {
            return Object.assign({}, state, action.payload);
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/loading.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/reducers/loading.reducer.ts ***!
    \***************************************************/

  /*! exports provided: LoadingInitialState, LoadingReducer */

  /***/
  function srcAppStoreReducersLoadingReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingInitialState", function () {
      return LoadingInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingReducer", function () {
      return LoadingReducer;
    });
    /* harmony import */


    var _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/loading.action */
    "./src/app/store/actions/loading.action.ts");

    var LoadingInitialState = {
      isLoading: false,
      message: null
    };

    function LoadingReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LoadingInitialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__["LoadingActionType"].LOADING_SHOW_REQUESTED:
          {
            return Object.assign({}, state, action.payload);
          }

        case _actions_loading_action__WEBPACK_IMPORTED_MODULE_0__["LoadingActionType"].LOADING_HIDE_REQUESTED:
          {
            return LoadingInitialState;
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/toast.reducer.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/reducers/toast.reducer.ts ***!
    \*************************************************/

  /*! exports provided: toastInitialState, ToastReducer */

  /***/
  function srcAppStoreReducersToastReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toastInitialState", function () {
      return toastInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastReducer", function () {
      return ToastReducer;
    });
    /* harmony import */


    var _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/toast.action */
    "./src/app/store/actions/toast.action.ts");

    var toastInitialState = {
      title: null,
      message: null,
      type: null,
      isToast: false
    };

    function ToastReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : toastInitialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_SHOW_REQUESTED:
          {
            return Object.assign({}, state, action.payload);
          }

        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_HIDE_REQUESTED:
        case _actions_toast_action__WEBPACK_IMPORTED_MODULE_0__["ToastActionType"].TOAST_RESET:
          {
            return toastInitialState;
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/stores/auth.store.ts":
  /*!********************************************!*\
    !*** ./src/app/store/stores/auth.store.ts ***!
    \********************************************/

  /*! exports provided: AuthStoreService */

  /***/
  function srcAppStoreStoresAuthStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthStoreService", function () {
      return AuthStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/auth.action */
    "./src/app/store/actions/auth.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var AuthStoreService = /*#__PURE__*/function () {
      function AuthStoreService(store) {
        _classCallCheck(this, AuthStoreService);

        this.store = store;
      }

      _createClass(AuthStoreService, [{
        key: "dispatchLoginAction",
        value: function dispatchLoginAction(user) {
          this.store.dispatch(new _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__["LoginRequestedAction"](user));
        }
      }, {
        key: "storeSelect",
        value: function storeSelect() {
          return this.store.select('authInfo');
        }
      }]);

      return AuthStoreService;
    }();

    AuthStoreService.ɵfac = function AuthStoreService_Factory(t) {
      return new (t || AuthStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AuthStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthStoreService,
      factory: AuthStoreService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/stores/dashboard.store.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/stores/dashboard.store.ts ***!
    \*************************************************/

  /*! exports provided: DashboardStoreService */

  /***/
  function srcAppStoreStoresDashboardStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardStoreService", function () {
      return DashboardStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/dashboard.action */
    "./src/app/store/actions/dashboard.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var DashboardStoreService = /*#__PURE__*/function () {
      function DashboardStoreService(store) {
        _classCallCheck(this, DashboardStoreService);

        this.store = store;
      }

      _createClass(DashboardStoreService, [{
        key: "dispatchListAction",
        value: function dispatchListAction(item) {
          this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListRequestedAction"](item));
        }
      }, {
        key: "dispatchListAddAction",
        value: function dispatchListAddAction(item) {
          this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListAddRequestedAction"](item));
        }
      }, {
        key: "dispatchListDeleteAction",
        value: function dispatchListDeleteAction(item) {
          this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListDeleteRequestedAction"](item));
        }
      }, {
        key: "dispatchListUpdateAction",
        value: function dispatchListUpdateAction(item) {
          this.store.dispatch(new _actions_dashboard_action__WEBPACK_IMPORTED_MODULE_1__["ListUpdateRequestedAction"](item));
        }
      }, {
        key: "storeSelect",
        value: function storeSelect() {
          return this.store.select('dashboardInfo');
        }
      }]);

      return DashboardStoreService;
    }();

    DashboardStoreService.ɵfac = function DashboardStoreService_Factory(t) {
      return new (t || DashboardStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    DashboardStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardStoreService,
      factory: DashboardStoreService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/utils.ts":
  /*!********************************!*\
    !*** ./src/app/store/utils.ts ***!
    \********************************/

  /*! exports provided: type */

  /***/
  function srcAppStoreUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "type", function () {
      return type;
    });
    /**
     * This function coerces a string into a string literal type.
     * Using tagged union types in TypeScript 2.0, this enables
     * powerful typechecking of our reducers.
     *
     * Since every action label passes through this function it
     * is a good place to ensure all of our action labels
     * are unique.
     */


    var typeCache = {};

    function type(label) {
      if (typeCache[label]) {
        throw new Error("Action type \"".concat(label, "\" is not unique\""));
      }

      typeCache[label] = true;
      return label;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api_url: 'http://covid19.mathdro.id/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hardik.kothari/Documents/Projects-Data/corona-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map