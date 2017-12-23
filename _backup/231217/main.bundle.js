webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 106;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(69);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__(195),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Aurimas Darguzis';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(196),
        styles: [__webpack_require__(184)]
    })
], AppComponent);

// start on material design
// https://medium.com/@ladyleet/setting-up-your-first-angular-2-project-using-angular-material2-5db18a174165
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_components__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__showreel_showreel_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__showreel_showreel_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__showreel_angular_first_app_angular_first_app_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_me_about_me_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blog_blog_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__material_components__["a" /* DialogBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_14__showreel_showreel_component__["a" /* ShowreelComponent */],
            // ShowreelService,
            __WEBPACK_IMPORTED_MODULE_16__showreel_angular_first_app_angular_first_app_component__["a" /* AngularFirstAppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__blog_blog_component__["a" /* BlogComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__material_components__["a" /* DialogBoxComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__showreel_showreel_service__["a" /* ShowreelService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__(197),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_box_dialog_box_component__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog_box_dialog_box_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_components_dialog_box_dialog_box_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(dialog) {
        this.dialog = dialog;
    }
    NavigationComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__material_components_dialog_box_dialog_box_component__["a" /* DialogBoxComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            _this.selectedOption = result;
        });
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__(199),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showreel_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFirstAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularFirstAppComponent = (function () {
    // private project: any;
    function AngularFirstAppComponent(showreelService) {
        this.showreelService = showreelService;
    }
    AngularFirstAppComponent.prototype.ngOnInit = function () {
        console.log(this.project);
        this.project = this.showreelService.getProject();
    };
    return AngularFirstAppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Input */])(),
    __metadata("design:type", Object)
], AngularFirstAppComponent.prototype, "project", void 0);
AngularFirstAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Component */])({
        selector: 'app-angular-first-app',
        template: __webpack_require__(200),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__showreel_service__["a" /* ShowreelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__showreel_service__["a" /* ShowreelService */]) === "function" && _a || Object])
], AngularFirstAppComponent);

var _a;
//# sourceMappingURL=angular-first-app.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showreel_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowreelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowreelComponent = (function () {
    function ShowreelComponent(showreelService) {
        this.showreelService = showreelService;
        this.tiles = [
            { text: 'Angular', cols: 1, rows: 1, color: 'lightblue' },
            { text: 'React', cols: 1, rows: 1, color: 'lightblue' },
            { text: 'Vue', cols: 1, rows: 1, color: 'lightblue' },
            { text: 'Node', cols: 1, rows: 1, color: 'lightblue' },
        ];
    }
    ShowreelComponent.prototype.ngOnInit = function () {
        this.projects = this.showreelService.getProject();
    };
    return ShowreelComponent;
}());
ShowreelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Component */])({
        selector: 'app-showreel',
        template: __webpack_require__(201),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__showreel_service__["a" /* ShowreelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__showreel_service__["a" /* ShowreelService */]) === "function" && _a || Object])
], ShowreelComponent);

