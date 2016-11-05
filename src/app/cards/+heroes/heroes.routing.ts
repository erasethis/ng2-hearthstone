import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';

export const heroesRoutes: Routes = [
    { path: '', component: HeroesComponent, children: [
        { path: 'list', component: HeroesListComponent }
    ]}
];
