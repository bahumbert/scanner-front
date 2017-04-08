import { Component, OnInit } from '@angular/core';
import { ListeJoueurs } from '../../model/liste-joueurs'
import { ListeJoueursService } from '../../services/liste-joueurs-service'

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.css']
})

export class ListJoueursComponent implements OnInit {

    viewIsLoad: boolean = false;

    data: Array<ListeJoueurs>;
    rowsOnPage: number = 500;
    filterQuery = "";
    sortBy = "joueur";
    sortOrder = "asc";
    filterField: string = 'joueur';

    constructor(private listeJoueursService: ListeJoueursService) { }

    ngOnInit() {
        this.getListe();
    }

    getListe(){
        let that = this;
        this.listeJoueursService.getListJoueurs().then(function(liste){
            that.data = liste;
            that.viewIsLoad = true;
        });
    }

}
