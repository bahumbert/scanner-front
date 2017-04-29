export class UrlService{
    constructor(){}

    getRootUrl(): string{
        return 'localhost:4200/';
    }

    getRootServerUrl(): string{
        return 'http://localhost:8080/';
    }

    getHazeronStatsRootUrl(){
        return "http://hazeron.com/EmpireStandings2015/";
    }

    getListeJoueursServiceUrl(): string{
        return this.getRootServerUrl()+'players?online=true';
    }

    getDataGraphByDateUrl(){
        return this.getRootServerUrl()+'players/actives/date';
    }

    getDataGraphByEmpireUrl(){
        return this.getRootServerUrl()+'players/actives/empire';
    }

    getDataActifsByEmpireUrl(){
        return this.getRootServerUrl()+'players/actives/empire';
    }

    getDataActifsByDateUrl(){
        return this.getRootServerUrl()+'players/actives/date';
    }
}
