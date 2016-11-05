"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var ng2_redux_1 = require("ng2-redux");
var ng2_hearthstone_app_1 = require("./store/ng2-hearthstone.app");
var createLogger = require("redux-logger");
var redux_thunk_1 = require("redux-thunk");
var cards_module_1 = require("./cards/cards.module");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(ng2_hearthstone_app_1.ng2HearthstoneApp, {
            searchCards: {
                searching: false,
                keyword: '',
                items: []
            }
        }, [redux_thunk_1.default, createLogger()]);
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            http_1.HttpModule,
            material_1.MaterialModule.forRoot(),
            router_1.RouterModule.forRoot(app_routing_1.appRoutes),
            //
            ng2_redux_1.NgReduxModule,
            //
            cards_module_1.CardsModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map