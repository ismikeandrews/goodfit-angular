import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public categoria : CategoriaModel

  constructor(
    private http: HttpClient
  ) {
      this.categoria = new CategoriaModel()
  }

  async getCategoriaList() {
    return this.http.get(`${environment.originalUrlApi}/categoria`).toPromise();
  }

  async getCategoriaPorCod(codCategoria : number) {
      return this.http.get(`${environment.originalUrlApi}/categoria/${codCategoria}`).toPromise()
  }

  async getCategoria(codCategoria : number) {
      const categoria: any = await this.getCategoriaPorCod(codCategoria)

      console.log(categoria)

      return {
          codCategoria    : categoria.codCategoria,
          imagemCategoria : categoria.imagemCategoria,
          nomeCategoria   : categoria.nomeCategoria
      }
  }
}
