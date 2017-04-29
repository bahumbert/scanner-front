import { Component, OnInit } from '@angular/core';

import { Player } from '../../../model/player'
import { PlayerListService } from '../../../services/player-list-service'

import {NotificationsService} from 'angular2-notifications';

import { UrlService } from '../../../services/url-service';
import * as Moment from 'moment/moment';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

    viewIsLoad: boolean = false;

    data: Array<Player>;
    rowsOnPage: number = 5000;
    filterQuery = "";
    sortBy = "name";
    sortOrder = "asc";
    filterField: string = 'name';
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
        this.playerListService.getListJoueurs().subscribe(
            list => {
                this.data = list;
                this.numberPlayers = this.data.length;
                this.convertDate();
            },
            error => {
                this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
            }
        )
    }

    modalSelectionOpen(item: Player){
        this.selectedLineId = item.id;
        this.selectedLineJoueur = item.name;
    }

    convertDate(){
        this.data.forEach(player => {
            if (player.connections){
                player.connections.forEach(connection => {
                    connection.timestamp_login = Moment.unix(Number(connection.timestamp_login)).format('YYYY-MM-DD HH:mm:ss');
                    connection.timestamp_logout = Moment.unix(Number(connection.timestamp_logout)).format('YYYY-MM-DD HH:mm:ss');
                });
            }
            if (player.timestamp_login){
               player.timestamp_login = Moment.unix(Number(player.timestamp_login)).format('YYYY-MM-DD HH:mm:ss');
            }
        });
       this.viewIsLoad = true;
    }

}
