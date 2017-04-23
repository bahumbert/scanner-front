//import { TestDataTable } from '../model/test-data-table'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockWebServices implements InMemoryDbService{
    createDb(){
        let listeJoueurs =
            [
                { "id": "pDBNXVB", "name": "Byen", "urlEmpireImage": null, "current_empire": "Axia", "lastConnection": {'date_login':'2015-09-23 20:42:29'}},
                { "id": "pIXINVC", "name": "Ciella", "urlEmpireImage": null, "current_empire": "Septimus Prime", "connections": [{'date_login':'2015-09-23 20:01:20'}]},
                { "id": "pSBGUC", "name": "DynamOri", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/106.png", "current_empire": "French Empire", "lastConnection": {'date_login': '2015-09-23 20:13:27'}},
                { "id": "pXOYX", "name": "NUMBERZero1032", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/109.png", "current_empire": "Syndicate", "lastConnection": {'date_login': '2015-09-23 21:00:18'}},
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
                { "id": "pDBNXVB", "name": "Byen", "urlEmpireImage": null, "current_empire": "Axia", "lastConnection": {'date_login': '2015-09-23 20:42:29'}},
                { "id": "pIXINVC", "name": "Ciella", "urlEmpireImage": null, "current_empire": "Septimus Prime", "lastConnection": {'date_login': '2015-09-23 20:01:20'}},
                { "id": "pSBGUC", "name": "DynamOri", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/106.png", "current_empire": "French Empire", "lastConnection": {'date_login': '2015-09-23 20:13:27'}},
                { "id": "pXOYX", "name": "NUMBERZero1032", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/109.png", "current_empire": "Syndicate", "lastConnection": {'date_login': '2015-09-23 21:00:18'}},
            ];
        let dataActifsByEmpire =
            [
                    { "id": "Non mais tu", "name": "Crois vraiment que", "lastConnection": {"date_login": "J'ai que ça à faire ?"}},
            ]

      return {listeJoueurs, dataGraphByDateDay, dataGraphByDateMonth, dataGraphByEmpireMonth, dataGraphByEmpireWeek, dataActifsByDate, dataActifsByEmpire};
    }
}
