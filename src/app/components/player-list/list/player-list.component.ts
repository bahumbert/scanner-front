import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list'
import { PlayerListService } from '../../../services/player-list-service'

import {ViewChild}  from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    viewIsLoad: boolean = false;

    data: Array<PlayerList>;
    rowsOnPage: number = 500;
    filterQuery = "";
    sortBy = "player";
    sortOrder = "asc";
    filterField: string = 'player';
    parentRouter: any;

    selectedLineId: string;
    selectedLineJoueur: string;

    @ViewChild('modalSelection') modal: any;

    constructor(private playerListService: PlayerListService) { }

    ngOnInit() {
        this.getListe();
    }

    getListe(){
        let that = this;
        this.playerListService.getListJoueurs().then(function(list){
            that.data = list;
            that.viewIsLoad = true;
        });
    }

    modalSelectionOpen(item: PlayerList){

        this.selectedLineId = item.id;
        this.selectedLineJoueur = item.player;

        this.modal.open();
    }

    modalSelectionClose(action: string){
        if (action == 'statsHazeron'){
            window.open("http://hazeron.com/EmpireStandings2015/"+this.selectedLineId+".html");
        }
        this.modal.close();
    }

}
