import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela',
})

export class VuelaPipe implements PipeTransform {

    transform(value: string, vuela:boolean ) : string {
        return (vuela) ? "vuela" : "no vuela";
    }
}
