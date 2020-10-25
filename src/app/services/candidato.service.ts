import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(
    private http: HttpClient,
  ) { }

  async getCandidato(codCandidato : number, token : string) {
      return await this.http.get(`${environment.baseUrlApi}/candidato/${codCandidato}?token=${token}`).toPromise()
  }
}
