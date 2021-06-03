import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin] [ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor(){

    }

    validate(control: FormControl) {
        let inputV = control.value;
        return (inputV < this.minimo)
        ? {'customMin': true}
        : null;
    }
}