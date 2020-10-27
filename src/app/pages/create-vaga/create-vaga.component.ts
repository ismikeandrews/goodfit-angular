import { Component, OnInit } from '@angular/core';
import { AdicionalService }  from '../../services/adicional.service';

import { FormControl}        from '@angular/forms';

import { ViacepService }     from '../../services/viacep.service';
import { AdicionalModel }    from '../../models/adicional.model'
import { MatSnackBar }       from '@angular/material/snack-bar';

import { EnderecoModel }     from '../../models/endereco.model';
import { EnderecoService }   from '../../services/endereco.service';
import { VagaService }       from '../../services/vaga.service';

import { AuthService }              from '../../services/auth.service';
import { BeneficioModel }           from '../../models/beneficio.model';
import { CategoriaModel }           from '../../models/categoria.model';
import { CategoriaService }         from '../../services/categoria.service';
import { ProfissaoModel}            from '../../models/profissao.model';
import { ProfissaoService }         from '../../services/profissao.service';
import { RegimeContratacaoService } from '../../services/regime-contratacao.service';
import { VagaModel }                from '../../models/vaga.model';


@Component({
  selector: 'app-create-vaga',
  templateUrl: './create-vaga.component.html',
  styleUrls: ['./create-vaga.component.scss']
})
export class CreateVagaComponent implements OnInit {
    public categorias : any = []
    public beneficios : any = []
    public profissoes : any = []
    public regimes    : any = []
    
    public vagaModel     : VagaModel
    public enderecoModel : EnderecoModel
    
    public alfabetizacao        : any
    public beneficioAdicionando : string
    public categoria            : CategoriaModel = null
    public escolaridade         : any
    public profissao            : ProfissaoModel = null
    public regime               : any            = null
    
    public adicionalList     : [AdicionalModel]
    public habilidadeList    : [AdicionalModel]
    public escolaridadeList  : [AdicionalModel]
    public alfabetizacaoList : [AdicionalModel]
    
    public selectedSkills    = []
    public selectedAlf       = [AdicionalModel]
    public selectedEsclr     = [AdicionalModel]
    
    constructor(
        private adicionalService         : AdicionalService,
        private authService              : AuthService,
        private categoriaService         : CategoriaService,
        private profissaoService         : ProfissaoService,
        private regimeContratacaoService : RegimeContratacaoService,
        private viacepService            : ViacepService,
        private snackBar                 : MatSnackBar,
        private enderecoService          : EnderecoService,
        private vagaService              : VagaService,
      ) {
        this.vagaModel     = new VagaModel()
        this.enderecoModel = new EnderecoModel()
    }
    
    ngOnInit() {
        this.loadData();
    }
    
    async loadData(){
        const categorias : any = await this.categoriaService.getCategoriaList()
          
        categorias.forEach(categoria => {
            this.categorias.push(new CategoriaModel(
                categoria.codCategoria,
                categoria.imagemCategoria,
                categoria.nomeCategoria
            ))
        })
          
        const regimes : any = await this.regimeContratacaoService.getRegimeContratacaoList()
        this.regimes = regimes
          
        const adicionalRes      : any = await this.adicionalService.getAdicionalList();
        const escolaridadeRes   : any = await this.adicionalService.getEscolaridade();
        const alfabetizacaoRes  : any = await this.adicionalService.getAlfabetizacao();
        const habilidadeRes     : any = await this.adicionalService.getHabilidades();
        
        this.adicionalList     = adicionalRes;
        this.habilidadeList    = habilidadeRes;
        this.escolaridadeList  = escolaridadeRes;
        this.alfabetizacaoList = alfabetizacaoRes;
    
        this.habilidadeList.forEach(habilidade => {
            habilidade.checked     = false
            habilidade.obrigatorio = false
        });
    }
    
    async searchLocation(cep){
        if (cep) {
            try {
                const viacepRes: any = await this.viacepService.getLocation(cep)
                
                if(viacepRes.erro){
                    this.snackBar.open("CEP não encontrado", "Fechar", {
                    duration: 4000})
        
                    return
                }
        
                this.enderecoModel.cepEndereco        = cep
                this.enderecoModel.bairroEndereco     = viacepRes.bairro
                this.enderecoModel.logradouroEndereco = viacepRes.logradouro
                this.enderecoModel.cidadeEndereco     = viacepRes.localidade
                this.enderecoModel.estadoEndereco     = viacepRes.uf
            } catch (error) {
                this.snackBar.open("CEP com formato inválido", "Fechar", {
                    duration: 4000})
                
                console.warn(error)
            }
        }
    }
    
    handleRequisitosObject(vagaCod){
        let requisitosList = []
        let selectedReq    = []
        
        selectedReq.push(this.alfabetizacao, this.escolaridade)
    
        selectedReq.forEach(requisito => {
            requisito.checked     = true
            requisito.obrigatorio = true
            this.habilidadeList.push(requisito)
        })
    
        requisitosList = this.habilidadeList.filter(habilidade =>{
            return habilidade.checked === true
        })
        
        requisitosList.forEach(requisito => {
          if (requisito.obrigatorio) {
            this.selectedSkills.push({codAdicional: requisito.codAdicional, obrigatoriedade: 1})
          }else{
            this.selectedSkills.push({codAdicional: requisito.codAdicional, obrigatoriedade: 0})
          }
        })
    
        return {codVaga: vagaCod, requisitos: this.selectedSkills}
      }
    
