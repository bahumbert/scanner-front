import { PlayerList } from '../model/player-list'
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import { UrlService } from './url-service';

import { DATALINEGRAPH } from '../mock/data-line-graph';
import { DATACOLUMNGRAPH } from '../mock/data-column-graph';
import { DATAACTIFSBYEMPIRE } from '../mock/data-actifs-by-empire';
import { DATAACTIFS } from '../mock/data-actifs';

@Injectable()
export class PlayerListService {

    constructor(private http: Http, private urlService: UrlService) { }

    getListJoueurs(): Promise<PlayerList[]> {

        return this.http.get(this.urlService.getListeJoueursServiceUrl())
                       .toPromise()
                       .then(response => response.json().data as PlayerList[])
                       .catch(this.handleError);
    }

/*getListJoueurs(): Observable<PlayerList[]>{
    return this.http.get(this.urlService.getListeJoueursServiceUrl())
                    .map();
}*/

getDataLineGraph(): Promise<Object>{
    return Promise.resolve(DATALINEGRAPH);
}

getDataColumnGraph(): Promise<Object>{
    return Promise.resolve(DATACOLUMNGRAPH);
}

getListJoueursActifsByEmpire(empire: string): Promise<PlayerList[]>{
    return Promise.resolve(DATAACTIFSBYEMPIRE);
}

getListJoueursActifsByDate(date: string): Promise<PlayerList[]>{
    return Promise.resolve(DATAACTIFS);
}

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
