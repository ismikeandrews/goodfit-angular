import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empresa } from './../../../../models/empresa.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  private empresaModel: Empresa = new Empresa();

  @Output() sendEmpresaModel = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  sendModels(){
    this.sendEmpresaModel.emit(this.empresaModel);
  }

}

