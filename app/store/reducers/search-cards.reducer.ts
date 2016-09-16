import { SEARCH_CARDS_ACTIONS } from '../../actions/search-cards.actions';

export interface ISearchCardsState {
  searching: boolean;
  keyword: string;
  items: any[];
}

const INIT_STATE: ISearchCardsState = {
  searching: false,
  keyword: '',
  items: []
};

export function searchCards(state = INIT_STATE, action): ISearchCardsState {
  switch (action.type) {
    case SEARCH_CARDS_ACTIONS.REQUEST:
      return Object.assign({}, state, {
        searching: true,
        keyword: action.payload,
        items: state.items
      });
    case SEARCH_CARDS_ACTIONS.RECEIVE:
      let items = action.payload.items;
      return Object.assign({}, state, {
        searching: state.searching,
        keyword: state.keyword,
        items
      });
    default:
      return state;
  }
}

