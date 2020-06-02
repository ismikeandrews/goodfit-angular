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

  async getHabilidades(){
    return this.http.get(`${environment.baseUrlApi}/adicional/tipo/1`).toPromise();
  }
  
  async getEscolaridade(){
    return this.http.get(`${environment.baseUrlApi}/adicional/tipo/2`).toPromise();
  }
  async getAlfabetizacao(){
    return this.http.get(`${environment.baseUrlApi}/adicional/tipo/3`).toPromise();
  }
}
