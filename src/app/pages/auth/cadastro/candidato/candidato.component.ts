import { Component, OnInit } from '@angular/core';
import { Endereco } from './../../../../models/endereco.model';
import { Usuario } from './../../../../models/usuario.model';
import { Candidato } from './../../../../models/candidato.model';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent implements OnInit {

  private page: number = 1;
  private usuarioModel: Usuario = new Usuario();
  private candidatoModel: Candidato = new Candidato();
  private enderecoModel: Endereco = new Endereco();



  constructor(){}

  OnInit(){}

  ngOnInit() {
    
  }

  nextPage(){
    this.page = this.page + 1;
  }

  prevPage(){
    this.page = this.page - 1;
  }

  showdata(){
    console.log(this.usuarioModel)
    console.log(this.candidatoModel)
    console.log(this.enderecoModel)
  }

  receiveUsuarioModel($event){
    this.usuarioModel = $event;
  }

  receiveCandidatoModel($event){
    this.candidatoModel = $event;
  }

  receiveEnderecoModel($event){
    this.enderecoModel = $event;
  }
}
