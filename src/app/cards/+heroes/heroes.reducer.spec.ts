import { async, inject, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { heroes } from './heroes.reducer';

describe('Heroes Reducer', () => {
    it('returns an initial state if called for undefined state and action', () => {
        let actual = heroes(undefined, undefined);
        expect(actual).toBeDefined();
    });
    it('returns the same state if the action does not apply', () => {
        let action = 'FOO';
        let state = { foo: 'bar' };
        let actual = heroes(state, action);
        expect(actual).toEqual(state);
    });
});