import { ModuleWithProviders } from '@angular/core';

import { 
    RouterModule,
    Routes
} from '@angular/router';

import { CardsComponent } from './cards.component';
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
          { path: 'sets', component: SetsComponent },
          { path: 'search', component: SearchComponent }
        ]
      }
    ]
  }
];

export const cardsRoutingProviders: any[] = [

];

export const cardsRouting: ModuleWithProviders = RouterModule.forChild(cardsRoutes);