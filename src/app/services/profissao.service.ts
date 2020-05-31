import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  constructor(
    private http: HttpClient
  ) { }

  async getProfissaoList() {
    return this.http.get(`${environment.baseUrlApi}/profissao`).toPromise();
  }
}
