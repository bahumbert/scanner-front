import { PlayerList } from '../model/player-list'
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import { UrlService } from './url-service';

@Injectable()
export class PlayerListService {

    constructor(private http: Http, private urlService: UrlService) { }

    getListJoueurs(): Promise<PlayerList[]> {

        return this.http.get(this.urlService.getListeJoueursServiceUrl())
                       .toPromise()
                       .then(response => response.json().data as PlayerList[])
                       .catch(this.handleError);

    //return Promise.resolve(TEST);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
