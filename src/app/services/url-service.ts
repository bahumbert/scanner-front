
export class UrlService{
    constructor(){}

    getRootUrl(): string{
        return 'localhost:4200/';
    }

    getRootServerUrl(): string{
        return 'localhost:8080/';
    }

    getListeJoueursServiceUrl(): string{
        return /*this.getRootServerUrl()+*/'api/listeJoueurs';
    }
}
