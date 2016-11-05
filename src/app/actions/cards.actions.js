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
exports.CARDS_ACTIONS = {
    CARDS_SEARCH_REQUEST: 'CARDS_SEARCH_REQUEST',
    CARDS_SEARCH_FETCH_RESULT: 'CARDS_SEARCH_FETCH_RESULT',
    CARDS_GET_REQUEST: 'CARDS_GET_REQUEST',
    CARDS_GET_FETCH_RESULT: 'CARDS_GET_FETCH_RESULT'
};
var CardsActions = (function () {
    function CardsActions(ngRedux, service) {
        this.ngRedux = ngRedux;
        this.service = service;
    }
    // Call out to thunk middleware
    CardsActions.prototype.get = function (filter) {
        var _this = this;
        return function (dispatch) {
            dispatch(_this.request(filter));
            return _this.service.getCards(filter.type, filter.attack, filter.collectible, filter.cost, filter.durability, filter.health, filter.locale)
                .subscribe(function (response) {
                dispatch(_this.fetchResult(response.json()));
            });
            // TODO: Error handling
        };
    };
    // Action Creators
    CardsActions.prototype.request = function (filter) {
        return {
            type: exports.CARDS_ACTIONS.CARDS_GET_REQUEST,
            payload: {
                type: filter.type,
                attack: filter.attack,
                collectible: filter.collectible,
                cost: filter.cost,
                durability: filter.durability,
                health: filter.health,
                locale: filter.locale
            }
        };
    };
    CardsActions.prototype.fetchResult = function (items) {
        return {
            type: exports.CARDS_ACTIONS.CARDS_GET_FETCH_RESULT,
            payload: {
                items: items
            }
        };
    };
    return CardsActions;
}());
CardsActions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_redux_1.NgRedux, cards_service_1.CardsService])
], CardsActions);
exports.CardsActions = CardsActions;
//# sourceMappingURL=cards.actions.js.map