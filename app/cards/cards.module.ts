import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule }  from '@angular2-material/button';
import { MdCoreModule }    from '@angular2-material/core';
import { MdInputModule }   from '@angular2-material/input';

import { CardsComponent } from './cards.component';
import { CardsService } from './cards.service';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchCardsActions } from '../actions/search-cards.actions';
import { SearchComponent } from './search/search.component';
import { SetsComponent } from './sets/sets.component';

import { cardsRouting } from './cards.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        //
        MdButtonModule,
        MdCoreModule,
        MdInputModule,
        //
        cardsRouting
    ],
    declarations: [
        CardsComponent,
        HeroesComponent,
        SearchComponent,
        SetsComponent
    ],
    providers: [
        CardsService,
        SearchCardsActions
    ]
})
export class CardsModule {}

