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
var http_1 = require("@angular/http");
var mashape_key_1 = require("../api/mashape-key");
var BaseUrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
var CardsService = (function () {
    function CardsService(_http) {
        this._http = _http;
    }
    CardsService.prototype.get = function (type, attack, collectible, cost, durability, health, locale) {
        return this._api('cards/' + type);
    };
    CardsService.prototype.search = function (keyword, collectible, locale) {
        return this._api('cards/search/' + keyword);
    };
    CardsService.prototype._api = function (relativeUrl) {
        var url = BaseUrl + relativeUrl;
        var headers = new http_1.Headers();
        headers.append('X-Mashape-Key', mashape_key_1.MashapeKey);
        return this._http.get(url, { headers: headers });
    };
    return CardsService;
}());
CardsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map