import {
    NgModule
} from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list.component';
import { heroesRouting } from './heroes.routing';

@NgModule({
    imports: [
        RouterModule,
        heroesRouting
    ],
    declarations: [
        HeroesComponent,
        HeroesListComponent
    ]
})
export class HeroesModule {}