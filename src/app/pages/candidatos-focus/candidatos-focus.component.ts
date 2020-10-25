import { Component, OnInit } from '@angular/core';

import { AuthService }       from '../../services/auth.service';
import { CandidatoService }  from '../../services/candidato.service';

@Component({
  selector: 'app-candidatos-focus',
  templateUrl: './candidatos-focus.component.html',
  styleUrls: ['./candidatos-focus.component.scss']
})
export class CandidatosFocusComponent implements OnInit {


    constructor(
      private authService      : AuthService,
      private candidatoService : CandidatoService
    ) { }

    public itens = [
          { name: 'Atendente', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
          { name: 'Estagiário de TI', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    ]

    ngOnInit() {}

    async getCandidato(codCandidato : number) {
        const params      = this.authService.getLoggedUser()
        const candidato   = await this.candidatoService.getCandidato(codCandidato, params.token)

        this.setCandidato(candidato)
    }

    setCandidato(candidato) {

    }
}
