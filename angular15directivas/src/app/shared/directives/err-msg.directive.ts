import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrMsgDirective implements OnInit{

  private _color: string = 'red';
  private _msg: string = 'Falta campo';
  private _show: boolean = false;

  public htmlE: ElementRef<HTMLElement>;
  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }

  @Input() set msg(valor: string){
    this._msg = valor;
    this.setMsg();
  }

  @Input() set valido(valor: boolean){
    this._show = valor;
    if(valor) {
      this.htmlE.nativeElement.classList.add('hidden');
    }else{
      this.htmlE.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlE = el;
  }

  ngOnInit(){
    this.setColor();
    this.setMsg();
    this.setStilo();
  }

  setStilo(){
    this.htmlE.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlE.nativeElement.style.color = this._color;
  }

  setMsg(){
    this.htmlE.nativeElement.innerText = this._msg;
  }

}
