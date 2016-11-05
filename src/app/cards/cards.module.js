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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var cards_component_1 = require("./cards.component");
var cards_service_1 = require("./cards.service");
var search_cards_actions_1 = require("../actions/search-cards.actions");
var search_component_1 = require("./search/search.component");
var sets_component_1 = require("./sets/sets.component");
var cards_routing_1 = require("./cards.routing");
var CardsModule = (function () {
    function CardsModule() {
    }
    return CardsModule;
}());
CardsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MaterialModule,
            router_1.RouterModule.forChild(cards_routing_1.cardsRoutes)
        ],
        declarations: [
            cards_component_1.CardsComponent,
            search_component_1.SearchComponent,
            sets_component_1.SetsComponent
        ],
        providers: [
            cards_service_1.CardsService,
            search_cards_actions_1.SearchCardsActions
        ]
    }),
    __metadata("design:paramtypes", [])
], CardsModule);
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map