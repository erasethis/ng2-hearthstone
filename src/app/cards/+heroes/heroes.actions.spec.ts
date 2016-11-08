import { async, inject, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HeroesActions, HEROES_ACTIONS } from './heroes.actions';

describe('Heroes Actions', () => {
    beforeEach(() => {
        
    });
    describe('load', () => {
        it('should call the dispatch() method with action type HEROES_REQUEST and empty payload', () => {
            let dispatch = jasmine.createSpy('dispatch');
            let cardsService = { getHeroes: () => { } };
            let sut = new HeroesActions(cardsService);
            sut.load()(dispatch);
            expect(dispatch).toHaveBeenCalledWith({ type: HEROES_ACTIONS.HEROES_REQUEST, payload: { } });
        });
        it('should call the getHeroes() method of ICardsService', () => {
            let dispatch = jasmine.createSpy('dispatch');
            let cardsService = { getHeroes: jasmine.createSpy('getHeroes') };
            let sut = new HeroesActions(cardsService);
            sut.load()(dispatch);
            expect(cardsService.getHeroes).toHaveBeenCalled();
        });
        it('should call the dispatch() method with action type HEROES_FETCH_RESULT and the payload received from ICardsService', () => {
            let dispatch = jasmine.createSpy('dispatch');
            let cardsService = { getHeroes: () => 'foo' };
            let sut = new HeroesActions(cardsService);
            sut.load()(dispatch);
            expect(dispatch).toHaveBeenCalledWith({ type: HEROES_ACTIONS.HEROES_FETCH_RESULT, payload: { heroes: 'foo' } });
        });   
    });
});