import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { CardsService } from './cards.service';
import { SearchCardsActions } from '../actions/search-cards.actions';
import { SearchComponent } from './search/search.component';
import { SetsComponent } from './sets/sets.component';
import { cardsRoutes } from './cards.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        RouterModule.forChild(cardsRoutes),
    ],
    declarations: [
        CardsComponent,
        SearchComponent,
        SetsComponent
    ],
    providers: [
        CardsService,
        SearchCardsActions
    ]
})
export class CardsModule { }

