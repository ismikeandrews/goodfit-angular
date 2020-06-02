import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  async getCategoriaList() {
    return this.http.get(`${environment.baseUrlApi}/categoria`).toPromise();
  }
}
