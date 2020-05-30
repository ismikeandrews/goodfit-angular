import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public title : any[];

  constructor() {
    this.title = [
      { icon: 'info', name: 'Sobre' },  
      { icon: 'loyalty', name: 'Benefícios' }
    ]
  }

  ngOnInit() {
  }

}
