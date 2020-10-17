export class CategoriaModel{
    codCategoria    : number
    imagemCategoria : string
    nomeCategoria   : string

    constructor(){
        this.codCategoria    = null
        this.imagemCategoria = null
        this.nomeCategoria   = null
    }

    set(codCategoria : number, imagemCategoria : string, nomeCategoria : string) {
        this.codCategoria    = codCategoria
        this.imagemCategoria = imagemCategoria
        this.nomeCategoria   = nomeCategoria
    }
}
