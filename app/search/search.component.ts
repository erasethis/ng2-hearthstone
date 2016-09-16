import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { NgRedux } from 'ng2-redux';

import { Observable } from 'rxjs/Observable';

import { IAppState } from '../store/app-state.model';
import { CardsService } from '../cards/cards.service';
import { SearchCardsActions } from '../actions/actions';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'ngh-search',
    templateUrl: './search.component.html',
    styleUrls: ['search.component.css']
})
export class SearchComponent {
    model: { keyword: string, result: Observable<any[]> }
    search$: any;

    private previousKeyword: string = '';

    constructor(private ngRedux: NgRedux<IAppState>, private searchActions: SearchCardsActions) {
        this.search$ = this.ngRedux.select(state => state.searchCards.items);
        this.model = {
            keyword: '',
            result: this.search$
        }
    }
    click() {
        if (this.model.keyword && this.model.keyword != this.previousKeyword) {
            this.searchActions.search(this.model.keyword)(this.ngRedux.dispatch);
        }
    }
}