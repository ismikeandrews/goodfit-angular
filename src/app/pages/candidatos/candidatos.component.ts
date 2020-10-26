import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCandidatosComponent } from '../../shared/components/modal-candidatos/modal-candidatos.component';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
  ) { }

  ngOnInit() {
  }
 
  openModal() {
    this.dialog.open(ModalCandidatosComponent);
  }

  btnSearch() {
    const search = document.getElementById('search')
    
    if (search.classList.contains('is-active')) {
      search.classList.remove('is-active')
    } else {
      search.classList.add('is-active')
    }
  }

  btnFilter() {
    const filter = document.getElementById('filter')
    
    if (filter.classList.contains('is-active')) {
      filter.classList.remove('is-active')
    } else {
      filter.classList.add('is-active')
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