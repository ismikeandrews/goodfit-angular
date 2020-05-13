import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { VagaModel } from '../../models/vaga.model';
import { trigger, state, style, transition, animate, animation } from '@angular/animations'

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
  animations: [ 
    trigger('animationTrigger', [
      state('hidden', style({
        opacity: 0,
        zIndex: -1
      })),
      state('visible', style({
        opacity: 1,
        zIndex: 3
      })),
      transition('hidden => visible', animate('0.5s 0s ease-in')),
      transition('visible => hidden', animate('0.5s 0s ease-out')),
    ])
  ]
})

export class VagasComponent implements OnInit {

  public buttonsVagas : any[];
  public itemsVagas : any[];
  public pagination : any[];
  public vagaModel : VagaModel;
  public vaga : any;

  constructor() {
    this.buttonsVagas = [
      { name: 'Buscar' , img: '../../../../assets/images/componentes/buscar.png' },
      { name: 'Filtrar' , img: '../../../../assets/images/componentes/filtrar.png', class: 'buttons-item-icon__filter' },
      { name: 'Adicionar' , img: '../../../../assets/images/componentes/add.png' },
    ]
    this.itemsVagas = [
      { name: 'Atendente', state: 'hidden', subname: 'de Telemarketing' , salario: 'R$ 1200,00' , img: '../../../../assets/images/icones/profissao/telemarketing.png' },
      { name: 'Desenvolvedor', state: 'hidden', subname: 'Back-End', salario: 'R$ 2300,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Desenvolvedor', state: 'hidden', subname: 'Full Stack', salario: 'R$ 3000,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Suporte', state: 'hidden', subname: 'Técnico', salario: 'R$ 2000,00' , img: '../../../../assets/images/icones/profissao/assistencia-tecnica.png' },
      { name: 'Desenvolvedor', state: 'hidden', subname: 'Mobile', salario: 'R$ 2500,00' , img: '../../../../assets/images/icones/profissao/ti.png' },
      { name: 'Help Center', state: 'hidden', salario: 'R$ 2000,00' , img: '../../../../assets/images/icones/profissao/telemarketing.png' },
    ]
    this.pagination = [
      { number: '1', class: 'is-active' },
      { number: '2'},
      { number: '3'}
    ]
  }

  ngOnInit() {

  }

  openModal(vaga: any){
    vaga.state = vaga.state === 'hidden' ? 'visible' : 'hidden';

    this.vagaModel = {
      codVaga: 1,
      descricaoVaga: 'Desenvolvedor',
      salarioVaga: 2000.00,
      cargaHorariaVaga: '8h',
      quantidadeVaga: 2,
      codEmpresa: 1,
      codProfissao: 1,
      codEndereco: 1,
      codRegimeContratacao: 1,
    }
  }
}
