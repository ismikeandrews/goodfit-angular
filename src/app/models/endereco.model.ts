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
    
    setEndereco(cep : string, logradouro : string, numero : string, complemento : string, bairro : string, cidade : string, estado : string) {
        this.cepEndereco         = cep
        this.logradouroEndereco  = logradouro
        this.numeroEndereco      = numero
        this.complementoEndereco = complemento
        this.bairroEndereco      = bairro
        this.cidadeEndereco      = cidade
        this.estadoEndereco      = estado
    }
}
