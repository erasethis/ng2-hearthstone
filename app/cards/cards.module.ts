import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MdButtonModule }  from '@angular2-material/button';
import { MdCoreModule }    from '@angular2-material/core';
import { MdInputModule }   from '@angular2-material/input';

import { HeroesModule } from './heroes/heroes.module';

import { CardsComponent } from './cards.component';
import { CardsService } from './cards.service';
//import { HeroesComponent } from './heroes/heroes.component';
import { SearchCardsActions } from '../actions/search-cards.actions';
import { SearchComponent } from './search/search.component';
import { SetsComponent } from './sets/sets.component';

import { cardsRouting } from './cards.routing';

import { cardsRoutingProviders } from './cards.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        //
        MdButtonModule,
        MdCoreModule,
        MdInputModule,
        //
        HeroesModule,
        //
        cardsRouting
    ],
    declarations: [
        CardsComponent,
        SearchComponent,
        SetsComponent
    ],
    providers: [
        CardsService,
        SearchCardsActions,
        cardsRoutingProviders
    ]
})
export class CardsModule {}

