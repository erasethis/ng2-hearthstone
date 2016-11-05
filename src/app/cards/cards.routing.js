"use strict";
var cards_component_1 = require("./cards.component");
var search_component_1 = require("./search/search.component");
var sets_component_1 = require("./sets/sets.component");
exports.cardsRoutes = [
    {
        path: 'cards',
        component: cards_component_1.CardsComponent,
        children: [
            { path: '', redirectTo: 'heroes' },
            { path: 'heroes', loadChildren: 'app/cards/heroes/heroes.module#HeroesModule' },
            { path: 'sets', component: sets_component_1.SetsComponent },
            { path: 'search', component: search_component_1.SearchComponent }
        ]
    }
];
//# sourceMappingURL=cards.routing.js.map