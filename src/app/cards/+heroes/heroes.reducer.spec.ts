import { async, inject, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { List } from 'immutable';
import { heroes } from './heroes.reducer';

describe('Heroes Reducer', () => {
    it('should return an initial state if called for undefined state and action', () => {
        let actual = heroes();
        expect(actual).toBeDefined();
    });
    it('should return the same state if the action does not apply', () => {
        let action = 'foo';
        let state = { foo: 'bar' };
        let actual = heroes(state, action);
        expect(actual).toEqual(state);
    });
    describe('HEROES_REQUEST', () => {
        it('should clear the heroes array', () => {
            let action = 'HEROES_REQUEST';
            let state = { heroes: List(['foo', 'bar']) };
            let actual = heroes(state, action);
            expect(actual.heroes.size).toBe(0);
        });
        it('should set loading to true', () => {
            let action = 'HEROES_REQUEST';
            let state = { loading: false };
            let actual = heroes(state, action);
            expect(actual.loading).toBe(true);
        });
        it('should set loaded to false', () => {
            let action = 'HEROES_REQUEST';
            let state = { loaded: true };
            let actual = heroes(state, action);
            expect(actual.loaded).toBe(false);
        });
    });
    describe('HEROES_FETCH_RESULT', () => {
        it('should fill the heroes array with elements from the payload', () => {
            let action = { type: 'HEROES_FETCH_RESULT', payload: { heroes: [ 'foo', 'bar'] } };
            let state = { heroes: [] };
            let actual = heroes(state, action);
            expect(actual.heroes).toEqual(List([ 'foo', 'bar' ]));
        });
    });
});