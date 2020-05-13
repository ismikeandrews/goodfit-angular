export class VagaModel{
    codVaga: number;
    descricaoVaga: string;
    salarioVaga: number;
    cargaHorariaVaga: string;
    quantidadeVaga: number
    codEmpresa: number;
    codProfissao: number;
    codEndereco: number;
    codRegimeContratacao: number;

    constructor(){
       this.codVaga = null;
       this.descricaoVaga = "";
       this.salarioVaga = null;
       this.cargaHorariaVaga = "";
       this.quantidadeVaga = null;
       this.codEmpresa = null;
       this.codProfissao = null;
       this.codEndereco = null;
       this.codRegimeContratacao = null;
    }
}