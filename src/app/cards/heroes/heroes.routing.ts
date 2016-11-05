import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';

export const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: HeroesListComponent }
        ]
    }
];
