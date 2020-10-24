import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { VagaService } from '../../services/vaga.service';
import { ProfissaoService } from '../../services/profissao.service';
import { CategoriaService } from '../../services/categoria.service';
import { EnderecoService } from '../../services/endereco.service';
import { RegimeContratacaoService } from '../../services/regime-contratacao.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})

export class VagasComponent implements OnInit {

  public buttonsVagas      : any[]
  public isVagasCarregadas : boolean = false
  public itemsVagas        : any[]
  public pagination        : any[]

  public vagasList         = []
  public modal             = ModalComponent


  constructor(
    public dialog                    : MatDialog,
    private vagaService              : VagaService,
    private profissaoService         : ProfissaoService,
    private categoriaService         : CategoriaService,
    private enderecoService          : EnderecoService,
    private regimeContratacaoService : RegimeContratacaoService,
    private authService              : AuthService
  ) {
  }

  ngOnInit() {
    this.showVagas()
  }

  openDialog(codVaga : number) {
      this.dialog.open(ModalComponent, {data: {codVaga: codVaga}});
  }

  async getVagas(){
      const params      = this.authService.getLoggedUser()
      const vagas : any = await this.vagaService.getVagasByCompanyId(params.token)

      return vagas.data
  }

  async showVagas(){
      const vagas: any = await this.getVagas()

      for ( let vaga of vagas ) {
          const profissao = await this.profissaoService.getProfissao(vaga.codProfissao);
          const regime    = await this.regimeContratacaoService.getRegimeContratacaoPorCod(vaga.codRegimeContratacao)
          const endereco  = await this.enderecoService.getEnderecoPorCod(vaga.codEndereco)

          this.vagasList.push({
              cargaHorariaVaga : vaga.cargaHorariaVaga,
              codEmpresa       : vaga.codEmpresa,
              codVaga          : vaga.codVaga,
              descricaoVaga    : vaga.descricaoVaga,
              quantidadeVaga   : vaga.quantidadeVaga,
              salarioVaga      : vaga.salarioVaga,
              regime           : regime,
              profissao        : profissao,
              endereco         : endereco
          })
      }

      this.isVagasCarregadas = true
  }

  btnSearch() {
      const search = document.getElementById('search')

      if (search.classList.contains('is-active')) {
          search.classList.remove('is-active')
      } else {
          search.classList.add('is-active')
      }
  }
}
