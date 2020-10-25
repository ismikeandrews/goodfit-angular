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

  async getPorEmpresa() {
      const params       = this.authService.getLoggedUser()
      const vagas  : any = await this.processoService.getPorEmpresa(params.token)

      return vagas.data
  }

  showProcessos() {
      const vagas = this.getPorEmpresa()
      console.log(vagas)
  }
}
