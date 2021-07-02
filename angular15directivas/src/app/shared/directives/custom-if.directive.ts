import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customif]'
})
export class CustomIfDirective {

  @Input() set customif(valor: boolean){
    if(valor){
      this.container.createEmbeddedView(this.el);
    }else{
      this.container.clear();
    }
  }

  constructor( 
    private el: TemplateRef<HTMLElement>,
    private container: ViewContainerRef
  ) { 
  }

}
