import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(
    private http: HttpClient,
  ) { }

  async getPorEmpresa(token : string) {
      return await this.http.get(`${environment.baseUrlApi}/empresa/vagas/processo?token=${token}`).toPromise()
  }
}
