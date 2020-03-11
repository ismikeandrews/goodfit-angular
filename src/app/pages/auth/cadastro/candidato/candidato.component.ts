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
  public usuarioModel: Usuario = new Usuario();
  public candidatoModel: Candidato = new Candidato();
  public Endereco: Endereco = new Endereco();


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

  /*Shared variables teste, delete later on*/
  // get pagesNumbers(): number{
  //   return this.page;
  // }
}
