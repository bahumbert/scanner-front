import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list';
import { PlayerListService } from '../../../services/player-list-service';
import { GraphConfigService } from '../../../services/graph-config.service';

import { NotificationsService } from 'angular2-notifications';

import { UrlService } from '../../../services/url-service';

import {IMyOptions} from 'mydaterangepicker';
import * as Moment from 'moment/moment';

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
    originXAxisByDate: number;
    endXAxisByDate: number;
    originXAxisByEmpire: number;
    endXAxisByEmpire: number;

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

    myDateRangePickerOptions: IMyOptions = {
        dateFormat: 'dd.mm.yyyy',
        dayLabels: {'su': 'Dim', 'mo': 'Lun', 'tu': 'Mar', 'we': 'Mer', 'th': 'Jeu', 'fr': 'Ven', 'sa': 'Sam'},
        monthLabels: {1: 'Jan', 2: 'Fév', 3: 'Mars', 4: 'Avril', 5: 'Mai', 6: 'Juin', 7: 'Juil', 8: 'Août', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Déc'},
        showClearBtn: false,
        showClearDateRangeBtn: false,
        editableDateRangeField: false,
        openSelectorOnInputClick: true
    };

    model: Object;


    constructor(private playerListService: PlayerListService, private graphConfigService: GraphConfigService,
        private notificationsService: NotificationsService, private urlService: UrlService) {
        let lastMonth = Moment();
        lastMonth.month(lastMonth.month()-1).endOf('month');
        let originDate = Moment();
        originDate.month(lastMonth.month()-9).startOf('month');
        this.model =
        {
            beginDate: {
                year: originDate.year(), month: originDate.month()+1, day: originDate.date()
            },
            endDate: {
                year: lastMonth.year(), month: lastMonth.month()+1, day: lastMonth.date()
            }
        };
        this.endXAxisByDate = lastMonth.unix();
        this.originXAxisByDate = originDate.unix();

        this.endXAxisByEmpire = lastMonth.unix();
        this.originXAxisByEmpire = lastMonth.startOf('month').unix();

        this.templateWindow = window;
        this.urlStats = this.urlService.getHazeronStatsRootUrl();
    }

    ngOnInit() {
        this.getDataGraphs();
    }

    reloadByDateGraph($event){

        let beginDate = Moment($event.beginDate);
        beginDate.month(beginDate.month()-1);
        let endDate = Moment($event.endDate);
        endDate.month(endDate.month()-1).endOf('day');
        if (this.scaleByDate == 'mois'){
            beginDate.startOf('month');
            endDate.endOf('month');
        }
        this.captionByDate = "Nombre de joueurs actifs par "+this.scaleByDate;
        this.originXAxisByDate = beginDate.unix();
        this.endXAxisByDate = endDate.unix();
        this.byDateIsLoad = false;
        this.getByDateGraph();
    }

    reloadByEmpireGraph(){
        if (this.scaleByEmpire == 'mois précédent'){
            this.captionByEmpire = "Joueurs actifs par empire, lors du "+this.scaleByEmpire;
            let lastMonth = Moment();
            lastMonth.month(lastMonth.month()-1).endOf('month');
            this.endXAxisByEmpire = lastMonth.unix();
            this.originXAxisByEmpire = lastMonth.startOf('month').unix();
        }
        else if (this.scaleByEmpire == 'semaine précédente'){
            this.captionByEmpire = "Joueurs actifs par empire, lors de la "+this.scaleByEmpire;
            let lastWeek = Moment();
            this.endXAxisByEmpire = lastWeek.startOf('day').unix();
            lastWeek.date(lastWeek.date()-7).startOf('day');
            this.originXAxisByEmpire = lastWeek.unix();
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
        this.playerListService.getDataGraphActivePlayersByEmpire(this.scaleByEmpire, this.originXAxisByEmpire, this.endXAxisByEmpire).subscribe(
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
