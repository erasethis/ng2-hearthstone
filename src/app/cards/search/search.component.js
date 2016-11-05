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
var ng2_redux_1 = require("ng2-redux");
var actions_1 = require("../../actions/actions");
var SearchComponent = (function () {
    function SearchComponent(ngRedux, searchActions) {
        this.ngRedux = ngRedux;
        this.searchActions = searchActions;
        this.previousKeyword = '';
        this.search$ = this.ngRedux.select(function (state) { return state.searchCards.items; });
        this.model = {
            keyword: '',
            result: this.search$
        };
    }
    SearchComponent.prototype.click = function () {
        if (this.model.keyword && this.model.keyword != this.previousKeyword) {
            this.searchActions.search(this.model.keyword)(this.ngRedux.dispatch);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ngh-search',
        templateUrl: './search.component.html',
        styleUrls: ['search.component.css']
    }),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux, actions_1.SearchCardsActions])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map