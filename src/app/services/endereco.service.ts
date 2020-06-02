import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient,
  ) { }

  async setEndereco(endereco){
    return await this.http.post(`${environment.baseUrlApi}/endereco/store`, endereco).toPromise();
  }

  async getEnderecoByIds(ids){
    return await this.http.post(`${environment.baseUrlApi}/endereco`, ids).toPromise();
  }
}
