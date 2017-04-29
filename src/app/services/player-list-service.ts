import { Player } from '../model/player';
import {GraphData } from '../model/graph-data';
import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Observable';

import { UrlService } from './url-service';

@Injectable()
export class PlayerListService {

constructor(private http: Http, private urlService: UrlService) { }

getListJoueurs(): Observable<Array<Player>>{

    return this.http.get(this.urlService.getListeJoueursServiceUrl())
                    .map(response => response.json().data as Player[])
                    .catch(this.handleError);
}

getDataGraphActivePlayersByDate(scale, from: number, to: number): Observable<Array<GraphData>>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('originDate', String(from));
    params.set('endDate', String(to));
    params.set('scale', scale);
    params.set('count', 'true');

    return this.http.get(this.urlService.getDataGraphByDateUrl(), {search: params})
                   .map(response => response.json().data as GraphData[])
                   .catch(this.handleError);

}

getDataGraphActivePlayersByEmpire(scale, from: number, to: number): Observable<Array<GraphData>>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('originDate', String(from));
    params.set('endDate', String(to));
    //params.scale = scale;
    params.set('count', 'true');

    return this.http.get(this.urlService.getDataGraphByEmpireUrl(), {search: params})
                   .map(response => response.json().data as GraphData[])
                   .catch(this.handleError);

}

getListActivePlayersByEmpire(from: number, to: number, empire: string): Observable<Array<Player>>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('originDate', String(from));
    params.set('endDate', String(to));
    params.set('empire', empire);

    return this.http.get(this.urlService.getDataActifsByEmpireUrl(), {search: params})
                   .map(response => response.json().data as Player[])
                   .catch(this.handleError);
}

getListActivePlayersByDate(from: number, to: number, scale): Observable<Array<Player>>{

    let params: URLSearchParams = new URLSearchParams();
    params.set('originDate', String(from));
    params.set('scale', scale);
    params.set('endDate', String(to));

    return this.http.get(this.urlService.getDataActifsByDateUrl(), {search: params})
                   .map(response => response.json().data as Player[])
                   .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