var _a;
//# sourceMappingURL=showreel.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".self_portrait {\n  width: 145px;\n  margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".showreel {\n  margin-top: 64px;\n}\n\nmd-grid-tile {\n  background: lightblue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".name {\n  margin-left: 10px;\n}\n\n.menu-item:hover, :active {\n  cursor: not-allowed;\n}\n\n.self_portrait {\n  border-radius: 50%;\n  width: 100px;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n.menu-item-contact {\n  cursor: pointer;\n}\n\n.button_email_me {\n  margin:0 auto;\n}\n\n\n/*.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".example-card {\n  width: 400px;\n}\n\n.example-header-image {\n  background-image: url(" + __webpack_require__(253) + ");\n  background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<md-toolbar>\n  <md-toolbar-row>\n    <img src=\"../../assets/img/me-rounded-min.png\" alt=\"Aurimas Darguzis self portrait\" class=\"self_portrait\">\n  </md-toolbar-row>\n  \n  <md-toolbar-row>\n    <span class=\"menu-item\"></span>\n  </md-toolbar-row>\n\n  <md-toolbar-row>\n    <span class=\"menu-item\"></span>\n    <md-icon>location_on</md-icon>\n    <span>London</span>\n  </md-toolbar-row>\n\n  <!--<md-toolbar-row>\n    <button class=\"button_email_me\" md-raised-button ><md-icon>email</md-icon></button>\n  </md-toolbar-row>-->\n\n</md-toolbar>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav>\n    <app-navigation></app-navigation>\n  </nav>\n</header>\n\n<article class=\"showreel\">\n  <!--<app-showreel></app-showreel>-->\n</article>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<p>\n  Coming soon!\n</p>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-box-wrapper\">\n  <form class=\"form\">\n    <table><tr>\n      <td><md-input-container class=\"full-width\">\n        <input type=\"text\" mdInput placeholder=\"Name\">\n      </md-input-container></td>\n    </tr>\n    <tr>\n      <td><md-input-container class=\"full-width\">\n        <input type=\"text\" mdInput placeholder=\"Email\">\n      </md-input-container></td>\n    </tr>\n    <tr>\n      <td><md-input-container class=\"full-width\">\n        <input type=\"text\" mdInput placeholder=\"My question to you\">\n      </md-input-container></td>\n    </tr>\n    </table>\n\n    <!--<md-tab-group>\n      <md-tab label=\"Tab 1\">General ?</md-tab>\n      <md-tab label=\"Tab 2\"></md-tab>\n      <md-tab label=\"Tab 3\">Content 3</md-tab>\n      <md-tab label=\"Tab 4\">Content 4</md-tab>\n    </md-tab-group>-->\n  </form>\n\n\n <p>\n    <!--<button md-button (click)=\"dialogRef.close(dialogName-nickname.value\" >X</button>-->\n\n    <!--<button md-button (click)=\"log()\" color=\"primary\"><md-icon>send</md-icon></button>-->\n    <button md-raised-button (click)=\"log()\" color=\"primary\"><md-icon>send</md-icon></button> \n    <!--<br><br><br>-->\n    <!--<button md-button (click)=\"log()\" color=\"primary\">Send</button>-->\n    <!--<button md-raised-button (click)=\"log()\" color=\"primary\">Send</button>-->\n    <!--<button md-button (click)=\"log()\" color=\"primary\"><md-icon>file_upload</md-icon></button>-->\n</p> \n\n</div>  "

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<!--<md-toolbar color=\"primary\">-->\n  <button md-button (click)=\"openDialog(); sidenav.open()\">\n    <md-icon>email</md-icon>  \n  </button>\n  <span class=\"name\">Aurimas Darguzis</span>\n<!--</md-toolbar>-->\n\n<md-tab-group>\n  <!-- currently not using About section -->\n  <!--<md-tab label=\"About\">\n    <app-about-me></app-about-me>\n  </md-tab>-->\n  <md-tab label=\"Projects\">\n    <app-showreel></app-showreel>\n  </md-tab>\n  <md-tab label=\"Blog\">\n    <app-blog></app-blog>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\">\n        <md-card-header>\n          <div md-card-avatar class=\"example-header-image\"></div>\n          <md-card-title>{{ project[0].name }}</md-card-title>\n          <md-card-subtitle>{{ project[0].category }}</md-card-subtitle>\n        </md-card-header>\n        <img md-card-image src=\"assets/img/showreel/girl-640-min.jpg\">\n        <md-card-content>\n          <p>\n            {{ project[0].description }}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n          <button md-button>OPEN</button>\n          <button md-button>DEMO</button>\n          <button md-button>CODE</button>\n        </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<!--<md-grid-list cols=\"4\" rowHeight=\"100px\">\n    <md-grid-tile\n        *ngFor=\"let tile of tiles\"\n        [colspan]=\"tile.cols\"\n        [rowspan]=\"tile.rows\"\n        [style.background]=\"tile.color\">\n      {{ tile.text }}\n    </md-grid-tile>\n</md-grid-list>-->\n\n<app-angular-first-app *ngFor=\"let project of projects\"></app-angular-first-app>\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "girl-640-min.88c305921e144952e451.jpg";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowreelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowreelService = (function () {
    function ShowreelService() {
        this.project = [{
                name: 'First app',
                category: 'Angular 2+',
                image: 'assets/img/showreel/girl-640-min.jpg',
                description: "The website you are browsing currently is written using Angular.\n                  It started as Angular2, and now continuesly growing with the framework\n                  as well. :)"
            }];
    }
    ShowreelService.prototype.getProject = function () {
        return this.project;
    };
    return ShowreelService;
}());
ShowreelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShowreelService);

//# sourceMappingURL=showreel.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogBoxComponent = (function () {
    function DialogBoxComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogBoxComponent.prototype.log = function () {
        console.log('close');
        this.dialogRef.close();
    };
    DialogBoxComponent.prototype.send = function () {
        console.log('thank you! :) I will get back to you shortly');
        this.dialogRef.close();
    };
    return DialogBoxComponent;
}());
DialogBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-material-dialog-box',
        template: __webpack_require__(198)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], DialogBoxComponent);

var _a;
//# sourceMappingURL=dialog-box.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAaUrcQV4PZObFU61mZXjsK39Dce2vC5Zw',
        authDomain: 'civic-genre-139017.firebaseapp.com',
        databaseURL: 'https://civic-genre-139017.firebaseio.com',
        projectId: 'civic-genre-139017',
        storageBucket: 'civic-genre-139017.appspot.com',
        messagingSenderId: '644038543495'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.bundle.js.map