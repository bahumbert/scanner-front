import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string, field: string): any {
        if (query) {
            console.log(field);
            return _.filter(array, row=>row[field].indexOf(query) > -1);
        }
        return array;
    }
}
