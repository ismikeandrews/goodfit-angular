export class ProfissaoModel {
    codProfissao  : number
    nomeProfissao : string
    codCategoria  : number
    
    constructor(codProfissao : number, nomeProfissao : string, codCategoria : number){
        this.codProfissao  = codProfissao
        this.nomeProfissao = nomeProfissao
        this.codCategoria  = codCategoria
    }
}
