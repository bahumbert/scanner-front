import { TestDataTable } from '../model/test-data-table'
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ListeJoueursService {

    private listeUrl = 'api/listeJoueurs';

    constructor(private http: Http) { }

    getListJoueurs(): Promise<TestDataTable[]> {

        return this.http.get(this.listeUrl)
                       .toPromise()
                       .then(response => response.json().data as TestDataTable[])
                       .catch(this.handleError);

    //return Promise.resolve(TEST);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
