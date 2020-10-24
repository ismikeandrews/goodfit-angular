export class CandidaturaModel{
    codCandidatura : number
    codCandidato   : number
    codVaga        : number
    codStatus      : number
    feedback       : string

    APROVADO       = 1
    EM_ANALISE     = 2
    RECUSADO       = 3

    constructor(codCandidatura : number, codCandidato : number, codVaga : number, codStatus : number){
        this.codCandidatura = codCandidatura
        this.codCandidato   = codCandidato
        this.codVaga        = codVaga
        this.codStatus      = codStatus
        this.feedback       = ''
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
