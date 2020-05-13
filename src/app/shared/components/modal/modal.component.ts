import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { VagaModel } from './../../../models/vaga.model';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,  OnChanges{
  public vagaModel: VagaModel;

  @Input() vagaModelInput: VagaModel;

  constructor() { }
  
  ngOnInit() {
  }

  ngOnChanges(): void{
    this.setVagaModel();
  }

  setVagaModel(){
    this.vagaModel = this.vagaModelInput;
  }

  resetVagaModel(){
    this.vagaModel = 
    {
      'codVaga': null,
      'descricaoVaga': "",
      'salarioVaga': null,
      'cargaHorariaVaga': "",
      'quantidadeVaga': null,
      'codEmpresa': null,
      'codProfissao': null,
      'codEndereco': null,
      'codRegimeContratacao': null,
    }
  }
}
