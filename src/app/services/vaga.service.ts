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

  async getCandidatosPorVaga(codEmpresa){
      return await this.http.get(`${environment.baseUrlApi}/empresa/${codEmpresa}/candidatos`).toPromise()
  }

  async getVagasByCompanyId(codEmpresa, page){
    return await this.http.get(`${environment.baseUrlApi}/empresa/${codEmpresa}/vagas?${page}`).toPromise();
  }

  async setVaga(vaga){
    return await this.http.post(`${environment.baseUrlApi}/vaga`, vaga).toPromise();
  }

  async setRequisitosVaga(requisitos) {
    return this.http.post(`${environment.baseUrlApi}/vaga/requisitos`, requisitos).toPromise();
  }

  async setBeneficiosVaga(beneficios){
    return await this.http.post(`${environment.baseUrlApi}/vaga/beneficios`, beneficios).toPromise();
  }
}
