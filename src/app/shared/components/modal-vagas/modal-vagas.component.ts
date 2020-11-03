import { AuthService }      from '../../../services/auth.service';
import { BeneficioService } from '../../../services/beneficio.service';
import { MatDialogRef}      from '@angular/material/dialog';
import {MAT_DIALOG_DATA}    from '@angular/material/dialog';

import { AdicionalService } from '../../../services/adicional.service';
import { EnderecoService }  from '../../../services/endereco.service';
import { VagaService }      from '../../../services/vaga.service';
import {
    Component,
    OnInit,
    Inject
} from '@angular/core';

@Component({
  selector: 'app-modal-vagas',
  templateUrl: './modal-vagas.component.html',
  styleUrls: ['./modal-vagas.component.scss']
})
export class ModalVagasComponent implements OnInit{
    public codVaga       : number
    public descricaoVaga : string
    public enderecoVaga  : string
    public latituideVaga : number
    public longitudeVaga : number
    public iconeVaga     : string
    public tituloVaga    : string

    public isVagaCarregada : boolean = false

    public itensList  = [
      {
        itemType    : { name: 'Sobre' },
        itemContent : []
      },
      {
        itemType    : { name: 'Benefícios' },
        itemContent : []
      }
    ]

    public requisitos = {
        obrigatorios : [],
        opcionais    : []
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService      : AuthService,
        private beneficioService : BeneficioService,
        public  dialogRef        : MatDialogRef<ModalVagasComponent>,
        public  enderecoService  : EnderecoService,
        private adicionalService : AdicionalService,
        private vagaService      : VagaService) {}

    ngOnInit() {
        this.codVaga = this.data.codVaga
        this.getVaga(this.codVaga)
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    async getVaga(codVaga : number) {
        const params     = this.authService.getLoggedUser()
        const token      = params.token

        const vaga       = await this.vagaService.getVagaPorCod(codVaga, token)
        const beneficios = await this.beneficioService.getBeneficiosPorVaga(codVaga, token)
        const requisitos = await this.adicionalService.getPorVaga(codVaga, token)

        this.setVaga(vaga[0], beneficios, requisitos)
        await this.getLatAndLong(vaga[0].endereco)
    }
    
    async getLatAndLong(endereco) {
        let response : any      = await this.enderecoService.getLatAndLong(endereco)
        response = response.results[0]
        
        const enderecoFormatado = response.formatted_address
        const coordenadas       = response.geometry.location
        
        this.latituideVaga      = coordenadas.lat
        this.longitudeVaga      = coordenadas.lng
        
        this.setEndereco(enderecoFormatado)
    }

    hasBeneficios(beneficios) {
      return beneficios.length > 0
    }

    hasRequisitosOpcionais(requisitos) {
        return requisitos.opcionais.length > 0
    }

    setIsVagaCarregada(isVagaCarregada) {
        this.isVagaCarregada = isVagaCarregada
    }

    setVaga(vaga, beneficios, requisitos) {
        this.setIcone(vaga.imagemCategoria)
        this.setTitulo(vaga.nomeProfissao)

        this.setRequisitos(requisitos)

        this.setBeneficios(beneficios)
        this.setSobre(vaga)

        this.setDescricao(vaga.descricaoVaga)

        this.setIsVagaCarregada(true)
    }

    setBeneficios(beneficios) {
        beneficios.forEach(beneficio => {
            const index = this.itensList.findIndex(item => item.itemType.name === 'Benefícios')
            this.itensList[index].itemContent.push({
                name : beneficio.nomeBeneficio,
                text : ''
            })
        })
    }

    setDescricao(descricao) {
        this.descricaoVaga = descricao
    }

    setEndereco(endereco) {
        this.enderecoVaga = endereco
    }

    setIcone(icone) {
        this.iconeVaga = icone
    }

    setRequisitos(requisitos) {
        requisitos.forEach(requisito => {
            let data = {
                name : requisito.nomeAdicional,
                icon : requisito.imagemAdicional,
                path : (requisito.codTipoAdicional === 1) ? 'habilidades' : 'requisitos'
            }

          if ( requisito.obrigatoriedadeRequisitoVaga ) {
              this.requisitos.obrigatorios.push(data)
          } else {
              this.requisitos.opcionais.push(data)
          }
        })
    }

    setSobre(vaga) {
        const index = this.itensList.findIndex(item => item.itemType.name === 'Sobre')
        this.itensList[index].itemContent.push(
            {
                name: 'Salário',
                text: vaga.salarioVaga
            },
            {
                name: 'Carga Horária',
                text: vaga.cargaHorariaVaga
            },
            {
                name: 'Regime de Contratação',
                text: vaga.nomeRegimeContratacao
            },
            {
                name: 'Vagas Disponíveis',
                text: vaga.quantidadeDisponivelVaga
            }
        )
    }

    setTitulo(titulo) {
        this.tituloVaga = titulo
    }
}
