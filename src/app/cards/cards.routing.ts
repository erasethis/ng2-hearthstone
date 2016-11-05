import { Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
import { SearchComponent } from './search/search.component';
import { SetsComponent } from './sets/sets.component';

export const cardsRoutes: Routes = [
    {
        path: 'cards',
        component: CardsComponent,
        children: [
            { path: '', redirectTo: 'heroes' },
            { path: 'heroes', loadChildren: 'app/cards/heroes/heroes.module#HeroesModule' },
            { path: 'sets', component: SetsComponent },
            { path: 'search', component: SearchComponent }
        ]
    }
];
