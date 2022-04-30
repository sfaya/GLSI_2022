import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'

})
export class CustomDirectiveDirective {
@Input() appCustomDirective!:string;
   constructor(
  private _el:ElementRef, private rendu:Renderer2
  ) {
    this.rendu.setStyle(this._el.nativeElement, 'backgroundColor', this.appCustomDirective);
   }

}
