"use strict";
var heroes_component_1 = require("./heroes.component");
var heroes_list_component_1 = require("./heroes-list.component");
exports.heroesRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: heroes_list_component_1.HeroesListComponent }
        ]
    }
];
//# sourceMappingURL=heroes.routing.js.map