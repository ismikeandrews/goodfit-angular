export class EnderecoModel{
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
    
    setComplemento(complemento : string) {
        this.complementoEndereco = complemento
    }
    
    setNumero(numero : string) {
        this.numeroEndereco = numero
    }
}
