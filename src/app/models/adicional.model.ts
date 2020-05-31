export class AdicionalModel{
    codAdicional: number;
    codTipoAdicional: number;
    grauAdicional: number;
    imagemAdicional: string;
    nomeAdicional: string;
    checked: boolean;

    constructor(){
       this.codAdicional = null;
       this.codTipoAdicional = null;
       this.grauAdicional = null;
       this.imagemAdicional = "";
       this.nomeAdicional = "";
       this.checked = false;
    }
}