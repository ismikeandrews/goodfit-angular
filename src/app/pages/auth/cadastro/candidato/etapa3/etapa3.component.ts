import { Component, OnInit } from '@angular/core';
import { Endereco } from './../../../../../models/endereco.model';


@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.scss']
})
export class Etapa3Component implements OnInit {

  enderecoModel: Endereco = new Endereco();

  constructor() { }

  ngOnInit() {
  }

}
