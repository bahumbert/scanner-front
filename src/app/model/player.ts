import {Connection} from './connection'

export class Player{
    id: string;
    name : string;
    appeared_at: Date;
    idEmpire: string;
    current_empire: string;
    timestamp_login: string;
    connections: Array<Connection>;
}
