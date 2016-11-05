// Does that mean I have to expose each reducer's initial state here?
import { ISearchCardsState } from './reducers/reducers';

export interface IAppState { searchCards: ISearchCardsState };