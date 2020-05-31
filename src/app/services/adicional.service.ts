import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdicionalService {

  constructor(
    private http: HttpClient,
  ) { }

  async getAdicionalList() {
    return this.http.get(`${environment.baseUrlApi}/adicional`).toPromise();
  }

  async setAdicionalVaga(adicional) {
    return this.http.post(`${environment.baseUrlApi}/vaga/requisitos`, adicional).toPromise();
  }
}
