//import { TestDataTable } from '../model/test-data-table'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDb implements InMemoryDbService{
    createDb(){
        let listeJoueurs =
            [
                { "id": "pDBNXVB", "player": "Byen", "urlEmpireImage": null, "empire": "Axia", "connection": '2015-09-23 20:42:29'},
                { "id": "pIXINVC", "player": "Ciella", "urlEmpireImage": null, "empire": "Septimus Prime", "connection": '2015-09-23 20:01:20'},
                { "id": "pSBGUC", "player": "DynamOri", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/106.png", "empire": "French Empire", "connection": '2015-09-23 20:13:27'},
                { "id": "pXOYX", "player": "NUMBERZero1032", "urlEmpireImage": "http://hazeron.com/EmpireStandings2015/109.png", "empire": "Syndicate", "connection": '2015-09-23 21:00:18'},
            ]
      return {listeJoueurs};
    }
}
