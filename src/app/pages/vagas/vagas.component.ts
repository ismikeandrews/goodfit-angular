import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { VagaModel } from '../../models/vaga.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { VagaService } from './../../services/vaga.service';


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
  public vagasList: [VagaModel];

  constructor(
    public dialog: MatDialog,
    public vagaService: VagaService
    ) {
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
    this.loadData()
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  async loadData(){
    const vagaRes: any = await this.vagaService.getVagasByCompanyId(1);
    console.log(vagaRes)
    // this.vagasList = vagaRes
  }

}