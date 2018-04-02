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

/***/ "./src/app/Modules/auth/Components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/auth/Components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-4 is-offset-4\">\n        <h3 class=\"title has-text-grey\">Forgot Password</h3>\n        <p class=\"subtitle has-text-grey\">Please enter your Email to reset password.</p>\n        <div class=\"box\">\n          <form (submit)=\"submit()\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\">\n              </div>\n            </div>\n\n            <button class=\"button is-block is-info is-large is-fullwidth\">Submit</button>\n          </form>\n        </div>\n        <p class=\"has-text-grey\">\n          <a routerLink=\"../register\">Register</a> &nbsp;·&nbsp;\n          <a routerLink=\"../login\">Login</a> &nbsp;·&nbsp;\n          <a routerLink=\"/\">Home</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Modules/auth/Components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
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

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        return;
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/Modules/auth/Components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/Modules/auth/Components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Modules/auth/Components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/auth/Components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-4 is-offset-4\">\n        <h3 class=\"title has-text-grey\">Login</h3>\n        <p class=\"subtitle has-text-grey\">Please login to proceed.</p>\n        <div class=\"box\">\n\n          <div class=\"message is-danger\" *ngIf=\"errors.length > 0\">\n            <div class=\"message-body\">\n                <ul *ngFor=\"let error of errors\">\n                  <li>{{error}}</li>\n                </ul>\n            </div>\n          </div>\n\n          <form (ngSubmit)=\"loginForm.form.valid && submit()\" #loginForm = \"ngForm\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\" name=\"email\" [(ngModel)]=\"model.email\" #name = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"password\" placeholder=\"Your Password\" name=\"password\" [(ngModel)]=\"model.password\" #password = \"ngModel\">\n              </div>\n            </div>\n            <button class=\"button is-block is-info is-large is-fullwidth\" [disabled]=\"enabled\">Login</button>\n          </form>\n        </div>\n        <p class=\"has-text-grey\">\n          <a routerLink=\"../register\">Register</a> &nbsp;·&nbsp;\n          <a routerLink=\"/\">Home</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Modules/auth/Components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.model = {};
        this.errors = [];
        this.enabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.enabled = true;
        this.auth.login(this.model).subscribe(function (resp) {
            _this.enabled = false;
            _this.router.navigateByUrl('/');
        }, function (err) {
            _this.errors = [];
            for (var key in err['error']) {
                for (var i = 0; i < err['error'][key].length; i++) {
                    _this.errors.push(err['error'][key][i]);
                }
            }
            _this.enabled = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/Modules/auth/Components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/Modules/auth/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Modules/auth/Components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/auth/Components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-6 is-offset-3\">\n        <h3 class=\"title has-text-grey\">Register</h3>\n        <p class=\"subtitle has-text-grey\">Join the family.</p>\n        <div class=\"box\">\n\n          <div class=\"message is-danger\" *ngIf=\"errors.length > 0\">\n            <div class=\"message-body\">\n              <ul *ngFor=\"let error of errors\">\n                <li>{{error}}</li>\n              </ul>\n            </div>\n          </div>\n\n          <form (ngSubmit)=\"registerForm.form.valid && submit()\" #registerForm = \"ngForm\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"Your First Name\" autofocus=\"\" name=\"name\" [(ngModel)]=\"model.name\" #name = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"Your Last Name\" autofocus=\"\" name=\"last_name\" [(ngModel)]=\"model.last_name\" #last_name = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"email\" placeholder=\"Your Email\" autofocus=\"\" name=\"email\" [(ngModel)]=\"model.email\" #nemail = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"password\" placeholder=\"Your Password\" name=\"password\" [(ngModel)]=\"model.password\" #password = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"password\" placeholder=\"Confirm Password\" name=\"password_confirmation\" [(ngModel)]=\"model.password_confirmation\" #password_confirmation = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"model.address\" #address = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"model.city\" #city = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"Postal Code\" name=\"postal_code\" [(ngModel)]=\"model.postal_code\" #postal_code = \"ngModel\">\n              </div>\n            </div>\n\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input is-large\" type=\"text\" placeholder=\"Phone\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone = \"ngModel\">\n              </div>\n            </div>\n\n            <button class=\"button is-block is-info is-large is-fullwidth\" [disabled]=\"enabled\">Register</button>\n          </form>\n        </div>\n        <p class=\"has-text-grey\">\n          <a routerLink=\"../login\">Login</a> &nbsp;·&nbsp;\n          <a routerLink=\"/\">Home</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Modules/auth/Components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.model = {};
        this.enabled = false;
        this.errors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.enabled = true;
        this.auth.register(this.model).subscribe(function (resp) {
            console.log(resp);
            _this.enabled = false;
            _this.router.navigateByUrl('/auth/login');
        }, function (err) {
            _this.errors = [];
            for (var key in err['error']) {
                for (var i = 0; i < err['error'][key].length; i++) {
                    _this.errors.push(err['error'][key][i]);
                }
            }
            _this.enabled = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/Modules/auth/Components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/Modules/auth/Components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Modules/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_login_login_component__ = __webpack_require__("./src/app/Modules/auth/Components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_register_register_component__ = __webpack_require__("./src/app/Modules/auth/Components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("./src/app/Modules/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components



var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__Components_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_3__Components_register_register_component__["a" /* RegisterComponent */]
            },
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/Modules/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/Modules/auth/auth.component.html"),
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/Modules/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("./src/app/Modules/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_login_login_component__ = __webpack_require__("./src/app/Modules/auth/Components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_register_register_component__ = __webpack_require__("./src/app/Modules/auth/Components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("./src/app/Modules/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/Modules/auth/Components/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__Components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_7__Components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = "/*.has-bg-img{*/\r\n  /*background: url('../../../../../assets/bg.jpg');*/\r\n  /*background-position: center center;*/\r\n  /*background-repeat:  no-repeat;*/\r\n  /*background-attachment: fixed;*/\r\n  /*background-size:  cover;*/\r\n  /*}*/\r\n  /*.title, .subtitle{*/\r\n  /*color: white;*/\r\n  /*}*/\r\n  /*.container{*/\r\n  /*width: 100%;*/\r\n  /*}*/\r\n  /*.hero-body-modif {*/\r\n  /*padding: 10rem 5rem;*/\r\n  /*}*/\r\n  /*@media screen and (min-width: 769px) {*/\r\n  /*.hero.is-medium .hero-body-modif {*/\r\n  /*padding-bottom: 12rem;*/\r\n  /*padding-top: 14rem;*/\r\n  /*}*/\r\n  /*}*/\r\n  .carousel{\r\n  margin-top: 50px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"hero is-medium is-bold has-bg-img\">-->\n  <!--<div class=\"hero-body hero-body-modif\">-->\n    <!--<div class=\"container has-text-centered\">-->\n      <!--<h1 class=\"title\">-->\n        <!--Welcome To DyzDev-->\n      <!--</h1>-->\n      <!--<h2 class=\"subtitle\">-->\n        <!--You're One Way Stop To The Best Game Store.-->\n      <!--</h2>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n<div class='carousel carousel-animated carousel-animate-slide' data-autoplay=\"true\">\n  <div class='carousel-container'>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://d2yca1enuxtdrs.cloudfront.net/images/resize/product/1240/e40570369c009b7859431bbfc7aba845.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"http://www.ytgraphics.com/wp-content/uploads/2014/04/cod-ghosts.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://media.contentapi.ea.com/content/dam/ea/easports/fifa/ultimate-team/campaigns/2018/home-page-toty/fifa18-homepage-topterhero-bg-md.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n    </div>\n    <div class='carousel-item has-background'>\n      <img class=\"is-background\" src=\"https://images.nvidia.com/geforce-com/international/images/final-fantasy-xv-windows-edition/final-fantasy-xv-windows-edition-nvidia-geforce-gtx-partnership-keyvisual.jpg\" alt=\"\" width=\"640\" height=\"310\" />\n    </div>\n  </div>\n  <div class=\"carousel-navigation is-overlay\">\n    <div class=\"carousel-nav-left\">\n      <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"carousel-nav-right\">\n      <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-banner',
            template: __webpack_require__("./src/app/Modules/core/Components/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n   background-color: #363636;\r\n}\r\n\r\n.footer .container .content p{\r\n  color: white;\r\n}\r\n\r\na:hover{\r\n  color: #3273dc;\r\n}\r\n\r\nstrong{\r\n  color: white;\r\n}\r\n\r\nli{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column\">\n        <ul>\n          <li><strong>DyzDev</strong></li>\n          <li><a>About Us</a></li>\n        </ul>\n      </div>\n      <div class=\"column\">\n        <ul>\n          <li><strong>Help</strong></li>\n          <li><a>Contact Us</a></li>\n          <li><a>Help and Support</a></li>\n        </ul>\n      </div>\n      <div class=\"column\">\n        <ul>\n          <li><strong>Conditions</strong></li>\n          <li><a>Terms of Service</a></li>\n          <li><a>Privacy Policy</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"content has-text-centered\">\n      <p>\n        The Website Is Made by <strong>Aldi, Yosua and Veronica</strong>.\n      </p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/Modules/core/Components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar .container .navbar-brand .navbar-item{\r\n  font-weight: bolder;\r\n}\r\n\r\n.navbar-menu{\r\n  background-color: #363636;\r\n}\r\n\r\n.navbar-item{\r\n  color: white;\r\n}\r\n\r\n.navbar {\r\n  -webkit-box-shadow: 0 8px 6px -6px #999;\r\n  box-shadow: 2px 2px 10px #0a0a0a;\r\n  /* the rest of your styling */\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-dark is-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\">\n      <a class=\"navbar-item brand-text\" routerLink=\"/\">\n        DyzDev\n      </a>\n      <div class=\"navbar-burger burger\" data-target=\"navMenu\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n    <div id=\"navMenu\" class=\"navbar-menu\">\n      <div class=\"navbar-item\">\n        <form (ngSubmit)=\"search()\" #searchForm = \"ngForm\">\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input class=\"input\" type=\"text\" placeholder=\"Search\" name=\"name\" [(ngModel)] = \"searchBody\" #name=\"ngModel\" autocomplete=\"off\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              </span>\n            </p>\n          </div>\n        </form>\n      </div>\n      <!--<div class=\"navbar-start\">-->\n        <!--<a class=\"navbar-item\">-->\n          <!--Genres-->\n        <!--</a>-->\n        <!--<a class=\"navbar-item\">-->\n          <!--Consoles-->\n        <!--</a>-->\n      <!--</div>-->\n      <div class=\"navbar-end\" *ngIf=\"resp\">\n\n          <a class=\"navbar-item\" routerLink=\"/auth/register\" *ngIf=\"!isAuthenticated\">\n            <span class=\"icon\">\n              <i class=\"fa fa-user-plus\"></i>\n            </span>\n            <span>\n              Register\n            </span>\n          </a>\n\n          <a class=\"navbar-item\" routerLink=\"/auth/login\" *ngIf=\"!isAuthenticated\">\n            <span class=\"icon\">\n              <i class=\"fa fa-user\"></i>\n            </span>\n            <span>Login</span>\n          </a>\n\n        <span class=\"navbar-item\" *ngIf=\"isAuthenticated\">\n          Hello&nbsp;<strong style=\"color: white\">{{ username }}</strong>\n        </span>\n\n          <a class=\"navbar-item\" routerLink=\"/dashboard\" *ngIf=\"isAuthenticated\">\n            <span class=\"icon\">\n              <i class=\"fa fa-columns\"></i>\n            </span>\n            <span>\n              Dashboard\n            </span>\n          </a>\n\n          <a class=\"navbar-item\" (click)=\"logout()\" *ngIf=\"isAuthenticated\">\n            <span>\n              <i class=\"fa fa-sign-out\"></i>\n            </span>\n            <span>\n              Logout\n            </span>\n          </a>\n\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_product_list_service__ = __webpack_require__("./src/app/Services/product-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function HeaderComponent(auth, searchService, router) {
        this.auth = auth;
        this.searchService = searchService;
        this.router = router;
        this.isAuthenticated = false;
        this.resp = false;
        this.searchBody = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthenticated = false;
        this.resp = false;
        if (localStorage.getItem('jwt-token')) {
            this.auth.validateToken().subscribe(function (resp) {
                _this.isAuthenticated = _this.auth.isAuthenticated;
                console.log(resp['user']['name']);
                _this.username = resp['user']['name'];
                _this.resp = true;
            }, function (err) {
                _this.resp = true;
                console.log(err);
            });
        }
        else {
            this.resp = true;
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        console.log('Logged Out');
        this.auth.logout().subscribe(function (resp) {
            console.log(resp);
            _this.isAuthenticated = _this.auth.isAuthenticated;
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.search = function () {
        this.router.navigate(['/search'], { queryParams: { search: this.searchBody } });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/Modules/core/Components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__Services_product_list_service__["a" /* ProductListService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".title{\r\n  border-bottom: 2px solid #ff0537;\r\n  width: 250px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container is-dark\">\n    <h1 class=\"title\">Welcome To DyzDev</h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n    <!--<h1 class=\"title\">New Items</h1>-->\n    <!--<div class=\"columns\">-->\n\n      <!--<div class=\"column\">-->\n\n        <!--<div class=\"card\">-->\n\n          <!--<div class=\"card-image\">-->\n            <!--<figure class=\"image is-4by3\">-->\n              <!--<img src=\"https://bulma.io/images/placeholders/1280x960.png\" alt=\"Placeholder image\">-->\n            <!--</figure>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-header\">-->\n            <!--<p class=\"card-header-title\">-->\n              <!--Rick and Morty-->\n            <!--</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-content\">-->\n            <!--<p><strong>Price: </strong> $50</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-footer\">-->\n            <!--<a class=\"card-footer-item\">-->\n              <!--View Item-->\n            <!--</a>-->\n          <!--</div>-->\n\n        <!--</div>-->\n\n      <!--</div>-->\n\n      <!--<div class=\"column\">-->\n\n        <!--<div class=\"card\">-->\n\n          <!--<div class=\"card-image\">-->\n            <!--<figure class=\"image is-4by3\">-->\n              <!--<img src=\"https://bulma.io/images/placeholders/1280x960.png\" alt=\"Placeholder image\">-->\n            <!--</figure>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-header\">-->\n            <!--<p class=\"card-header-title\">-->\n              <!--Rick and Morty-->\n            <!--</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-content\">-->\n            <!--<p><strong>Price: </strong> $50</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-footer\">-->\n            <!--<a class=\"card-footer-item\">-->\n              <!--View Item-->\n            <!--</a>-->\n          <!--</div>-->\n\n        <!--</div>-->\n\n      <!--</div>-->\n\n      <!--<div class=\"column\">-->\n\n        <!--<div class=\"card\">-->\n\n          <!--<div class=\"card-image\">-->\n            <!--<figure class=\"image is-4by3\">-->\n              <!--<img src=\"https://bulma.io/images/placeholders/1280x960.png\" alt=\"Placeholder image\">-->\n            <!--</figure>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-header\">-->\n            <!--<p class=\"card-header-title\">-->\n              <!--Rick and Morty-->\n            <!--</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-content\">-->\n            <!--<p><strong>Price: </strong> $50</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-footer\">-->\n            <!--<a class=\"card-footer-item\">-->\n              <!--View Item-->\n            <!--</a>-->\n          <!--</div>-->\n\n        <!--</div>-->\n\n      <!--</div>-->\n\n      <!--<div class=\"column\">-->\n\n        <!--<div class=\"card\">-->\n\n          <!--<div class=\"card-image\">-->\n            <!--<figure class=\"image is-4by3\">-->\n              <!--<img src=\"https://bulma.io/images/placeholders/1280x960.png\" alt=\"Placeholder image\">-->\n            <!--</figure>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-header\">-->\n            <!--<p class=\"card-header-title\">-->\n              <!--Rick and Morty-->\n            <!--</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-content\">-->\n            <!--<p><strong>Price: </strong> $50</p>-->\n          <!--</div>-->\n\n          <!--<div class=\"card-footer\">-->\n            <!--<a class=\"card-footer-item\">-->\n              <!--View Item-->\n            <!--</a>-->\n          <!--</div>-->\n\n        <!--</div>-->\n\n      <!--</div>-->\n\n    <!--</div>-->\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/Modules/core/Components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ".is-large{\r\n  font-size: 72px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container\">\n\n    <div class=\"has-text-centered\" *ngIf=\"!searchFound\">\n      <h1 class=\"is-large\">NO RESULT FOUND</h1>\n    </div>\n\n    <div class=\"columns\" *ngIf=\"searchFound\">\n\n      <div class=\"column\" *ngFor=\"let data of resp\">\n        <div class=\"card\">\n\n          <div class=\"card-image\">\n            <figure class=\"image is-4by3\">\n              <img [src]=\"'https://resource.dyzdev.my.id/upload/' +  data['imageUrl']\" alt=\"Placeholder image\">\n            </figure>\n          </div>\n\n          <div class=\"card-header\">\n            <p class=\"card-header-title\">\n              {{data['name']}}\n            </p>\n          </div>\n\n          <div class=\"card-content\">\n            <p><strong>Price: </strong> {{data['price']}}</p>\n          </div>\n\n          <div class=\"card-footer\">\n            <a class=\"card-footer-item\" [routerLink]=\"'/product/' + data['id']\">\n              View Item\n            </a>\n          </div>\n\n        </div>\n\n    </div>\n\n    <!--<nav class=\"pagination is-centered\" role=\"navigation\" aria-label=\"pagination\" *ngIf=\"searchFound\">-->\n      <!--<ul class=\"pagination-list\">-->\n        <!--<li><button class=\"pagination-previous\" *ngIf=\"prevPageNum\" (click)=\"previousPage()\">Previous</button></li>-->\n        <!--<li><a class=\"pagination-link is-current\" aria-current=\"page\">{{resp['current_page']}}</a></li>-->\n        <!--<li><button class=\"pagination-next\" *ngIf=\"nextPageNum\" (click)=\"nextPage()\">Next page</button></li>-->\n      <!--</ul>-->\n    <!--</nav>-->\n  </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_product_list_service__ = __webpack_require__("./src/app/Services/product-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productList, router, route) {
        this.productList = productList;
        this.router = router;
        this.route = route;
        this.resp = [];
        this.searchFound = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            _this.resp = [];
            _this.searchFound = false;
            if (params.get('search')) {
                _this.getSearchResult(params.get('search'));
            }
        });
    };
    ProductListComponent.prototype.getSearchResult = function (name) {
        var _this = this;
        this.productList.search(name).subscribe(function (resp) {
            _this.searchFound = true;
            _this.resp = resp;
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.previousPage = function () {
        var _this = this;
        this.productList.searchByNameAndPage(name, this.prevPageNum).subscribe(function (resp) {
            _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                return _this.router.navigate(['/search']);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.bindResults = function () {
        // this.prevPageNum = null;
        // this.nextPageNum = null;
        console.log(this.productList.resp);
        this.resp = this.productList.resp;
        this.name = this.resp['name'];
        // if (this.resp['current_page'] > 1) {
        //   this.prevPageNum = this.resp['current_page'] - 1;
        // }
        // if (this.resp['current_page'] < this.resp['last_page']) {
        //   this.nextPageNum = this.resp['current_page'] + 1;
        // }
    };
    ProductListComponent.prototype.nextPage = function () {
        var _this = this;
        this.productList.searchByNameAndPage(name, this.nextPageNum).subscribe(function (resp) {
            _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                return _this.router.navigate(['/search']);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/Modules/core/Components/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_product_list_service__["a" /* ProductListService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/Components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/core/Components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-body\">\n  <div class=\"container has-text-centered\">\n    <div class=\"columns is-vcentered\">\n      <div class=\"column is-5\">\n        <figure class=\"image is-4by3\" *ngIf=\"resp['id']\">\n          <img [src]=\"'https://resource.dyzdev.my.id/upload/' + resp['imageUrl']\" alt=\"Description\">\n        </figure>\n      </div>\n      <div class=\"column is-6 is-offset-1\" *ngIf=\"resp['id']\">\n\n        <h1 class=\"title is-2\">\n          {{resp['name']}}\n        </h1>\n        <br>\n        <p class=\"has-text-centered\">\n          {{resp['desc']}}\n        </p>\n        <br>\n        <p class=\"content\">\n          <strong>Price: </strong> {{resp['price']}}\n        </p>\n        <input type=\"number\" [(ngModel)] = \"nItem\">\n        <button class=\"button is-medium is-info is-outlined\" (click)=\"buyNow()\">\n          Buy Now\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Modules/core/Components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_product_list_service__ = __webpack_require__("./src/app/Services/product-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.resp = {};
        this.nItem = 1;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.product.searchById(id).subscribe(function (resp) {
            console.log(resp);
            _this.resp = resp;
        }, function (err) {
            console.log(err);
        });
        // this.product.searchById();
    };
    ProductComponent.prototype.addToCart = function () {
        var _this = this;
        this.product.addToCart(this.resp['id'], this.nItem).subscribe(function (resp) {
            window.alert('Item Added');
        }, function (err) {
            window.alert('Please Login');
            _this.router.navigateByUrl('/auth/login');
            console.log(err);
        });
    };
    ProductComponent.prototype.buyNow = function () {
        var _this = this;
        this.product.buyNow(this.resp['id'], this.nItem).subscribe(function (resp) {
            console.log(resp);
            window.location.href = resp['url'];
        }, function (err) {
            window.alert('Please Login');
            _this.router.navigateByUrl('/auth/login');
            console.log(err);
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/Modules/core/Components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/Modules/core/Components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_product_list_service__["a" /* ProductListService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_home_home_component__ = __webpack_require__("./src/app/Modules/core/Components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_component__ = __webpack_require__("./src/app/Modules/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_product_list_product_list_component__ = __webpack_require__("./src/app/Modules/core/Components/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_product_product_component__ = __webpack_require__("./src/app/Modules/core/Components/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__core_component__["a" /* CoreComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__Components_home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_4__Components_product_list_product_list_component__["a" /* ProductListComponent */]
            },
            {
                path: 'product',
                redirectTo: '',
                pathMatch: 'full'
            },
            {
                path: 'product/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__Components_product_product_component__["a" /* ProductComponent */]
            }
        ]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-home-banner></app-home-banner>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/Modules/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
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

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
        this.navbarToggle();
    };
    CoreComponent.prototype.navbarToggle = function () {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {
                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);
                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    };
    CoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-core',
            template: __webpack_require__("./src/app/Modules/core/core.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/Modules/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_routing_module__ = __webpack_require__("./src/app/Modules/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_home_home_component__ = __webpack_require__("./src/app/Modules/core/Components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_header_header_component__ = __webpack_require__("./src/app/Modules/core/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_footer_footer_component__ = __webpack_require__("./src/app/Modules/core/Components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_component__ = __webpack_require__("./src/app/Modules/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_banner_banner_component__ = __webpack_require__("./src/app/Modules/core/Components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_product_product_component__ = __webpack_require__("./src/app/Modules/core/Components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_product_list_product_list_component__ = __webpack_require__("./src/app/Modules/core/Components/product-list/product-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_routing_module__["a" /* CoreRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__Components_home_home_component__["a" /* HomeComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__Components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__Components_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__core_component__["a" /* CoreComponent */], __WEBPACK_IMPORTED_MODULE_8__Components_banner_banner_component__["a" /* BannerComponent */], __WEBPACK_IMPORTED_MODULE_9__Components_product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_10__Components_product_list_product_list_component__["a" /* ProductListComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/Components/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title has-text-grey\">Profile</h1>\n\n<div class=\"message is-danger\" *ngIf=\"errors.length > 0\">\n  <div class=\"message-body\">\n    <ul *ngFor=\"let error of errors\">\n      <li>{{error}}</li>\n    </ul>\n  </div>\n</div>\n\n<form (ngSubmit)=\"updateForm.form.valid && submit()\" #updateForm = \"ngForm\" *ngIf=\"valid\">\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"First Name\" [value]=\"model.name\" autofocus=\"\" name=\"name\" [(ngModel)]=\"model.name\" #name = \"ngModel\">\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"Last Name\" [value]=\"model.last_name\" autofocus=\"\" name=\"last_name\" [(ngModel)]=\"model.last_name\" #last_name = \"ngModel\">\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"email\" placeholder=\"Email\" [value]=\"model.email\" autofocus=\"\" name=\"email\" [(ngModel)]=\"model.email\" #nemail = \"ngModel\">\n    </div>\n  </div>\n\n  <!--<div class=\"field\">-->\n    <!--<div class=\"control\">-->\n      <!--<input class=\"input is-large\" type=\"password\" placeholder=\"New Password\" [value]=\"model.password\" name=\"password\" [(ngModel)]=\"model.password\" #password = \"ngModel\">-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"Address\" [value]=\"model.address\" name=\"address\" [(ngModel)]=\"model.address\" #address = \"ngModel\">\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"City\" [value]=\"model.city\" name=\"city\" [(ngModel)]=\"model.city\" #city = \"ngModel\">\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"Postal Code\" [value]=\"model['postal code']\" name=\"postal_code\" [(ngModel)]=\"model.postal_code\" #postal_code = \"ngModel\">\n    </div>\n  </div>\n\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input is-large\" type=\"text\" placeholder=\"Phone\" [value]=\"model.phone\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone = \"ngModel\">\n    </div>\n  </div>\n\n  <button class=\"button is-block is-info is-large is-fullwidth\" [disabled]=\"!enabled\">Update</button>\n</form>\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_dashboard_service__ = __webpack_require__("./src/app/Services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    function AccountComponent(auth, router, ds) {
        this.auth = auth;
        this.router = router;
        this.ds = ds;
        this.model = {};
        this.valid = false;
        this.errors = [];
        this.enabled = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valid = false;
        this.auth.validateToken().subscribe(function (resp) {
            _this.valid = true;
            _this.model = resp['user'];
            console.log(_this.model);
        }, function (err) {
            localStorage.removeItem('jwt-token');
            _this.router.navigateByUrl('/auth/login');
        });
    };
    AccountComponent.prototype.submit = function () {
        var _this = this;
        this.enabled = false;
        this.ds.updateProfile(this.model).subscribe(function (resp) {
            _this.enabled = true;
            _this.errors = [];
            console.log(resp);
        }, function (err) {
            _this.errors = [];
            for (var key in err['error']) {
                for (var i = 0; i < err['error'][key].length; i++) {
                    _this.errors.push(err['error'][key][i]);
                }
            }
            _this.enabled = true;
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/Modules/dashboard/Components/account/account.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/Components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__Services_dashboard_service__["a" /* DashboardService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/Components/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ".table__wrapper {\r\n  overflow-x: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table__wrapper\">\r\n    <table class=\"table is-fullwidth\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Quantity</th>\r\n          <th>Price</th>\r\n          <th>Total</th>\r\n          <th>Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tfoot *ngIf=\"datas.length > 0\">\r\n        <tr>\r\n          <th>Total</th>\r\n          <th></th>\r\n          <th></th>\r\n          <th>{{total | number}}</th>\r\n          <th></th>\r\n        </tr>\r\n      </tfoot>\r\n      <tbody *ngIf=\"datas.length > 0\">\r\n        <tr *ngFor=\"let data of datas\">\r\n          <td>{{data['name']}}</td>\r\n          <td><input type=\"number\" [value]=\"data['qty']\"></td>\r\n          <td>{{data['price'] | number}}</td>\r\n          <td>{{data['qty'] * data['price'] | number}}</td>\r\n          <td><button class=\"button is-small is-info is-outlined\">Update</button><button class=\"button is-small is-info is-outlined\">Delete</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"button is-medium is-info is-outlined\" (click)=\"checkout()\">Checkout</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_dashboard_service__ = __webpack_require__("./src/app/Services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(dashService) {
        this.dashService = dashService;
        this.datas = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = 0;
        this.dashService.getCart().subscribe(function (resp) {
            _this.datas = resp;
            for (var _i = 0, _a = _this.datas; _i < _a.length; _i++) {
                var data = _a[_i];
                _this.total += parseFloat(data['price']) * data['qty'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    CartComponent.prototype.checkout = function () {
        this.dashService.checkout().subscribe(function (resp) {
            console.log(resp);
            window.location.href = resp['url'];
        }, function (err) {
            console.log(err);
        });
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/Modules/dashboard/Components/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/Components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_dashboard_service__["a" /* DashboardService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/Components/history/history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table__wrapper\">\n  <table class=\"table is-fullwidth\">\n    <thead>\n    <tr>\n      <th>ID</th>\n      <th>Status</th>\n      <th>Date & Time</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"datas.length > 0\">\n    <tr *ngFor=\"let data of datas\">\n      <td><a>{{data['id']}}</a></td>\n      <td>{{data['status']}}</td>\n      <td>{{data['created_at']}}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_dashboard_service__ = __webpack_require__("./src/app/Services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(ds, router) {
        this.ds = ds;
        this.router = router;
        this.datas = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getHistory().subscribe(function (resp) {
            _this.datas = resp;
        }, function (err) {
            console.log(err);
            localStorage.removeItem('jwt-token');
            _this.router.navigateByUrl('/auth/login');
        });
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("./src/app/Modules/dashboard/Components/history/history.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/Components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/Components/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".item, .menu-label{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"menu\">\r\n  <p class=\"menu-label\">\r\n    Dashboard\r\n  </p>\r\n  <ul class=\"menu-list\">\r\n    <li>\r\n      <a class=\"item\" routerLink=\"/\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Home</a>\r\n    </li>\r\n\r\n    <li>\r\n        <a class=\"item\" routerLink=\"/dashboard/account\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Account</a>\r\n    </li>\r\n\r\n    <!--<li>-->\r\n        <!--<a class=\"item\" routerLink=\"/dashboard/cart\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Cart</a>-->\r\n    <!--</li>-->\r\n\r\n    <li>\r\n        <a class=\"item\" routerLink=\"/dashboard/transaction\"><i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Transactions</a>\r\n    </li>\r\n\r\n  </ul>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/Modules/dashboard/Components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/Components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/Components/transaction/transaction.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table__wrapper\">\n  <table class=\"table is-fullwidth\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Status</th>\n        <th>Total Price</th>\n        <th>Date & Time</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"datas.length > 0\">\n      <tr *ngFor=\"let data of datas\">\n        <td>{{data['id']}}</td>\n        <td>{{data['status']}}</td>\n        <td>{{data['total']}}</td>\n        <td>{{data['created_at']}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/Components/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_dashboard_service__ = __webpack_require__("./src/app/Services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(ds, router) {
        this.ds = ds;
        this.router = router;
        this.datas = [];
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getTransaction().subscribe(function (resp) {
            _this.datas = resp;
        }, function (err) {
            console.log(err);
            localStorage.removeItem('jwt-token');
            _this.router.navigateByUrl('/auth/login');
        });
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/Modules/dashboard/Components/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/Components/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/Modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_account_account_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_transaction_transaction_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_auth_guard_service__ = __webpack_require__("./src/app/Services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components




var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__Services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'account',
                pathMatch: 'full'
            },
            {
                path: 'account',
                component: __WEBPACK_IMPORTED_MODULE_3__Components_account_account_component__["a" /* AccountComponent */]
            },
            {
                path: 'transaction',
                component: __WEBPACK_IMPORTED_MODULE_4__Components_transaction_transaction_component__["a" /* TransactionComponent */]
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".dashboard-nav, .dashboard{\r\n  padding: 25px;\r\n}\r\n\r\n.dashboard-nav{\r\n  background: #363636;\r\n}\r\n\r\n.columns{\r\n  margin-top: 0px;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n  .hero.is-fullheight{\r\n    min-height: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"columns\">\r\n    <div class=\"column is-3 hero is-fullheight dashboard-nav dashboard\">\r\n      <app-navigation></app-navigation>\r\n    </div>\r\n    <div class=\"column is-9 is-fullheight dashboard\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/Modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/Modules/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("./src/app/Modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("./src/app/Modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_account_account_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_navigation_navigation_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_cart_cart_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_history_history_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_transaction_transaction_component__ = __webpack_require__("./src/app/Modules/dashboard/Components/transaction/transaction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_account_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_6__Components_navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_7__Components_cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_8__Components_history_history_component__["a" /* HistoryComponent */], __WEBPACK_IMPORTED_MODULE_9__Components_transaction_transaction_component__["a" /* TransactionComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/Services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('jwt-token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/Services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(rest) {
        this.rest = rest;
        this.isAuthenticated = false;
        this.data = {};
    }
    AuthService.prototype.login = function (body) {
        var _this = this;
        this.HttpHeaders = {
            'Content-Type': 'application/json',
        };
        return this.rest.post('/login', body, this.HttpHeaders).map(function (resp) {
            if (resp['token']) {
                _this.data = resp['user'];
                _this.isAuthenticated = true;
                localStorage.setItem('jwt-token', resp['token']);
            }
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.HttpHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        };
        localStorage.removeItem('jwt-token');
        return this.rest.get('/logout', this.HttpHeaders).map(function (resp) {
            _this.isAuthenticated = false;
            _this.data = {};
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService.prototype.register = function (body) {
        this.HttpHeaders = {
            'Content-Type': 'application/json',
        };
        return this.rest.post('/register', body, this.HttpHeaders).map(function (resp) {
            if (resp['status']) {
                return resp;
            }
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService.prototype.forgotPassword = function () {
    };
    AuthService.prototype.validateToken = function () {
        var _this = this;
        this.HttpHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        };
        return this.rest.get('/user', this.HttpHeaders).map(function (resp) {
            console.log(resp);
            if (resp['user']) {
                _this.data = resp['user'];
                _this.isAuthenticated = true;
            }
            return resp;
        }).catch(function (err) {
            localStorage.removeItem('jwt-token');
            _this.isAuthenticated = false;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/Services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(rest) {
        this.rest = rest;
    }
    DashboardService.prototype.injectHeader = function () {
        this.HttpHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        };
    };
    DashboardService.prototype.getTransaction = function () {
        this.injectHeader();
        return this.rest.get('/transaction', this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.getHistory = function () {
        this.injectHeader();
        return this.rest.get('/history', this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.findTransaction = function (id) {
        this.injectHeader();
        return this.rest.get('/transaction/' + id, this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.findHistory = function (id) {
        this.injectHeader();
        return this.rest.get('/history/' + id, this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.getCart = function () {
        this.injectHeader();
        return this.rest.get('/cart', this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.checkout = function () {
        this.injectHeader();
        return this.rest.get('/pay', this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService.prototype.updateProfile = function (body) {
        this.injectHeader();
        return this.rest.patch('/user', body, this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/Services/product-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/Services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListService = /** @class */ (function () {
    function ProductListService(rest) {
        this.rest = rest;
        this.resp = {};
        this.HttpHeaders = {};
    }
    ProductListService.prototype.search = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        name = name.trim();
        if (name !== '') {
            return this.rest.get('/items?name=' + name, {}).map(function (resp) {
                resp['name'] = name;
                _this.resp = resp;
                return resp;
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            });
        }
        else {
            return this.rest.get('/items', {}).map(function (resp) {
                _this.resp = resp;
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            });
        }
    };
    ProductListService.prototype.searchById = function (id) {
        return this.rest.get('/items/' + id, {}).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProductListService.prototype.searchByNameAndPage = function (name, page) {
        var _this = this;
        name = name.trim();
        name = name.replace(/ /g, '%20');
        if (name !== '') {
            return this.rest.get('/items?name=' + name + '&page=' + page, {}).map(function (resp) {
                resp['name'] = name;
                _this.resp = resp;
                return resp;
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            });
        }
        else {
            return this.rest.get('/items?page=' + page, {}).map(function (resp) {
                console.log(resp);
                _this.resp = resp;
            }).catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            });
        }
    };
    ProductListService.prototype.addToCart = function (itemID, itemQty) {
        this.HttpHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        };
        var body = { 'item_id': itemID, 'qty': itemQty };
        return this.rest.post('/cart/', body, this.HttpHeaders).map(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProductListService.prototype.buyNow = function (itemID, itemQty) {
        this.HttpHeaders = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        };
        var body = {
            'item_id': itemID,
            'qty': itemQty
        };
        return this.rest.post('/pay', body, this.HttpHeaders).map(function (resp) {
            return resp;
        }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProductListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], ProductListService);
    return ProductListService;
}());



/***/ }),

/***/ "./src/app/Services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.apiurl = 'https://api.dyzdev.my.id/api'; // 'http://localhost:8000/api';
    }
    RequestService.prototype.bindHttpHeaders = function (headers) {
        this.HttpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](headers)
        };
    };
    RequestService.prototype.get = function (route, headers) {
        this.bindHttpHeaders(headers);
        return this.http.get(this.apiurl + route, this.HttpOptions);
    };
    RequestService.prototype.post = function (route, body, headers) {
        this.bindHttpHeaders(headers);
        return this.http.post(this.apiurl + route, body, this.HttpOptions);
    };
    RequestService.prototype.patch = function (route, body, headers) {
        this.bindHttpHeaders(headers);
        return this.http.patch(this.apiurl + route, body, this.HttpOptions);
    };
    RequestService.prototype.delete = function (route, headers) {
        this.bindHttpHeaders(headers);
        return this.http.delete(this.apiurl + route, this.HttpOptions);
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/Utils/Page404/page404.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Utils/Page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> 404 NOT FOUND </h1>\n"

/***/ }),

/***/ "./src/app/Utils/Page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
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

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page404',
            template: __webpack_require__("./src/app/Utils/Page404/page404.component.html"),
            styles: [__webpack_require__("./src/app/Utils/Page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Page404_page404_component__ = __webpack_require__("./src/app/Utils/Page404/page404.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__Utils_Page404_page404_component__["a" /* Page404Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_auth_service__["a" /* AuthService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Modules_auth_auth_module__ = __webpack_require__("./src/app/Modules/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Modules_core_core_module__ = __webpack_require__("./src/app/Modules/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modules_dashboard_dashboard_module__ = __webpack_require__("./src/app/Modules/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Utils_Page404_page404_component__ = __webpack_require__("./src/app/Utils/Page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_request_service__ = __webpack_require__("./src/app/Services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_auth_service__ = __webpack_require__("./src/app/Services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_auth_guard_service__ = __webpack_require__("./src/app/Services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Services_product_list_service__ = __webpack_require__("./src/app/Services/product-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_dashboard_service__ = __webpack_require__("./src/app/Services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules







// Routing

// Root Component

// Feature Module




// Services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Utils_Page404_page404_component__["a" /* Page404Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__Modules_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_10__Modules_core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_11__Modules_dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__Services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_14__Services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__Services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_16__Services_product_list_service__["a" /* ProductListService */],
                __WEBPACK_IMPORTED_MODULE_17__Services_dashboard_service__["a" /* DashboardService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map