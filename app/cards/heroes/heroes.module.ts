import {
    NgModule
} from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';
import { heroesRoutes } from './heroes.routing';

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    declarations: [
        HeroesComponent,
        HeroesListComponent
    ]
})
export class HeroesModule {}