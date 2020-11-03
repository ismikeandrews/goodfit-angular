import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) {
  }

  async getCategoriaList() {
    return this.http.get(`${environment.originalUrlApi}/categoria`).toPromise();
  }

  async getCategoriaPorCod(codCategoria : number) {
      return this.http.get(`${environment.baseUrlApi}/categoria/${codCategoria}`).toPromise()
  }

  async getCategoria(codCategoria : number) {
      const categoria: any = await this.getCategoriaPorCod(codCategoria)

      return {
          codCategoria    : categoria.codCategoria,
          imagemCategoria : categoria.imagemCategoria,
          nomeCategoria   : categoria.nomeCategoria
      }
  }
}