      async submit(){
          try {
              const params           = this.authService.getLoggedUser()
              const codEndreco : any = await this.enderecoService.setEndereco(this.enderecoModel);

              this.vagaModel.codEmpresa  = 3;
              this.vagaModel.codEndereco = codEndreco;

              const codVaga   : any = await this.vagaService.setVaga(this.vagaModel);

              const responseBeneficios = this.vagaService.setBeneficiosVaga({
                  codVaga : codVaga,
                  beneficios : this.beneficios.map(element => {
                      return element.nomeBeneficio
                  })
              })
              
              const requisitos         = this.handleRequisitosObject(codVaga)
              const adicionalRes: any  = await this.vagaService.setRequisitosVaga(requisitos);
              
              if (adicionalRes) {
              await this.snackBar.open("Cadastro concluido com sucesso", "", {
                duration: 4000,
                horizontalPosition: "right",
                verticalPosition: "top",
              });
              window.location.href = "/vagas"
            }
          } catch (error) {
            console.error(error)
          }
      }
      
    adicionaBeneficio() {
        const input = document.querySelector('.js-input-beneficio')
        
        // @ts-ignore
        this.beneficios.push(new BeneficioModel(
            null,
            this.beneficioAdicionando
        ))
        
        this.beneficioAdicionando = ''
    }
    
    async getEnderecoEmpresa(checked) {
        if ( checked ) {
            const params   = this.authService.getLoggedUser()
            const response = await this.enderecoService.getEnderecoPorEmpresa(params.token)
            
            const endereco = response[0]
            
            this.enderecoModel.setEndereco(
                endereco.cepEndereco,
                endereco.logradouroEndereco,
                endereco.numeroEndereco,
                endereco.complementoEndereco,
                endereco.bairroEndereco,
                endereco.cidadeEndereco,
                endereco.estadoEndereco
            )
        }
    }
      
    hasCategoriaSelecionada() {
        return (this.categoria !== null)
    }
    
    hasProfissaoSelecionada() {
        return (this.profissao !== null)
    }
    
    hasRegimeSelecionado() {
        return (this.regime !== null)
    }
      
    openCategorias() {
        const datalistCategorias = document.querySelector('.options-categorias')
        
        if ( datalistCategorias.classList.contains('is-active') ) {
            datalistCategorias.classList.remove('is-active')
            return
        }
    
        datalistCategorias.classList.add('is-active')
    }
    
    openProfissoes() {
        const datalistProfissoes = document.querySelector('.options-profissao')
        
        if ( datalistProfissoes.classList.contains('is-active') ) {
            datalistProfissoes.classList.remove('is-active')
            return
        }
    
        datalistProfissoes.classList.add('is-active')
    }
    
    openRegimes() {
        const datalistRegimes = document.querySelector('.options-regime')
    
        if ( datalistRegimes.classList.contains('is-active') ) {
            datalistRegimes.classList.remove('is-active')
            return
        }
    
        datalistRegimes.classList.add('is-active')
    }
    
    setAlfabetizacao(alfabetizacao) {
        this.alfabetizacao = alfabetizacao
    }
    
    setEscolaridade(escolaridade) {
        this.escolaridade = escolaridade
    }
    
    async setCategoria(categoria : CategoriaModel) {
        this.openCategorias()
        
        this.categoria  = categoria
        this.profissoes = []
        
        const profissoes : any = await this.profissaoService.getProfissoesPorCategoria(categoria.codCategoria, '')
        
        profissoes.forEach(profissao => {
            this.profissoes.push(new ProfissaoModel(
                profissao.codProfissao,
                profissao.nomeProfissao,
                categoria.codCategoria
            ))
        })
    }
    
    removeBeneficio(nomeBeneficio : string) {
        const index = this.beneficios.findIndex(item => item.nomeBeneficio === nomeBeneficio)
        this.beneficios.splice(index, 1)
    }
    
    setBeneficio(event) {
        this.beneficioAdicionando = event.target.value
    }
    
    setCargaHoraria(event) {
        this.vagaModel.cargaHorariaVaga = event.target.value
    }
    
    setProfissao(profissao : ProfissaoModel) {
        this.profissao = profissao
        this.vagaModel.setProfissao(profissao.codProfissao)
        
        this.openProfissoes()
    }
    
    setRegime(regime) {
        this.regime = regime
        this.vagaModel.setRegimeContratacao(regime.codRegimeContratacao)
        
        this.openRegimes()
    }
    
    setSalario(event) {
        this.vagaModel.salarioVaga = event.target.value
    }
    
    setQuantidade(event) {
          this.vagaModel.quantidadeVaga = event.target.value
    }
    
    setDescricao(descricao) {
        this.vagaModel.descricaoVaga = descricao
    }
}
