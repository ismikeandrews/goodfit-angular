export class AdicionalModel{
    codAdicional: number;
    codTipoAdicional: number;
    grauAdicional: number;
    imagemAdicional: string;
    nomeAdicional: string;
    checked: boolean;
    obrigatorio: boolean;

    constructor(){
       this.codAdicional = null;
       this.codTipoAdicional = null;
       this.grauAdicional = null;
       this.imagemAdicional = "";
       this.nomeAdicional = "";
       this.checked = false;
       this.obrigatorio = false;
    }
}