import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
jeton!:number;
  @Input() filsVar='fils content';

  @Output() enveloppe= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

send(){
this.enveloppe.emit({value:this.jeton});
}
}
