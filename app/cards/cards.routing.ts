import { ModuleWithProviders } from '@angular/core';

import { 
    RouterModule,
    Routes
} from '@angular/router';

import { CardsComponent } from './cards.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { SetsComponent } from './sets/sets.component';

const cardsRoutes: Routes = [
  {
    path: 'cards',
    component: CardsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'heroes', component: HeroesComponent },
          { path: 'sets', component: SetsComponent },
          { path: 'search', component: SearchComponent }
        ]
      }
    ]
  }
];

export const cardsRouting: ModuleWithProviders = RouterModule.forChild(cardsRoutes);