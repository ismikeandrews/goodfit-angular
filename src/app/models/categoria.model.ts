export class CategoriaModel{
    codCategoria    : number
    imagemCategoria : string
    nomeCategoria   : string

    constructor(codCategoria : number, imagemCategoria : string, nomeCategoria : string){
        this.codCategoria    = codCategoria
        this.imagemCategoria = imagemCategoria
        this.nomeCategoria   = nomeCategoria
    }

    set(codCategoria : number, imagemCategoria : string, nomeCategoria : string) {
        this.codCategoria    = codCategoria
        this.imagemCategoria = imagemCategoria
        this.nomeCategoria   = nomeCategoria
    }
}
