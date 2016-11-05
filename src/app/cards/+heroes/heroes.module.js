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
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes.component");
var heroes_list_component_1 = require("./heroes-list.component");
var heroes_routing_1 = require("./heroes.routing");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(heroes_routing_1.heroesRoutes)
        ],
        declarations: [
            heroes_component_1.HeroesComponent,
            heroes_list_component_1.HeroesListComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], HeroesModule);
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map