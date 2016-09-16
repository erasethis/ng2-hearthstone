import { Response } from '@angular/http';

import { NgRedux } from 'ng2-redux';
import { CardsService } from '../cards/cards.service';

export const SEARCH_CARDS_ACTIONS = {
  REQUEST: 'SEARCH_REQUEST',
  RECEIVE: 'SEARCH_RESULT_RECEIVE'
};

import { Injectable } from '@angular/core';
@Injectable()
export class SearchCardsActions {
  constructor(private ngRedux: NgRedux<any>, private service: CardsService) {

  }

  // Call out to thunk middleware
  search(keyword: string) {
    return (dispatch) => {
      dispatch(this.request(keyword));

      return this.service.search(keyword).subscribe((response: Response) => {
        dispatch(this.receive(<any[]>response.json()));
      });

      // TODO: Error handling
    }
  }

  // Action Creators
  private request(keyword: string) {
    return {
      type: SEARCH_CARDS_ACTIONS.REQUEST,
      payload: keyword
    };
  }

  private receive(items: any[]) {
    return {
      type: SEARCH_CARDS_ACTIONS.RECEIVE,
      payload: {
        items: items
      }
    };
  }
}

