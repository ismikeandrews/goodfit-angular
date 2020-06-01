import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { VagaModel } from '../../models/vaga.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})

export class VagasComponent implements OnInit {

  public buttonsVagas : any[];
  public itemsVagas : any[];
  public pagination : any[];
  public vagaModel : VagaModel;
  public vaga : any;

  constructor(public dialog: MatDialog) {
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

  openDialog() {
    this.dialog.open(ModalComponent);
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