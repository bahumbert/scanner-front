import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list';
import { PlayerListService } from '../../../services/player-list-service';
import { GraphConfigService } from '../../../services/graph-config.service';

import { NotificationsService } from 'angular2-notifications';

import { UrlService } from '../../../services/url-service';

@Component({
  selector: 'app-general-graph',
  templateUrl: './general-graph.component.html',
  styleUrls: ['./general-graph.component.css']
})

export class GeneralGraphComponent implements OnInit {

    dataSource: Object;
    dataSourceBars: Object;
    dataLine:Object;
    dataColumn: Object;

    title: string;

    tableData: Array<PlayerList>;
    rowsOnPageGraph = 500;
    sortOrderGraph: string = 'asc';
    sortByGraph: string = 'player';
    filterQueryGraph: string = '';
    filterFieldGraph: string = "player";

    showEmpire: boolean = true;
    showTable: boolean = false;
    scaleByDate: string = 'mois';
    scaleByEmpire: string = 'mois précédent';
    yAxisName: string = "Nombre de joueurs actifs";
    originXAxisByDate: Date;
    originXAxisByEmpire: Date;
    endXAxisByDate: Date;

    byDateIsLoad: boolean = false;
    byEmpireIsLoad: boolean = false;
    tableIsLoad: boolean = false;

    templateWindow: any;
    urlStats: string;

    selectedLineValue: string = "";
    selectedColumnValue: string = "";
    selectedLineId: string;
    selectedLineJoueur: string;
    captionByDate: string = "Nombre de joueurs actifs par "+this.scaleByDate;
    captionByEmpire: string = "Joueurs actifs par empire, lors du "+this.scaleByEmpire;

    constructor(private playerListService: PlayerListService, private graphConfigService: GraphConfigService,
        private notificationsService: NotificationsService, private urlService: UrlService) {
        let d = new Date();
        let d2 = new Date(d.setMonth(d.getMonth()-1));
        this.endXAxisByDate = d2;
        d.setMonth(d.getMonth()-10);
        this.originXAxisByDate = d;
        this.originXAxisByEmpire = d2;
        this.templateWindow = window;
        this.urlStats = this.urlService.getHazeronStatsRootUrl();
    }

    ngOnInit() {
        this.getDataGraphs();
    }

    reloadByDateGraph(){
        this.captionByDate = "Nombre de joueurs actifs par "+this.scaleByDate;
        this.byDateIsLoad = false;
        this.getByDateGraph();
    }

    reloadByEmpireGraph(){
        if (this.scaleByEmpire == 'mois précédent'){
            this.captionByEmpire = "Joueurs actifs par empire, lors du "+this.scaleByEmpire;
        }
        else if (this.scaleByEmpire == 'semaine précédente'){
            this.captionByEmpire = "Joueurs actifs par empire, lors de la "+this.scaleByEmpire;
        }
        this.byEmpireIsLoad = false;
        this.getByEmpireGraph();
    }

    getByDateGraph(){
        let that = this;
        this.playerListService.getDataGraphActivePlayersByDate(this.scaleByDate, this.originXAxisByDate, this.endXAxisByDate).subscribe(
        list => {
            that.dataLine = list;
            that.dataSource = {
                "chart": that.graphConfigService.getConfLineGraph(that.captionByDate, that.scaleByDate, that.yAxisName),
                "data": that.dataLine,
                //"trendlines": that.graphConfigService.getTrendLine(220,"Moyenne"),
            };
            that.byDateIsLoad = true;

        },
        error => {
            this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
        });
    }

    getByEmpireGraph(){
        let that = this;
        this.playerListService.getDataGraphActivePlayersByEmpire(this.scaleByEmpire, this.originXAxisByEmpire).subscribe(
        list => {
            that.dataColumn = list;
            that.dataSourceBars = {
                "chart": that.graphConfigService.getConfColumnGraph(that.captionByEmpire, that.scaleByEmpire, that.yAxisName),
                "data": that.dataColumn,
            };
            that.byEmpireIsLoad = true;
        },
        error => {
            this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
        });
    }

    getDataGraphs(){
        this.getByDateGraph();
        this.getByEmpireGraph();
    }

    selectedActivesByDate() {
       var that = this;
       return (eve, arg) => {
           that.selectedLineValue = arg.categoryLabel;
           that.selectedColumnValue = "";
           that.tableIsLoad = false;
           this.playerListService.getListActivePlayersByDate(arg.categoryLabel).subscribe(
           list => {
                that.tableData = list;
                that.tableIsLoad = true;
           },
           error => {
               this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
           });
           that.showEmpire = true;
           that.showTable = true;
       }
   }

   seletedActivesByEmpire(){
       var that = this;
       return (eve, arg) => {
           that.selectedColumnValue = arg.categoryLabel;
           that.selectedLineValue = "";
           that.showEmpire = false;
           that.tableIsLoad = false;
           that.playerListService.getListActivePlayersByEmpire(arg.categoryLabel).subscribe(
           list => {
               that.tableData = list;
               that.tableIsLoad = true;
               that.filterFieldGraph = 'player';
           },
           error => {
               this.notificationsService.error('Une erreur est survenue', 'Veuillez contacter votre empereur favori');
           });
           that.showTable = true;
       }
   }

   eventsLine = {
          dataPlotClick: this.selectedActivesByDate()
      }

  eventsColumn = {
         dataPlotClick: this.seletedActivesByEmpire()
     }

     modalSelectionOpen(item: PlayerList){
         this.selectedLineId = item.id;
         this.selectedLineJoueur = item.player;
     }
}
