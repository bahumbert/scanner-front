
export class Connection{
    id: number;

    date_login: string;
    date_login_year: number;
    date_login_month: number;
    date_login_day: number;
    date_login_time: string;

    date_logout: string;
    date_logout_year: number;
    date_logout_month: number;
    date_logout_day: number;
    date_logout_time: string;

    invalid_login: boolean;
    invalid_logout: boolean;
}
