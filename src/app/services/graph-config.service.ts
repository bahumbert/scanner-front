import { Injectable } from '@angular/core';

@Injectable()
export class GraphConfigService{

    paletteColors: string = `#0000ee, #ee0000, #00ee00, #eeee00, #ee00ee, #00eeee,#0075c2, #00c275,
        #7500c2, #aa75c2, #75aac2, #75c2aa, #75c200, #c20075, #c27500, #000000,
        #cccccc`;


    constructor(){}

    getConfLineGraph(caption: string, echelle: string, yAxisName: string){
        return {
            //"caption": caption,
            "subCaption": "Cliquez sur un point pour voir la liste",
            "drawCrossLine": "1",
            "crossLineColor": "#0d0d0d",
            "crossLineAlpha": "100",
            "animation": "1",
            "xAxisName": echelle,
            "yAxisName": yAxisName,
            "lineThickness": "2",
            "paletteColors": this.paletteColors,
            "bgColor": "#ffffff",
            "showShadow": "1",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineDashed": "1",
            "divLineDashLen": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "showborder": "0",
            "connectNullData": "0",
            /*"rotateLabels": "1",
            "slantLabels": "1",*/
            "loadMessage": "Chargement...",
            "loadMessageColor": "#000000"
        }
    }

    getConfColumnGraph(caption: string, echelle: string, yAxisName: string){
        return {
                //"caption": caption,
                "subCaption": "Cliquez sur un point pour voir la liste",
                //"drawCrossLine": "1",
                //"crossLineColor": "#0d0d0d",
                //"crossLineAlpha": "100",
                "animation": "1",
                "xAxisName": echelle,
                "yAxisName": yAxisName,
                "lineThickness": "2",
                "paletteColors": this.paletteColors, //'#0000ee',
                "bgColor": "#ffffff",
                "showShadow": "1",
                "canvasBgColor": "#ffffff",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "divlineAlpha": "100",
                "divlineColor": "#999999",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "showXAxisLine": "1",
                "xAxisLineThickness": "1",
                "xAxisLineColor": "#999999",
                "showAlternateHGridColor": "0",
                "connectNullData": "0",
                "showborder": "0",
                /*"rotateLabels": "1",
                "slantLabels": "1",*/
                "loadMessage": "Chargement...",
                "loadMessageColor": "#000000"
        }
    }

    getTrendLine(value, name){
        return [{
            "line": [{
                    "startvalue": value,
                    "endvalue": "",
                    "istrendzone": "",
                    "valueonright": "1",
                    "color": "fda813",
                    "displayvalue": name,
                    "showontop": "1",
                    "thickness": "2",
                    "origText": name,
                }],
            }];
    }
}
