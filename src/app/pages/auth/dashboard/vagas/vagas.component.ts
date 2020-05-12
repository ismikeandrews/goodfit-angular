import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  public buttonsVagas : any[];
  public itemsVagas : any[];

  constructor() {
    this.buttonsVagas = [
      { name: 'Buscar' , img: '../../../../assets/images/componentes/buscar.png' },
      { name: 'Filtrar' , img: '../../../../assets/images/componentes/filtrar.png', class: 'buttons-item-icon__filter' },
      { name: 'Adicionar' , img: '../../../../assets/images/componentes/add.png' },
    ]

    this.itemsVagas = [
      { name: 'Desenvolvedor', subname: 'Front-End', salario: 'R$ 2000,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Atendente', subname: 'de Telemarketing' , salario: 'R$ 1200,00' , img: '../../../../assets/images/icones/profissao/telemarketing.png' },
      { name: 'Desenvolvedor', subname: 'Back-End', salario: 'R$ 2300,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Desenvolvedor', subname: 'Full Stack', salario: 'R$ 3000,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Suporte', subname: 'Técnico', salario: 'R$ 2000,00' , img: '../../../../assets/images/icones/profissao/assistencia-tecnica.png' },
      { name: 'Desenvolvedor', subname: 'Mobile', salario: 'R$ 2500,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Help Center', salario: 'R$ 2000,00' , img: '../../../../assets/images/icones/profissao/telemarketing.png' },
    ]
  }

  ngOnInit() {
  }

}
