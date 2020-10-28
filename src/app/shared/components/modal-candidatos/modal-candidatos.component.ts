import { AuthService }                    from '../../../services/auth.service';
import { BeneficioService }               from '../../../services/beneficio.service';
import { MatDialogRef}                    from '@angular/material/dialog';
import {MAT_DIALOG_DATA}                  from '@angular/material/dialog';

import { CandidaturaModel }               from '../../../models/candidatura.model';
import { CandidatoService }               from '../../../services/candidato.service';
import { CandidaturaService }             from '../../../services/candidatura.service';
import { ExperienciaProfissionalService } from '../../../services/experiencia-profissional.service';
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
    public candidatura           : CandidaturaModel
    
    public codCandidato          : number
    public emailCandidato        : string
    public descricaoCandidato    : string
    public idadeCandidato        : number
    public nomeCandidato         : string
    
    public codVaga               : number
    public iconeVaga             : string
    public tituloVaga            : string
    
    public codCandidatura        : number

    public isAprovando           : boolean = false
    public isCandidatoCarregado  : boolean = false
    public isRecusando           : boolean = false

    public adicionais   : any = []
    public experiencias : any = []

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService        : AuthService,
        private beneficioService   : BeneficioService,
        private candidatoService   : CandidatoService,
        private candidaturaService : CandidaturaService,
        private experienciaService : ExperienciaProfissionalService,
        public  dialogRef          : MatDialogRef<ModalCandidatosComponent>) {}

    ngOnInit() {
        this.codCandidato   = this.data.codCandidato
        this.codCandidatura = this.data.codCandidatura
        this.codVaga        = this.data.codVaga
    
        this.candidatura    = new CandidaturaModel(this.codCandidatura, this.codCandidato, this.codVaga)
        
        this.getCandidato(this.codCandidato, this.codVaga)
    }

    closeModal(): void {
        this.dialogRef.close();
    }
    
    async getCandidato(codCandidato : number, codVaga : number) {
        const params      = this.authService.getLoggedUser()
        const token       = params.token
        
        const candidato   = await this.candidatoService.getCandidatoEmVaga(codCandidato, codVaga, token)
        this.adicionais   = await this.candidatoService.getAdicionais(codCandidato, codVaga, token)
        this.experiencias = await this.experienciaService.getPorCandidato(codCandidato, token)
        
        const compatibilidade = await this.candidaturaService.getCompatibilidade(this.candidatura, token)
        this.candidatura.compatibilidade = compatibilidade[0].compatibilidade
        
        console.log(candidato)
        
        this.setCandidato(candidato[0])
    }
    
    async aprovaCandidato() {
        this.isAprovando = true
        
        const params       = this.authService.getLoggedUser()
        let attCandidatura = new CandidaturaModel(this.codCandidatura, this.codCandidato, this.codVaga, this.candidatura.APROVADO)
        const response     : any = await this.candidaturaService.mudarStatusCandidatura(attCandidatura, params.token)
        
        if ( response.status === 200 ) {
            this.candidatura.setStatus(this.candidatura.APROVADO, '')
        }
    }
    
    async recusaCandidato() {
        this.isRecusando = true
    
        const params       = this.authService.getLoggedUser()
        let attCandidatura = new CandidaturaModel(this.codCandidatura, this.codCandidato, this.codVaga)
        attCandidatura.setStatus(this.candidatura.RECUSADO, 'Não foi dessa vez, mas continue tentando!')
        
        const response     : any = await this.candidaturaService.mudarStatusCandidatura(attCandidatura, params.token)
        if ( response.status === 200 ) {
            this.candidatura.setStatus(this.candidatura.RECUSADO, 'Não foi dessa vez, mas continue tentando!')
        }
    }
    
    getExperienciaData(experiencia) {
        const dataInicio = new Date(experiencia.dataInicioExperienciaProfissional * 1000)
        const dataFinal  = new Date(experiencia.dataFinalExperienciaProfissional * 1000)
        
        const mesInicio  = this.getNomeMes(dataInicio.getMonth())
        const mesFinal   = this.getNomeMes(dataFinal.getMonth())
        
        const anoInicio  = dataInicio.getFullYear()
        const anoFinal   = dataFinal.getFullYear()
        
        const anoAtual   = new Date().getFullYear()
        
        if ( experiencia.isEmpregoAtualExperienciaProfissional ) {
            if ( anoInicio === anoAtual ) {
                return `${mesInicio} até o momento`
            }
            
            return `${mesInicio} de ${anoInicio} - Até o momento`
        }
        
        if ( anoInicio === anoFinal ) {
            if ( mesInicio === mesFinal ) {
                if ( anoInicio === anoAtual ) {
                    return `${mesInicio}`
                }
    
                return `${mesInicio} de ${anoInicio}`
            }
            
            if ( anoInicio === anoAtual ) {
                return `${mesInicio} de ${mesFinal}`
            }
        }
    
        return `${mesInicio} de ${anoInicio} até ${mesFinal} de ${anoFinal}`
    }
    
    getNomeMes(mes : number) {
        const MESES = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ]
        
        return MESES[mes]
    }
    
    getPathImagemAdicional(codTipoAdicional : number) {
        if ( codTipoAdicional === 1 ) {
            return 'habilidades'
        }
        
        return 'requisitos'
    }
    
    hasExperiencias() {
        return (this.experiencias.length > 0)
    }
    
    isAdicionalCompativel(adicional) {
        return ( (adicional.codTipoAdicional !== 1) || !!(adicional.compativel))
    }
    
    setCandidato(candidatura) {
        this.nomeCandidato      = candidatura.nomeCandidato
        this.idadeCandidato     = candidatura.idade
        this.emailCandidato     = candidatura.email
        
        this.descricaoCandidato = candidatura.descricaoCurriculo
        
        this.iconeVaga          = candidatura.imagemCategoria
        this.tituloVaga         = candidatura.nomeProfissao
        
        this.candidatura.setStatus(candidatura.codStatusCandidatura, '')
    
        this.setIsCandidatoCarregado(true)
    }

    setIsCandidatoCarregado(isCandidatoCarregado) {
        this.isCandidatoCarregado = isCandidatoCarregado
    }
}
