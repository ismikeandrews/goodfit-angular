import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeView() {
    console.log('clicou')
  }
}

// {
//   "foto" : "",
//   "loginUsuario" : "",
//   "email" : "",
//   "password" : "",
//   "codNivelUsuario" : ""
// }



// {
//   "nomeCandidato" : "",
//   "cpfCandidato" : "",
//   "rgCandidato" : "",
//   "dataNascimentoCandidato" : "",
//   "codUsuario" : ""
// }