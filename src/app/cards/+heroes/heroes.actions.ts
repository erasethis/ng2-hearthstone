export const HEROES_ACTIONS = {
    HEROES_REQUEST: 'HEROES_REQUEST',
    HEROES_FETCH_RESULT: 'HEROES_FETCH_RESULT'
};

export interface ICardsService {
    getHeroes(): any;
};

export class HeroesActions {
    constructor(private cardsService: ICardsService) { }

    load() {
        return (dispatch) => {
            dispatch({
                type: HEROES_ACTIONS.HEROES_REQUEST,
                payload: { }
            });
            let heroes$ = this.cardsService.getHeroes();
            dispatch({
                type: HEROES_ACTIONS.HEROES_FETCH_RESULT,
                payload: { 
                    heroes: heroes$
                }
            });
        };
    }
};
