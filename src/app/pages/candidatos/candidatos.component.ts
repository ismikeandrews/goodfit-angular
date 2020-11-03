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
    
    public filtros = [
        {
            checked   : true,
            className : 'analise',
            label     : 'Sem status',
            value     : 2
        },
        {
            checked   : true,
            className : 'processo',
            label     : 'Em Processo',
            value     : 4
        },
        {
            checked   : true,
            className : 'aprovado',
            label     : 'Aprovado',
            value     : 1
        },
        {
            checked   : false,
            className : 'recusado',
            label     : 'Recusado',
            value     : 3
        }
    ]
    
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
        this.isCandidatosCarregados = false
        
        const params      = this.authService.getLoggedUser()
        const filters     = this.getFiltrosAtivos()
        this.candidaturas = await this.vagaService.getCandidatosPorVaga(filters, params.token)
        
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
    
    getFiltrosAtivos() {
        let filtrosAtivos      = []
        let isElementsOnScreen = (null !== document.getElementById(`candidatos-filtro-aprovado`))
        
        this.filtros.forEach(filtro => {
            let isChecked = false
            
            if ( isElementsOnScreen ) {
                let element   = document.getElementById(`candidatos-filtro-${filtro.className}`)
                isChecked = !!element.getAttribute('checked')
            } else {
                isChecked = filtro.checked
            }
    
            if ( isChecked ) {
                filtrosAtivos.push(filtro.value)
            }
        })
        
        if ( filtrosAtivos.length === 0 ) {
            this.filtros.forEach(filtro => {
                let element     = document.getElementById(`candidatos-filtro-${filtro.className}`)
                element.setAttribute('checked', `${filtro.checked}`)
                
                if ( filtro.checked ) {
                    filtrosAtivos.push(filtro.value)
                }
            })
        }
        
        return filtrosAtivos.join(',')
    }
}
