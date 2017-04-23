import {Connection} from './connection'

export class Player{
    id: string;
    name : string;
    appeared_at: Date;
    urlEmpireImage: string;
    current_empire: string;
    lastConnection: Connection;
    connections: Array<Connection>;
}
