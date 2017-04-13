//import { TestDataTable } from '../model/test-data-table'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDbListeJoueurs implements InMemoryDbService{
    createDb(){
        let listeJoueurs =
            [
                { "id": "pDBNXVB", "player": "Byen", "urlEmpireImage": null, "empire": "Axia", "connection": '2015-09-23 20:42:29'},
                { "id": "pIXINVC", "player": "Ciella", "urlEmpireImage": null, "empire": "Septimus Prime", "connection": '2015-09-23 20:01:20'},
                { "id": "pSBGUC", "player": "DynamOri", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/106.png", "empire": "French Empire", "connection": '2015-09-23 20:13:27'},
                { "id": "pXOYX", "player": "NUMBERZero1032", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/109.png", "empire": "Syndicate", "connection": '2015-09-23 21:00:18'},
            ];
        let dataGraphByDateDay =
            [
                {"value": "12", "label": "10 Avril"},
                {"value": "10", "label": "11 Avril"},
                {"value": "18", "label": "12 Avril"},
                {"value": "15", "label": "13 Avril"},
            ];

        let dataGraphByDateMonth =
            [
                { "label": "Juillet 2016", "value": "190"},
                { "label": "Août 2016", "value": "240"},
                { "label": "Septembre 2016", "value": "210"},
                { "label": "Octobre 2016", "value": "250"},
                { "label": "Novembre 2016", "value": "235"},
                { "label": "Décembre 2016", "value": "190"},
                { "label": "Janvier 2017",  "value": "240"},
                { "label": "Février 2017",  "value": "210"},
                { "label": "Mars 2017", "value": "250"},
                { "label": "Avril 2017", "value": "80"}
            ];
        let dataGraphByEmpireWeek =
            [
                {"value": "123", "label": "Bon flemme de sortir des données de nulle part"},
            ];
        let dataGraphByEmpireMonth =
            [
                { "label": "Syndicate", "value": "80"},
                { "label": "French Empire", "value": "50"},
                { "label": "Aegis", "value": "15"},
                { "label": "Black Wave", "value": "13"},
                { "label": "Per Ardua Ad Astrum", "value": "8"},
                { "label": "Equestria Hegemony", "value": "7"},
                { "label": "Solstice", "value": "5"},
                { "label": "Foxtail", "value": "4"},
                { "label": "Empire random", "value": "3"},
                { "label": "Empire solo random", "value": "1"}
            ];

        let dataActifsByDate =
            [
                { "id": "pDBNXVB", "player": "Byen", "urlEmpireImage": null, "empire": "Axia", "connection": '2015-09-23 20:42:29'},
                { "id": "pIXINVC", "player": "Ciella", "urlEmpireImage": null, "empire": "Septimus Prime", "connection": '2015-09-23 20:01:20'},
                { "id": "pSBGUC", "player": "DynamOri", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/106.png", "empire": "French Empire", "connection": '2015-09-23 20:13:27'},
                { "id": "pXOYX", "player": "NUMBERZero1032", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/109.png", "empire": "Syndicate", "connection": '2015-09-23 21:00:18'},
            ];
        let dataActifsByEmpire =
            [
                    { "id": "Non mais tu", "player": "Crois vraiment que", "connection": "J'ai que ça à faire ?"},
            ]

      return {listeJoueurs, dataGraphByDateDay, dataGraphByDateMonth, dataGraphByEmpireMonth, dataGraphByEmpireWeek, dataActifsByDate, dataActifsByEmpire};
    }
}
