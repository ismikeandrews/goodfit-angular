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
    const list = document.getElementById('list')
    const focus = document.getElementById('focus')
    const listIcon = document.getElementById('list-icon')
    const focusIcon = document.getElementById('focus-icon')
    
    if (list.classList.contains('is-active')) {
      list.classList.remove('is-active')
      focus.classList.add('is-active')
      listIcon.classList.add('is-active')
      focusIcon.classList.remove('is-active')
    } else {
      list.classList.add('is-active')
      focus.classList.remove('is-active')
      listIcon.classList.remove('is-active')
      focusIcon.classList.add('is-active')
    }
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