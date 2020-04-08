(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "./src/app/pages/authentication/auth-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/auth-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/pages/authentication/components/login/login.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }
        ]
    }
];
class AuthRoutingModule {
    constructor() {
    }
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/authentication/authentication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/pages/authentication/components/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/authentication/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [], imports: [[
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]], imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
                imports: [
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/authentication/components/login/login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/authentication/components/login/login.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_store_actions_loading_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/actions/loading.action */ "./src/app/store/actions/loading.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../store/stores/auth.store */ "./src/app/store/stores/auth.store.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoginComponent_span_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_span_15_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_span_15_ng_template_2_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = ctx_r10.loginForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.email;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0)("ngIfElse", _r13);
} }
function LoginComponent_span_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be minimum 8 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_18_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_span_18_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_span_18_ng_template_2_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = ctx_r11.loginForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.minlength;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0)("ngIfElse", _r16);
} }
class LoginComponent {
    constructor(router, authStoreSevice, store, formBuilder) {
        this.router = router;
        this.authStoreSevice = authStoreSevice;
        this.store = store;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        });
        this.loginSubscriber = this.authStoreSevice
            .storeSelect()
            .subscribe((response) => {
            if (response.success) {
                sessionStorage.setItem("email", response.userData.email);
                sessionStorage.setItem("authtoken", response.userData.authToken);
                this.router.navigate(["home"]);
            }
        });
    }
    ngOnDestroy() {
        if (this.loginSubscriber) {
            this.loginSubscriber.unsubscribe();
        }
    }
    login() {
        let loadingState = {
            isLoading: true,
            message: "Authenticating..."
        };
        this.store.dispatch(new src_app_store_actions_loading_action__WEBPACK_IMPORTED_MODULE_2__["LoadingShowRequested"](loadingState));
        this.authStoreSevice.dispatchLoginAction(this.loginForm.value);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "login-page-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-lg-5", "col-md-6", "col-xs-12", "leftside"], ["src", "assets/images/img-leftside-login.png", "alt", "Corona front ene image"], [1, "col-lg-7", "col-md-6", "col-xs-12", "rightside"], [1, "login-form-wrapper"], [1, "logo-title"], [1, "info-title"], [1, "login-form"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "id", "email", "placeholder", "Email", "formControlName", "email", "name", "email", "data-toggle", "tooltip", "data-placement", "top", "title", "Email", 1, "form-control"], ["class", "form-field-error", 4, "ngIf"], ["type", "password", "id", "password", "placeholder", "password", "formControlName", "password", "name", "password", "autocomplete", "true", "data-toggle", "tooltip", "data-placement", "top", "title", "password", 1, "form-control"], [1, "action-btns-row"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-field-error"], [4, "ngIf", "ngIfElse"], ["emailRequire", ""], ["passwordRequire", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Covid-19 Tracker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome back!Please login to your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 4, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 4, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("email").dirty || ctx.loginForm.get("email").touched) && !ctx.loginForm.get("email").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loginForm.get("password").dirty || ctx.loginForm.get("password").touched) && !ctx.loginForm.get("password").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".login-page-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .rightside[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%] {\n  max-width: 360px;\n  flex: 0 0 360px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 30px;\n  color: black;\n  font-weight: bolder;\n  padding: 40px 0;\n  text-align: center;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #989898;\n  padding: 40px 0;\n  text-align: center;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 20px;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rem-forgt-linksblock[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0 55px;\n  align-items: center;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rem-forgt-linksblock[_ngcontent-%COMP%]   .forgot-pagelink[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #222;\n  text-decoration: none;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rem-forgt-linksblock[_ngcontent-%COMP%]   .forgot-pagelink[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #86b070;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action-btns-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action-btns-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 20px 0 0;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action-btns-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .terms-privacy-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n}\n.login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .terms-privacy-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n  color: #989898;\n  padding: 20px 0;\n  text-align: center;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    .leftside .image-previewer {\n  height: 100vh;\n}\n[_nghost-%COMP%]    .logo-image .image-previewer img {\n  width: 80% !important;\n}\n@media (max-width: 960px) {\n  .login-page-wrapper[_ngcontent-%COMP%]   .rightside[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .action-btns-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .login-page-wrapper[_ngcontent-%COMP%]   .rightside[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .action-btns-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin: 0 0 15px;\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%] {\n    padding: 40px 25px;\n  }\n  .login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .terms-privacy-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0 0 10px;\n  }\n  .login-page-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n}\n@media (max-width: 578px) {\n  .login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 0 0 100%;\n    height: auto;\n  }\n  .login-page-wrapper[_ngcontent-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n    max-width: 300px;\n    margin: 0 auto;\n  }\n\n  [_nghost-%COMP%]    .leftside .image-previewer {\n    height: 270px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkaWsua290aGFyaS9Eb2N1bWVudHMvUHJvamVjdHMtRGF0YS9jb3JvbmEtYXBwL3NyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLFVBQUE7QUNFSjtBREFFO0VBQ0UsVUFBQTtBQ0VKO0FEQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR047QURESTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR047QUREUTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQ0dWO0FERFE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDR1Y7QURGVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0laO0FESFk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNLZDtBREFRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRVY7QUREVTtFQUNFLGtCQUFBO0FDR1o7QURGWTtFQUNFLFNBQUE7QUNJZDtBREdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FET0E7RUFDRSxhQUFBO0FDSkY7QURPQTtFQUNFLHFCQUFBO0FDSkY7QURPQTtFQUtVO0lBQ0Usc0JBQUE7RUNSVjtFRFNVO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDUFo7QUFDRjtBRGVBO0VBRUk7SUFDRSxrQkFBQTtFQ2RKO0VEZ0JNO0lBQ0UsaUJBQUE7RUNkUjtFRGtCRTtJQUNFLGVBQUE7RUNoQko7QUFDRjtBRG9CQTtFQUVJO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VDbkJKO0VEb0JJO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDbEJOOztFRHVCQTtJQUNFLGFBQUE7RUNwQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIC5sZWZ0c2lkZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAucmlnaHRzaWRlIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5sb2dpbi1mb3JtLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgZmxleDogMCAwIDM2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmxvZ28tdGl0bGUgeyAgICAgXG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmluZm8tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBjb2xvcjogIzk4OTg5ODtcbiAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgZm9ybSB7XG4gICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbS1mb3JndC1saW5rc2Jsb2NrIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgNTVweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC5mb3Jnb3QtcGFnZWxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODZiMDcwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb24tYnRucy1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXJtcy1wcml2YWN5LXRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL2NoaWxkIGNvbXBvbmVudCAjaW1hZ2UtY29tcG9lbmVudC8vXG46aG9zdCA6Om5nLWRlZXAubGVmdHNpZGUgLmltYWdlLXByZXZpZXdlciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjpob3N0IDo6bmctZGVlcC5sb2dvLWltYWdlIC5pbWFnZS1wcmV2aWV3ZXIgaW1nIHtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciB7XG4gICAgLnJpZ2h0c2lkZSB7XG4gICAgICAubG9naW4tZm9ybS13cmFwcGVyIHtcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xuICAgICAgICAgIC5hY3Rpb24tYnRucy1yb3cge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2dpbi1wYWdlLXdyYXBwZXIge1xuICAgIC5sb2dpbi1mb3JtLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogNDBweCAyNXB4O1xuICAgICAgLnRlcm1zLXByaXZhY3ktdGV4dCB7XG4gICAgICAgIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5pbmZvLXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3OHB4KSB7XG4gIC5sb2dpbi1wYWdlLXdyYXBwZXIge1xuICAgIC5sb2dpbi1mb3JtLXdyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAubG9nby1pbWFnZSB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcC5sZWZ0c2lkZSAuaW1hZ2UtcHJldmlld2VyIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICB9XG59XG4iLCIubG9naW4tcGFnZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4tcGFnZS13cmFwcGVyIC5sZWZ0c2lkZSB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubG9naW4tcGFnZS13cmFwcGVyIC5yaWdodHNpZGUge1xuICBwYWRkaW5nOiAwO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgZmxleDogMCAwIDM2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW4tcGFnZS13cmFwcGVyIC5sb2dpbi1mb3JtLXdyYXBwZXIgLmxvZ28tdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5pbmZvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG4ubG9naW4tcGFnZS13cmFwcGVyIC5sb2dpbi1mb3JtLXdyYXBwZXIgLmxvZ2luLWZvcm0gZm9ybSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tcGFnZS13cmFwcGVyIC5sb2dpbi1mb3JtLXdyYXBwZXIgLmxvZ2luLWZvcm0gZm9ybSAucmVtLWZvcmd0LWxpbmtzYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE1cHggMCA1NXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1mb3JtIGZvcm0gLnJlbS1mb3JndC1saW5rc2Jsb2NrIC5mb3Jnb3QtcGFnZWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1mb3JtIGZvcm0gLnJlbS1mb3JndC1saW5rc2Jsb2NrIC5mb3Jnb3QtcGFnZWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjODZiMDcwO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1mb3JtIGZvcm0gLmFjdGlvbi1idG5zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sb2dpbi1wYWdlLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9naW4tZm9ybSBmb3JtIC5hY3Rpb24tYnRucy1yb3cgLmJ0biB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cbi5sb2dpbi1wYWdlLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9naW4tZm9ybSBmb3JtIC5hY3Rpb24tYnRucy1yb3cgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC50ZXJtcy1wcml2YWN5LXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5sb2dpbi1wYWdlLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAudGVybXMtcHJpdmFjeS10ZXh0IGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzk4OTg5ODtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLmxlZnRzaWRlIC5pbWFnZS1wcmV2aWV3ZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG46aG9zdCA6Om5nLWRlZXAubG9nby1pbWFnZSAuaW1hZ2UtcHJldmlld2VyIGltZyB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5sb2dpbi1wYWdlLXdyYXBwZXIgLnJpZ2h0c2lkZSAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1mb3JtIC5hY3Rpb24tYnRucy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciAucmlnaHRzaWRlIC5sb2dpbi1mb3JtLXdyYXBwZXIgLmxvZ2luLWZvcm0gLmFjdGlvbi1idG5zLXJvdyAuYnRuIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDI1cHg7XG4gIH1cbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC50ZXJtcy1wcml2YWN5LXRleHQgYSB7XG4gICAgcGFkZGluZzogMCAwIDEwcHg7XG4gIH1cbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc4cHgpIHtcbiAgLmxvZ2luLXBhZ2Utd3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5sb2dpbi1wYWdlLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9nby1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcC5sZWZ0c2lkZSAuaW1hZ2UtcHJldmlld2VyIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _store_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStoreService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module-es2015.js.map