export class EmpresaModel{
    codEmpresa          : number
    razaoSocialEmpresa  : string
    nomeFantasiaEmpresa : string
    cnpjEmpresa         : string
    codUsuario          : number

    constructor(codUsuario: number){
        this.codUsuario          = codUsuario
        this.codEmpresa          = null
        this.razaoSocialEmpresa  = ""
        this.nomeFantasiaEmpresa = ""
        this.cnpjEmpresa         = ""
    }
}
