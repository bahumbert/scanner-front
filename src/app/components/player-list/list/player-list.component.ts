import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list'
import { PlayerListService } from '../../../services/player-list-service'

import {ViewChild}  from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

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

    constructor(private playerListService: PlayerListService, private notificationsService: NotificationsService) { }

    ngOnInit() {
        this.getListe();
    }

    getListe(){
        let that = this;
        this.playerListService.getListJoueurs().subscribe(
            playerList => {
                this.data = playerList;
                that.viewIsLoad = true;
            },
            error => {
                this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
            }
        )
        /*this.playerListService.getListJoueurs().then(function(list){
            that.data = list;
            that.viewIsLoad = true;
        });*/
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
