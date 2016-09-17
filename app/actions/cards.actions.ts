import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { CardsFilter, CardsFilterType } from './cards.filter';
import { CardsService } from '../cards/cards.service';

export const CARDS_ACTIONS = {
    CARDS_SEARCH_REQUEST: 'CARDS_SEARCH_REQUEST',
    CARDS_SEARCH_FETCH_RESULT: 'CARDS_SEARCH_FETCH_RESULT',
    CARDS_GET_REQUEST: 'CARDS_GET_REQUEST',
    CARDS_GET_FETCH_RESULT: 'CARDS_GET_FETCH_RESULT'
}

@Injectable()
export class CardsActions {
  constructor(private ngRedux: NgRedux<any>, private service: CardsService) {

  }

  // Call out to thunk middleware
  get(filter: CardsFilter) {
    return (dispatch) => {
      dispatch(this.request(filter));

      return this.service.getCards(filter.type, filter.attack, filter.collectible,
        filter.cost, filter.durability, filter.health, filter.locale)
        .subscribe((response: Response) => {
            dispatch(this.fetchResult(<any[]>response.json()));
      });

      // TODO: Error handling
    }
  }

  // Action Creators
  private request(filter: CardsFilter): any {
    return {
      type: CARDS_ACTIONS.CARDS_GET_REQUEST,
      payload: {
          type: filter.type,
          attack: filter.attack,
          collectible: filter.collectible,
          cost: filter.cost,
          durability: filter.durability,
          health: filter.health,
          locale: filter.locale
      }
    };
  }

  private fetchResult(items: any[]): any {
    return {
      type: CARDS_ACTIONS.CARDS_GET_FETCH_RESULT,
      payload: {
        items: items
      }
    };
  }
}