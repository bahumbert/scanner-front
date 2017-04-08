import { Component, OnInit } from '@angular/core';
import { TestDataTable } from '../../model/test-data-table'
import { ListeJoueursService } from '../../services/liste-joueurs-service'

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.css']
})

export class ListJoueursComponent implements OnInit {

    data: Array<TestDataTable>;
    rowsOnPage: number = 500;

    constructor(private listeJoueursService: ListeJoueursService) { }

    ngOnInit() {
        this.getListe();
    }

    getListe(){
        this.listeJoueursService.getListJoueurs().then(liste => this.data = liste);
    }

}
