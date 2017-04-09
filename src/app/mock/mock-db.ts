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
        /*[
          {
            "name": "Wing",
            "email": "tellus.eu.augue@arcu.com",
            "city": "Paglieta",
            "age": 25
          },
          {
            "name": "Whitney",
            "email": "sed.dictum@Donec.org",
            "city": "Bear",
            "age": 32
          },
          {
            "name": "Oliver",
            "email": "mauris@Craslorem.ca",
            "city": "Bruderheim",
            "age": 31
          },
          {
            "name": "Vladimir",
            "email": "mi.Aliquam@Phasellus.net",
            "city": "Andenne",
            "age": 50
          },
          {
            "name": "Maggy",
            "email": "ligula@acorciUt.edu",
            "city": "HomprŽ",
            "age": 24
          },
          {
            "name": "Unity",
            "email": "Nunc.commodo@justo.org",
            "city": "Ried im Innkreis",
            "age": 23
          },
          {
            "name": "Ralph",
            "email": "augue@penatibuset.net",
            "city": "Cwmbran",
            "age": 45
          },
          {
            "name": "Medge",
            "email": "sagittis.augue@taciti.edu",
            "city": "Maranguape",
            "age": 21
          },
          {
            "name": "Orli",
            "email": "nascetur@mipedenonummy.edu",
            "city": "Gibbons",
            "age": 38
          },
          {
            "name": "Ainsley",
            "email": "morbi.tristique.senectus@enim.ca",
            "city": "Guardia Perticara",
            "age": 43
          },
          {
            "name": "Candice",
            "email": "turpis.non.enim@fringillami.com",
            "city": "Aylmer",
            "age": 25
          },
          {
            "name": "Alexis",
            "email": "lacinia.orci.consectetuer@dolorFuscefeugiat.ca",
            "city": "Halkirk",
            "age": 35
          },
          {
            "name": "Diana",
            "email": "pede.Cras@a.edu",
            "city": "Palermo",
            "age": 31
          }
      ];*/
      return {listeJoueurs};
    }
}
