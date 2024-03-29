import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noStrider (control: FormControl) : ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    if( value === 'strider'){
      return {
        notUser : true
      }
    }

    return null;
  }

  camposIguales(campo1: string, campo2: string){
    return (control: AbstractControl): ValidationErrors | null => {

      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if(pass1 !== pass2){
        control.get(campo2)?.setErrors({
          notEqual: true
        });

        return {
          notEqual: true
        }
      }

      control.get(campo2)?.setErrors( null );
      
      return null;
    }
  }

  constructor() { }
}
