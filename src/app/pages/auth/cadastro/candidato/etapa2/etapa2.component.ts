import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../../../../models/usuario.model';


@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.scss']
})
export class Etapa2Component implements OnInit {

  usuarioModel: Usuario = new Usuario()

  constructor() { }

  ngOnInit() {
  }

}
