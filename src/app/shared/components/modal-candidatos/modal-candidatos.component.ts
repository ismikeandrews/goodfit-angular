import { AuthService }      from '../../../services/auth.service';
import { BeneficioService } from '../../../services/beneficio.service';
import { MatDialogRef}      from '@angular/material/dialog';
import {MAT_DIALOG_DATA}    from '@angular/material/dialog';

import { CandidatoService } from '../../../services/candidato.service';
import {
    Component,
    OnInit,
    Inject
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-candidatos.component.html',
  styleUrls: ['./modal-candidatos.component.scss']
})
export class ModalCandidatosComponent implements OnInit{
    public codCandidato          : number
    public emailCandidato        : string
    public descricaoCandidato    : string
    public idadeCandidato        : number
    public nomeCandidato         : string
    
    public codVaga               : number
    public iconeVaga             : string
    public tituloVaga            : string
    
    public codStatusCandidatura  : number
    public nomeStatusCandidatura : string

    public isCandidatoCarregado  : boolean = false

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

    public adicionais : any = []

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService      : AuthService,
        private beneficioService : BeneficioService,
        private candidatoService : CandidatoService,
        public  dialogRef        : MatDialogRef<ModalCandidatosComponent>) {}

    ngOnInit() {
        this.codCandidato = this.data.codCandidato
        this.codVaga      = this.data.codVaga
        
        this.getCandidato(this.codCandidato, this.codVaga)
    }

    closeModal(): void {
        this.dialogRef.close();
    }
    
    async getCandidato(codCandidato : number, codVaga : number) {
        const params    = this.authService.getLoggedUser()
        const token     = params.token
        
        const candidato  = await this.candidatoService.getCandidatoEmVaga(codCandidato, codVaga, token)
        this.adicionais  = await this.candidatoService.getAdicionais(codCandidato, codVaga, token)
        
        this.setCandidato(candidato[0])
    }
    
    getNomeStatusCandidatura(codStatus : number) {
        switch ( codStatus ) {
            case 1 :
                return 'Aprovado'
            case 2 :
                return 'Em Análise'
            case 3 :
                return 'Recusado'
            case 4 :
                return 'Em Processo'
        }
    }
    
    getPathImagemAdicional(codTipoAdicional : number) {
        if ( codTipoAdicional === 1 ) {
            return 'habilidades'
        }
        
        return 'requisitos'
    }
    
    isAdicionalCompativel(adicional) {
        return ( (adicional.codTipoAdicional !== 1) || !!(adicional.compativel))
    }
    
    isEmAnalise() {
        return (this.codStatusCandidatura === 2)
    }
    
    isEmProcesso() {
        return (this.codStatusCandidatura === 4)
    }
    
    setCandidato(candidatura) {
        this.nomeCandidato      = candidatura.nomeCandidato
        this.idadeCandidato     = candidatura.idade
        this.emailCandidato     = candidatura.email
        
        this.descricaoCandidato = candidatura.descricaoCurriculo
        
        this.iconeVaga          = candidatura.imagemCategoria
        this.tituloVaga         = candidatura.nomeProfissao
        
        this.setStatus(candidatura.codStatusCandidatura)
    
        this.setIsCandidatoCarregado(true)
    }

    setIsCandidatoCarregado(isCandidatoCarregado) {
        this.isCandidatoCarregado = isCandidatoCarregado
    }
    
    setStatus(status : number) {
        this.codStatusCandidatura  = status
        this.nomeStatusCandidatura = this.getNomeStatusCandidatura(status)
    }
    
}
