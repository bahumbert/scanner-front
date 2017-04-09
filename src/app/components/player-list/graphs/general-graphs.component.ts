import { Component, OnInit } from '@angular/core';

import { PlayerList } from '../../../model/player-list';
import { PlayerListService } from '../../../services/player-list-service';
import { GraphConfigService } from '../../../services/graph-config.service';

import {ViewChild}  from '@angular/core';

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
    filterField: string = "";
    title: string;
    rowsOnPage = 500;
    tableData: Array<PlayerList>;
    sortOrder: string = 'asc';
    sortBy: string = 'player';
    showEmpire: boolean = true;
    showTable: boolean = false;
    echelleLine: string = 'mois';
    echelleColumn: string = 'mois précedent';
    yAxisName: string = "Nombre de joueurs actifs";
    viewIsLoad: boolean = false;
    tableIsLoad: boolean = false;
    selectedLineValue: string = "";
    selectedColumnValue: string = "";
    selectedLineId: string;
    selectedLineJoueur: string;
    captionLine: string = "Nombre de joueurs actifs par "+this.echelleLine;
    captionColumn: string = "Joueurs actifs par empire, lors du "+this.echelleColumn;

    @ViewChild('modalSelection') modal: any;

    constructor(private playerListService: PlayerListService, private graphConfigService: GraphConfigService) {
    }

    ngOnInit() {
        this.getDataGraphs();
    }

    getDataGraphs(){
        let that = this;
        this.playerListService.getDataLineGraph().then(function(list){
            that.dataLine = list;
            that.checkViewIsLoad();
        });

        this.playerListService.getDataColumnGraph().then(function(list){
            that.dataColumn = list;
            that.checkViewIsLoad();
        });
    }

    checkViewIsLoad(){
        if (!this.viewIsLoad && this.dataLine != null && this.dataColumn != null){
            this.dataSource = {
                "chart": this.graphConfigService.getConfLineGraph(this.captionLine, this.echelleLine, this.yAxisName),
                "data": this.dataLine,
            };

            this.dataSourceBars = {
                "chart": this.graphConfigService.getConfColumnGraph(this.captionColumn, this.echelleColumn, this.yAxisName),
                "data": this.dataColumn,
            };
            this.viewIsLoad = true;
        }
    }

    selectedLine() {
       var that = this;
       return (eve, arg) => {
           that.selectedLineValue = arg.categoryLabel;
           that.selectedColumnValue = "";
           that.tableIsLoad = false;
           this.playerListService.getListJoueursActifsByDate(arg.categoryLabel).then(function(list) {
                that.tableData = list;
                that.tableIsLoad = true;
           });
           that.showEmpire = true;
           that.showTable = true;
       }
   }

   seletedColumn(){
       var that = this;
       return (eve, arg) => {
           that.selectedColumnValue = arg.categoryLabel;
           that.selectedLineValue = "";
           that.showEmpire = false;
           that.tableIsLoad = false;
           that.playerListService.getListJoueursActifsByEmpire(arg.categoryLabel).then(function(list){
               that.tableData = list;
               that.tableIsLoad = true;
           });
           that.showTable = true;
       }
   }

   eventsLine = {
          dataPlotClick: this.selectedLine()
      }

  eventsColumn = {
         dataPlotClick: this.seletedColumn()
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
