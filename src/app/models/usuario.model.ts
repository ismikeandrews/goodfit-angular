export class UsuarioModel{
    codUsuario      : number
    fotoUsuario     : string
    loginUsuario    : string
    password        : string
    email           : string
    codNivelUsuario : number
    codEndereco     : number


    constructor(){
       this.codUsuario      = null
       this.fotoUsuario     = ""
       this.loginUsuario    = ""
       this.password        = ""
       this.email           = ""
       this.codNivelUsuario = null
       this.codEndereco     = null
    }
}
