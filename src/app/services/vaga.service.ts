import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(
    private http: HttpClient,
  ) { }

  async getCandidatosPorVaga(token : string){
      return await this.http.get(`${environment.originalUrlApi}/empresa/candidatos?token=${token}`).toPromise()
  }

  async getVagasByCompanyId(token : string){
    return await this.http.get(`${environment.originalUrlApi}/empresa/vagas?token=${token}`).toPromise();
  }

  async setVaga(vaga){
    return await this.http.post(`${environment.originalUrlApi}/vaga`, vaga).toPromise();
  }

  async setRequisitosVaga(requisitos) {
    return this.http.post(`${environment.originalUrlApi}/vaga/requisitos`, requisitos).toPromise();
  }

  async setBeneficiosVaga(beneficios){
    return await this.http.post(`${environment.originalUrlApi}/vaga/beneficios`, beneficios).toPromise();
  }
}
