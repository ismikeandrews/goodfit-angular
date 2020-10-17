import { Component, OnInit} from '@angular/core';
import { VagaModel } from '../../models/vaga.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { VagaService } from './../../services/vaga.service';
import { ProfissaoService } from './../../services/profissao.service';
import { CategoriaService } from './../../services/categoria.service';
import { EnderecoService } from './../../services/endereco.service';
import { RegimeContratacaoService } from './../../services/regime-contratacao.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})

export class VagasComponent implements OnInit {

  public buttonsVagas : any[];
  public itemsVagas : any[];
  public pagination : any[];
  public vagaModel : VagaModel;
  public vaga : any;
  public vagasList = [];

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
    this.loadData()
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  async loadData(){
    this.buildVagaArrayObj()
  }

  async loadVagas(){
      const params      = this.authService.getLoggedUser()
      const vagaRes:any = await this.vagaService.getVagasByCompanyId(params.token, 1);
      return vagaRes.data;
  }

  async buildProfissaoArrayObj(){
    const profissaoRes: any = await this.profissaoService.getProfissaoList();
    const categoriaRes: any = await this.categoriaService.getCategoriaList();
    let mergedObjectArray = []

    profissaoRes.forEach(profissao => {
      categoriaRes.forEach(categoria => {
        if (profissao.codCategoria === categoria.codCategoria) {
          mergedObjectArray.push({
            codProfissao: profissao.codProfissao,
            nomeProfissao: profissao.nomeProfissao,
            categoria: {
              codCategoria: categoria.codCategoria,
              imagemCategoria: categoria.imagemCategoria,
              nomeCategoria: categoria.nomeCategoria
            }
          })
        }
      });
    });
    return mergedObjectArray
  }

  async enderecosFilter(){
    const vagas:any = await this.loadVagas()
    let enderecos = vagas.map(vaga =>{
      return vaga.codEndereco
    })
    let enderecoQuery = {
      enderecos: enderecos
    }
    const enderecoRes = await this.enderecoService.getEnderecoByIds(enderecoQuery)
    return enderecoRes
  }

  async buildVagaArrayObj(){
    const vagas: any = await this.loadVagas()
    const enderecos: any = await this.enderecosFilter()
    const profissao = await this.buildProfissaoArrayObj();
    const regimeRes: any = await this.regimeContratacaoService.getRegimeContratacaoList()
    console.log(vagas)
    vagas.forEach(vaga => {
      profissao.forEach(profissao => {
        if (vaga.codProfissao === profissao.codProfissao) {
          regimeRes.forEach(regime => {
            if (regime.codRegimeContratacao === vaga.codRegimeContratacao) {
              enderecos.forEach(endereco => {
                if (endereco.codEndereco === vaga.codEndereco) {
                  this.vagasList.push({
                    cargaHorariaVaga: vaga.cargaHorariaVaga,
                    codEmpresa: vaga.codEmpresa,
                    codVaga: vaga.codVaga,
                    descricaoVaga: vaga.descricaoVaga,
                    quantidadeVaga: vaga.quantidadeVaga,
                    salarioVaga: vaga.salarioVaga,
                    regime: regime,
                    profissao: profissao,
                    endereco: endereco
                  })
                }
              });
            }
          });
        }
      });
    });

    console.log(this.vagasList)
  }
}
