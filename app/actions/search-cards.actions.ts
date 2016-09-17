import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { CardsService } from '../cards/cards.service';

export const SEARCH_CARDS_ACTIONS = {
  SEARCH_CARDS_REQUEST: 'SEARCH_CARDS_REQUEST',
  SEARCH_CARDS_FETCH_RESULT: 'SEARCH_CARDS_FETCH_RESULT'
};

@Injectable()
export class SearchCardsActions {
  constructor(private ngRedux: NgRedux<any>, private service: CardsService) {

  }

  // Call out to thunk middleware
  search(keyword: string) {
    return (dispatch) => {
      dispatch(this.request(keyword));

      return this.service.search(keyword).subscribe((response: Response) => {
        dispatch(this.fetchResult(<any[]>response.json()));
      });

      // TODO: Error handling
    }
  }

  // Action Creators
  private request(keyword: string, collectible?: boolean, locale?: string) {
    return {
      type: SEARCH_CARDS_ACTIONS.SEARCH_CARDS_REQUEST,
      payload: {
        keyword,
        collectible,
        locale
      }
    };
  }

  private fetchResult(items: any[]) {
    return {
      type: SEARCH_CARDS_ACTIONS.SEARCH_CARDS_FETCH_RESULT,
      payload: {
        items: items
      }
    };
  }
}

