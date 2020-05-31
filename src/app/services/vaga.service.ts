import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(
    private http: HttpClient,
  ) { }

  async setVaga(vaga){
    return await this.http.post(`${environment.baseUrlApi}/vaga`, vaga).toPromise();
  }
}
