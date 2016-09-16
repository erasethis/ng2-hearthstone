import { combineReducers } from 'redux'
import { searchCards} from './reducers/reducers';
import { IAppState } from './app-state.model';

export const ng2HearthstoneApp = combineReducers<IAppState>({
    searchCards
});
