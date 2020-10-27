import { Component, OnInit }        from '@angular/core';

import { MatDialog }                from '@angular/material/dialog';
import { ModalCandidatosComponent } from '../../shared/components/modal-candidatos/modal-candidatos.component';

import { AuthService } from '../../services/auth.service';
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {
    public candidaturas           : any
    public isCandidatosCarregados : boolean = false
    
    constructor(
        public dialog : MatDialog,
        private vagaService : VagaService,
        private authService : AuthService
    ) {
        if ( ! authService.isSpecialUser() ) {
            console.log('Error 403')
        }
    }

    ngOnInit() {
        this.getCandidatosPorVaga()
    }
    
    async getCandidatosPorVaga() {
        const params      = this.authService.getLoggedUser()
        this.candidaturas = await this.vagaService.getCandidatosPorVaga(params.token)
        
        this.isCandidatosCarregados = true
    }
 
    openModal(codCandidato : number, codVaga : number, codCandidatura : number) {
        this.dialog.open(ModalCandidatosComponent, {data: {
            codCandidato   : codCandidato,
            codCandidatura : codCandidatura,
            codVaga        : codVaga
        }});
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
