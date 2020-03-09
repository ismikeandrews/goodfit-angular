export class Endereco{
    codEndereco: number;
    cepEndereco: string;
    logradouroEndereco: string;
    numeroEndereco: string;
    complementoEndereco: string;
    bairroEndereco: string;
    zonaEndereco: string;
    cidadeEndereco: string;
    estadoEndereco: string;

    constructor(){
       this.codEndereco = null;
       this.cepEndereco = ""
       this.logradouroEndereco = ""
       this.numeroEndereco = ""
       this.complementoEndereco = ""
       this.bairroEndereco = ""
       this.zonaEndereco = ""
       this.cidadeEndereco = ""
       this.estadoEndereco = ""
    }
}