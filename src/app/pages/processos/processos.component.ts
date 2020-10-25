import {
    Component,
    OnInit
} from '@angular/core';

import { AuthService }     from '../../services/auth.service';
import { ProcessoService } from '../../services/processo.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {
  public processos : any

  constructor(
    private authService     : AuthService,
    private processoService : ProcessoService
  ) {
  }

  ngOnInit() {
      this.showProcessos()
  }

  btnSearch() {
    const search = document.getElementById('search')

    if (search.classList.contains('is-active')) {
      search.classList.remove('is-active')
    } else {
      search.classList.add('is-active')
    }
  }

  async showProcessos() {
      const params   = this.authService.getLoggedUser()
      this.processos = await this.processoService.getPorEmpresa(params.token)
  }

  getStatusName(codStatus : number) {
      const status = []
      status[1] = 'Aprovado'
      status[2] = 'Em Análise'
      status[3] = 'Reprovado'
      status[4] = 'Em Análise'

      return status[codStatus]
  }
}
