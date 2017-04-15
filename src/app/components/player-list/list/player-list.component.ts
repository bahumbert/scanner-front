import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list'
import { PlayerListService } from '../../../services/player-list-service'

import {NotificationsService} from 'angular2-notifications';

import { UrlService } from '../../../services/url-service';


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
    numberPlayers: number = 0;
    urlStats: string;
    templateWindow: any;

    selectedLineId: string;
    selectedLineJoueur: string;

    constructor(private playerListService: PlayerListService, private notificationsService: NotificationsService,
        private urlService: UrlService) {
        this.urlStats = this.urlService.getHazeronStatsRootUrl();
        this.templateWindow = window;
    }

    ngOnInit() {
        this.getListe();
    }

    getListe(){
        let that = this;
        this.playerListService.getListJoueurs().subscribe(
            playerList => {
                this.data = playerList;
                this.numberPlayers = this.data.length;
                that.viewIsLoad = true;
            },
            error => {
                this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
            }
        )
    }

    modalSelectionOpen(item: PlayerList){
        this.selectedLineId = item.id;
        this.selectedLineJoueur = item.player;
    }


}
