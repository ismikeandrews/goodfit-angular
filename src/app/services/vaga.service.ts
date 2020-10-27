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

  async getCandidatosPorVaga(filtros : string, token : string){
      return await this.http.get(`${environment.baseUrlApi}/empresa/candidatos?status=${filtros}&token=${token}`).toPromise()
  }

  async getVagasByCompanyId(token : string){
    return await this.http.get(`${environment.baseUrlApi}/empresa/vagas?token=${token}`).toPromise();
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

  async getVagaPorCod(codVaga : number, token : string){
    return await this.http.get(`${environment.baseUrlApi}/vaga/${codVaga}?token=${token}`).toPromise()
  }
}
