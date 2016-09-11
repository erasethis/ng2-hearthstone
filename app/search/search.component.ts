import { Component, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';

import { CardsService } from '../cards/cards.service';

declare var module: {
    id: string;
}

@Component({
    moduleId: module.id,
    selector: 'ngh-search',
    templateUrl: './search.component.html',
    styleUrls: ['search.component.css']
})
export class SearchComponent implements OnDestroy {
    model: { term: string, result: string } = { term: '', result: '' };
    private _sub: Subscription;
    private _currentTerm: string = '';
    constructor(private _cardsService: CardsService) {}
    click() {
        if (this.model.term && this.model.term != this._currentTerm)
        this._sub = this._cardsService.search(this.model.term).subscribe((response: Response) => {
            this.model.result = response.json(); 
            this._currentTerm = this.model.term;
        });
    }
    ngOnDestroy() {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }
}