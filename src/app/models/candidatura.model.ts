export class CandidaturaModel{
    codCandidatura : number
    codCandidato   : number
    codVaga        : number
    codStatus      : number
    feedback       : string

    APROVADO       = 1
    EM_ANALISE     = 2
    RECUSADO       = 3
    EM_PROCESSO    = 4

    constructor(codCandidatura : number, codCandidato : number, codVaga : number, codStatus : number = null){
        this.codCandidatura = codCandidatura
        this.codCandidato   = codCandidato
        this.codVaga        = codVaga
        this.codStatus      = codStatus
        this.feedback       = ''
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
    
    isAprovado() {
        return (this.codStatus === this.APROVADO)
    }
    
    isFinalizado() {
        return (
            (this.codStatus === this.APROVADO)
            || (this.codStatus === this.RECUSADO)
        )
    }
    
    isEmAnalise() {
        return (this.codStatus === this.EM_ANALISE)
    }
    
    isEmProcesso() {
        return (this.codStatus === this.EM_PROCESSO)
    }
    
    isRecusado() {
        return (this.codStatus === this.RECUSADO)
    }

    setFeedback(feedback : string) {
        this.feedback = feedback
    }

    setStatus(codStatus : number, feedback : string) {
        if ( (this.codStatus === this.RECUSADO) && (feedback.length === 0) ) {
          console.log('O feedback é obrigatório')
          return
        }

        this.codStatus   = codStatus
        this.setFeedback(feedback)
    }
}
