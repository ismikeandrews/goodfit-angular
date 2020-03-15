import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidato } from './../../../../../models/candidato.model';
import { Usuario } from './../../../../../models/usuario.model';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.scss']
})
export class Etapa1Component implements OnInit {

  private usuarioModel: Usuario = new Usuario();
  private candidatoModel: Candidato = new Candidato();

  @Output() sendUsuarioModel = new EventEmitter<Object>();
  @Output() sendCandidatoModel = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  sendModels(){
    this.sendUsuarioModel.emit(this.usuarioModel);
    this.sendCandidatoModel.emit(this.candidatoModel);
  }

}
