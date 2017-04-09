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

    viewIsLoad: boolean = false;
    tableIsLoad: boolean = false;

    selectedLineValue: string = "";
    selectedColumnValue: string = "";
    selectedLineId: string;
    selectedLineJoueur: string;
    captionByDate: string = "Nombre de joueurs actifs par "+this.scaleByDate;
    captionByEmpire: string = "Joueurs actifs par empire, lors du "+this.scaleByEmpire;

    @ViewChild('modalSelection2') modal: any;

    constructor(private playerListService: PlayerListService, private graphConfigService: GraphConfigService) {
        let d = new Date();
        let d2 = new Date(d.setMonth(d.getMonth()-1));
        this.endXAxisByDate = d2;
        d.setMonth(d.getMonth()-10);
        this.originXAxisByDate = d;
        this.originXAxisByEmpire = d2;
    }

    ngOnInit() {
        this.getDataGraphs();
    }

    getDataGraphs(){
        let that = this;
        this.playerListService.getDataGraphActivePlayersByDate(this.scaleByDate, this.originXAxisByDate, this.endXAxisByDate).then(function(list){
            that.dataLine = list;
            that.checkViewIsLoad();
        });

        this.playerListService.getDataGraphActivePlayersByEmpire(this.scaleByEmpire, this.originXAxisByEmpire).then(function(list){
            that.dataColumn = list;
            that.checkViewIsLoad();
        });
    }

    checkViewIsLoad(){
        if (!this.viewIsLoad && this.dataLine != null && this.dataColumn != null){
            this.dataSource = {
                "chart": this.graphConfigService.getConfLineGraph(this.captionByDate, this.scaleByDate, this.yAxisName),
                "data": this.dataLine,
            };

            this.dataSourceBars = {
                "chart": this.graphConfigService.getConfColumnGraph(this.captionByEmpire, this.scaleByEmpire, this.yAxisName),
                "data": this.dataColumn,
            };
            this.viewIsLoad = true;
        }
    }

    selectedActivesByDate() {
       var that = this;
       return (eve, arg) => {
           that.selectedLineValue = arg.categoryLabel;
           that.selectedColumnValue = "";
           that.tableIsLoad = false;
           this.playerListService.getListActivePlayersByDate(arg.categoryLabel).then(function(list) {
                that.tableData = list;
                that.tableIsLoad = true;
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
           that.playerListService.getListActivePlayersByEmpire(arg.categoryLabel).then(function(list){
               that.tableData = list;
               that.tableIsLoad = true;
               that.filterFieldGraph = 'player';
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

         this.modal.open();
     }

     modalSelectionClose(action: string){
         if (action == 'statsHazeron'){
             window.open("http://hazeron.com/EmpireStandings2015/"+this.selectedLineId+".html");
         }
         this.modal.close();
     }

}
