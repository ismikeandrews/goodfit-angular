import { Component, OnInit } from '@angular/core';
import { Candidato } from './../../../../../models/candidato.model';
import { Usuario } from './../../../../../models/usuario.model';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.scss']
})
export class Etapa1Component implements OnInit {

  candidatoModel: Candidato = new Candidato();
  usuarioModel: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {

  }

}
