import { ModuleWithProviders } from '@angular/core';

import { 
    RouterModule,
    Routes
} from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';

const heroesRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'list', component: HeroesListComponent }
        ]
      }
    ]
  }
];

export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);