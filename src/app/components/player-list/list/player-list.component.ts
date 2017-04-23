import { Component, OnInit } from '@angular/core';

import { Player } from '../../../model/player'
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

    data: Array<Player>;
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
        this.playerListService.getListJoueurs().subscribe(
            list => {
                console.log(list);
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
                    if(!connection.date_login){
                        if (connection.date_login_month < 10){
                            connection.date_login = connection.date_login_year+'-0'+connection.date_login_month+'-'+connection.date_login_day+' '+connection.date_login_time;
                        }
                        else {
                            connection.date_login = connection.date_login_year+'-'+connection.date_login_month+'-'+connection.date_login_day+' '+connection.date_login_time;
                        }
                    }
                });
                if (!player.lastConnection){
                   player.lastConnection = player.connections[player.connections.length-1];
                }
            }
        });
       this.viewIsLoad = true;
    }

}
