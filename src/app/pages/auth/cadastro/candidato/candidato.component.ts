import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Endereco } from './../../../../models/endereco.model';
import { Candidato } from './../../../../models/candidato.model';
import { Usuario } from './../../../../models/usuario.model';




@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  page: number = 1;
  enderecoModel = new Endereco();
  candidatoModel = new Candidato();
  usuarioModel = new Usuario();

  constructor(private formBuilder: FormBuilder){}

  OnInit(){}

  fillUsuarioModel(){
    
  }

  fillCandidatoModel(){
  }

  fillEnderecoModel(){

  }

  ngOnInit() {
  }

  nextPage(){
    this.page = this.page + 1;
  }

  prevPage(){
    this.page = this.page - 1;
  }


}
