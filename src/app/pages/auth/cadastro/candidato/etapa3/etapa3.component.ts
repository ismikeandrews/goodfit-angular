import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Endereco } from './../../../../../models/endereco.model';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.scss']
})
export class Etapa3Component implements OnInit {

  private enderecoModel: Endereco = new Endereco();
  @Output() sendEnderecoModel = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  sendModels(){
    this.sendEnderecoModel.emit(this.enderecoModel);
  }

}
