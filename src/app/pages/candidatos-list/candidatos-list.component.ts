import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../services/vaga.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.scss']
})
export class CandidatosListComponent implements OnInit {
    public candidaturas           : Object
    public isCandidatosCarregados : boolean = false

    constructor(private vagaService : VagaService, private authService : AuthService) {
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
}
