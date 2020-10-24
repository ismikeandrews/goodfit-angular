import { AuthService }      from '../../../services/auth.service';
import { BeneficioService } from '../../../services/beneficio.service';
import { MatDialogRef}      from '@angular/material/dialog';
import {MAT_DIALOG_DATA}    from '@angular/material/dialog';
import { AdicionalService } from '../../../services/adicional.service';
import { VagaModel }        from '../../../models/vaga.model';
import { VagaService }      from '../../../services/vaga.service';
import {
    Component,
    OnInit,
    Inject
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
    public codVaga       : number
    public descricaoVaga : string
    public enderecoVaga  : string
    public iconeVaga     : string
    public tituloVaga    : string

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
        public  dialogRef        : MatDialogRef<ModalComponent>,
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
    }

    setVaga(vaga, beneficios, requisitos) {
        this.setIcone(vaga.imagemCategoria)
        this.setTitulo(vaga.nomeProfissao)

        this.setRequisitos(requisitos)

        this.setBeneficios(beneficios)
        this.setSobre(vaga)

        this.setDescricao(vaga.descricaoVaga)
        this.setEndereco(vaga.endereco)
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
                text: vaga.quantidadeVaga
            }
        )
    }

    setTitulo(titulo) {
        this.tituloVaga = titulo
    }
}
