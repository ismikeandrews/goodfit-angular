export class Usuario{
    codUsuario: number;
    fotoUsuario: string;
    loginUsuario: string;
    password: string;
    passwordConfirm: string
    email: string;
    codNivelUsuario: number;
    codEndereco: number
    remember_token: string

    constructor(){
       this.codUsuario = null;
       this.fotoUsuario = "";
       this.loginUsuario = "";
       this.password = "";
       this.passwordConfirm = "";
       this.email = "";
       this.codNivelUsuario = null;
       this.codEndereco = null;
       this.remember_token = "";
    }
}