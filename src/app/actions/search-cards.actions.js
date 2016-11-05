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
var cards_service_1 = require("../cards/cards.service");
exports.SEARCH_CARDS_ACTIONS = {
    SEARCH_CARDS_REQUEST: 'SEARCH_CARDS_REQUEST',
    SEARCH_CARDS_FETCH_RESULT: 'SEARCH_CARDS_FETCH_RESULT'
};
var SearchCardsActions = (function () {
    function SearchCardsActions(ngRedux, service) {
        this.ngRedux = ngRedux;
        this.service = service;
    }
    // Call out to thunk middleware
    SearchCardsActions.prototype.search = function (keyword) {
        var _this = this;
        return function (dispatch) {
            dispatch(_this.request(keyword));
            return _this.service.search(keyword).subscribe(function (response) {
                dispatch(_this.fetchResult(response.json()));
            });
            // TODO: Error handling
        };
    };
    // Action Creators
    SearchCardsActions.prototype.request = function (keyword, collectible, locale) {
        return {
            type: exports.SEARCH_CARDS_ACTIONS.SEARCH_CARDS_REQUEST,
            payload: {
                keyword: keyword,
                collectible: collectible,
                locale: locale
            }
        };
    };
    SearchCardsActions.prototype.fetchResult = function (items) {
        return {
            type: exports.SEARCH_CARDS_ACTIONS.SEARCH_CARDS_FETCH_RESULT,
            payload: {
                items: items
            }
        };
    };
    return SearchCardsActions;
}());
SearchCardsActions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux, cards_service_1.CardsService])
], SearchCardsActions);
exports.SearchCardsActions = SearchCardsActions;
//# sourceMappingURL=search-cards.actions.js.map