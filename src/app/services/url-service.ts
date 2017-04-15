export class UrlService{
    constructor(){}

    getRootUrl(): string{
        return 'localhost:4200/';
    }

    getRootServerUrl(): string{
        return 'localhost:8080/';
    }

    getHazeronStatsRootUrl(){
        return "http://hazeron.com/EmpireStandings2015/";
    }

    getListeJoueursServiceUrl(): string{
        return /*this.getRootServerUrl()+*/'api/listeJoueurs';
    }

            /* Probablement fusionner les 2 url ci-dessous */
    getDataGraphByDateDayUrl(){
        return /*this.getRootServerUrl()+*/'api/dataGraphByDateDay';
    }

    getDataGraphByDateMonthUrl(){
        return /*this.getRootServerUrl()+*/'api/dataGraphByDateMonth';
    }


    /* Probablement fusionner les 2 url ci-dessous */
    getDataGraphByEmpireMonthUrl(){
    return /*this.getRootServerUrl()+*/'api/dataGraphByEmpireMonth';
    }

    getDataGraphByEmpireWeekUrl(){
    return /*this.getRootServerUrl()+*/'api/dataGraphByEmpireWeek';
    }

        /* Probablement fusionner les 2 url ci-dessous */
    getDataActifsByEmpireUrl(){
        return /*this.getRootServerUrl()+*/'api/dataActifsByEmpire';
    }

    getDataActifsByDateUrl(){
        return /*this.getRootServerUrl()+*/'api/dataActifsByDate';
    }
}
