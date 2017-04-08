import { Component, OnInit } from '@angular/core';

import { ListeJoueurs } from '../../model/liste-joueurs'
import { ListeJoueursService } from '../../services/liste-joueurs-service'

import {ViewChild}  from '@angular/core';

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
    parentRouter: any;

    selectedLineId: string;
    selectedLineJoueur: string;

    @ViewChild('modalSelection') modal: any;

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

    modalSelectionOpen(item: ListeJoueurs){

        this.selectedLineId = item.id;
        this.selectedLineJoueur = item.joueur;

        this.modal.open();
    }

    modalSelectionClose(action: string){
        if (action == 'statsHazeron'){
            window.open("http://hazeron.com/EmpireStandings2015/"+this.selectedLineId+".html");
        }
        this.modal.close();
    }

}
