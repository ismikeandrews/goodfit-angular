export class AdicionalModel{
    codAdicional: number;
    codTipoAdicional: number;
    grauAdicional: number;
    imagemAdicional: string;
    nomeAdicional: string;
    checked: boolean;
    obridatorio: boolean;z

    constructor(){
       this.codAdicional = null;
       this.codTipoAdicional = null;
       this.grauAdicional = null;
       this.imagemAdicional = "";
       this.nomeAdicional = "";
       this.checked = false;
       this.obridatorio = false;
    }
}