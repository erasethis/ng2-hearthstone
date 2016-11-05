"use strict";
exports.appRoutes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', loadChildren: 'app/cards/cards.module#CardsModule' },
];
//# sourceMappingURL=app.routing.js.map