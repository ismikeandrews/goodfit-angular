import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  constructor(
    private http: HttpClient,
  ) { }

  async getBeneficiosPorVaga(codVaga : number, token : string) {
      return await this.http.get(`${environment.baseUrlApi}/vaga/${codVaga}/beneficio?token=${token}`).toPromise()
  }
}
