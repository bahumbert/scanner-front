import { Player } from '../model/player';
import {GraphData } from '../model/graph-data';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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
    //let dateOrigin: string;
    //let dateEnd: string;
    if (scale == 'mois'){
        //dateOrigin = origin.getMonth() + ' ' + origin.getFullYear();
        //dateEnd = end.getMonth() + ' ' + end.getFullYear();
        return this.http.get(this.urlService.getDataGraphByDateMonthUrl())
                       .map(response => response.json().data as GraphData[])
                       .catch(this.handleError);
    }
    else if (scale == 'jour') {
        //dateOrigin = origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
        //dateEnd =  origin.getDate() + ' ' + end.getMonth() + ' ' + end.getFullYear();
        return this.http.get(this.urlService.getDataGraphByDateDayUrl())
                       .map(response => response.json().data as GraphData[])
                       .catch(this.handleError);
    }


}

getDataGraphActivePlayersByEmpire(scale, from: number, to: number): Observable<Array<GraphData>>{
    /*let dateOrigin: string;
    let dateEnd: string;*/
    if (scale == 'mois précédent'){
        /*dateOrigin = origin.getMonth() + ' ' + origin.getFullYear();
        origin.setMonth(origin.getMonth()+1);
        dateEnd = origin.getMonth() + ' ' + origin.getFullYear();*/

        return this.http.get(this.urlService.getDataGraphByEmpireMonthUrl())
                       .map(response => response.json().data as GraphData[])
                       .catch(this.handleError);
    }
    else if (scale == 'semaine précédente') {
        /*dateOrigin = origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
        origin.setDate(origin.getDate()+1);
        dateEnd =  origin.getDate() + ' ' + origin.getMonth() + ' ' + origin.getFullYear();
*/
        return this.http.get(this.urlService.getDataGraphByEmpireWeekUrl())
                       .map(response => response.json().data as GraphData[])
                       .catch(this.handleError);
    }
}

getListActivePlayersByEmpire(empire: string): Observable<Array<Player>>{
    return this.http.get(this.urlService.getDataActifsByEmpireUrl())
                   .map(response => response.json().data as Player[])
                   .catch(this.handleError);
}

getListActivePlayersByDate(date: string): Observable<Array<Player>>{
    return this.http.get(this.urlService.getDataActifsByDateUrl())
                   .map(response => response.json().data as Player[])
                   .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
