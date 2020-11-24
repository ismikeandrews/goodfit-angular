import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriaService } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  constructor(
    private http             : HttpClient,
    private categoriaService : CategoriaService
  ) { }

  async getProfissaoList() {
    return this.http.get(`${environment.baseUrlApi}/profissao`).toPromise();
  }

  async getProfissaoPorCod(codProfissao : number) {
      return this.http.get(`${environment.baseUrlApi}/profissao/${codProfissao}`).toPromise()
  }

  async getProfissao(codProfissao : number) {
      const profissao : any = await this.getProfissaoPorCod(codProfissao);
      const categoria : any = await this.categoriaService.getCategoria(profissao.codCategoria)

      return {
        codProfissao  : profissao.codProfissao,
        nomeProfissao : profissao.nomeProfissao,
        categoria     : categoria
      }
  }
  
  async getProfissoesPorCategoria(codCategoria : number, token : string) {
      return this.http.get(`${environment.baseUrlApi}/categoria/${codCategoria}/profissao?token=${token}`).toPromise()
  }
}
