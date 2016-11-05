import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { MashapeKey } from '../api/mashape-key';

const BaseUrl: string = 'https://omgvamp-hearthstone-v1.p.mashape.com/';

@Injectable()
export class CardsService {
    constructor(private _http: Http) {}
    get(type: string, attack?: number, collectible?: boolean, cost?: number,
        durability?: number, health?: number, locale?: string): Observable<Response> {
        return this._api('cards/'+ type);
    }
    search(keyword: string, collectible?: boolean, locale?: string): Observable<Response> {
        return this._api('cards/search/' + keyword);
    }
    private _api(relativeUrl: string): Observable<Response> {
        let url = BaseUrl + relativeUrl;
        let headers = new Headers();
        headers.append('X-Mashape-Key', MashapeKey);
        return this._http.get(url, { headers: headers });
    }
}