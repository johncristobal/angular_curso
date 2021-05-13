import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayuspipe',
})
export class MayusPipe implements PipeTransform {

    transform(value: string, enMayus:boolean ) : string {
        return (enMayus) ? value.toUpperCase() : value.toLowerCase();
    }
}

