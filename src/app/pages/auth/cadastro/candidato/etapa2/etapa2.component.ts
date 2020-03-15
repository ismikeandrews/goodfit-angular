import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from './../../../../../models/usuario.model';




@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.scss']
})
export class Etapa2Component implements OnInit {

  private usuarioModel: Usuario = new Usuario();
  @Output() sendUsuarioModel = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  sendModels(){
    this.sendUsuarioModel.emit(this.usuarioModel);
  }

}
