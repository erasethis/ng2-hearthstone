import { List } from 'Immutable';
import { HEROES_ACTIONS } from './heroes.actions';

export class IHeroesState {
    heroes: List<any>;
    loaded: boolean;
    loading: boolean;
};

const INIT_STATE = {
    heroes: List([]),
    loaded: false,
    loading: false
};

const NOP = {
    type: undefined,
    payload: undefined
};

export function heroes(state: any = INIT_STATE, action: any = NOP) {
    switch (action) {
        case HEROES_ACTIONS.HEROES_REQUEST:
            return Object.assign({}, state, {
                heroes: List([]),
                loaded: false,
                loading: true
            });
        default:
            return state;
    }
};