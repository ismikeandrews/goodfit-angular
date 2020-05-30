import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  public sobre : any[];

  constructor() {
    this.sobre = [
      { icon: 'attach_money', name: 'Salário', text: 'R$ 1800,00' },
      { icon: 'access_time', name: 'Carga Horária', text: '8H' },
      { icon: 'format_list_bulleted', name: 'Vagas', text: '3' },
      { icon: 'description', name: 'Regime Contratação', text: 'Estágio' },
      { icon: 'location_on', name: 'Endereço', text: 'Av. Lins de Vasconcelos, 1222 - Aclimação', class: 'accordion--content-item__endereco' }
    ]
  }

  ngOnInit() {
  }

}
