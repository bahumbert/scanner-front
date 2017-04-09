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

getDataGraphActivePlayersByDate(scale, origin: Date, end: Date): Promise<Object>{
    let dateOrigin: string;
    let dateEnd: string;
    if (scale == 'mois'){
        dateOrigin = origin.getMonth() + ' ' + origin.getFullYear();
        dateEnd = end.getMonth() + ' ' + end.getFullYear();
    }
    else if (scale == 'jours') {
        dateOrigin = origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
        dateEnd =  origin.getDate() + ' ' + end.getMonth() + ' ' + end.getFullYear();
    }

    return Promise.resolve(DATALINEGRAPH);
}

getDataGraphActivePlayersByEmpire(scale, origin: Date): Promise<Object>{
    let dateOrigin: string;
    let dateEnd: string;
    if (scale == 'mois'){
        dateOrigin = origin.getMonth() + ' ' + origin.getFullYear();
        origin.setMonth(origin.getMonth()+1);
        dateEnd = origin.getMonth() + ' ' + origin.getFullYear();
    }
    else if (scale == 'jours') {
        dateOrigin = origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
        origin.setDate(origin.getDate()+1);
        dateEnd =  origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
    }

    return Promise.resolve(DATACOLUMNGRAPH);
}

getListActivePlayersByEmpire(empire: string): Promise<PlayerList[]>{
    return Promise.resolve(DATAACTIFSBYEMPIRE);
}

getListActivePlayersByDate(date: string): Promise<PlayerList[]>{
    return Promise.resolve(DATAACTIFS);
}

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
