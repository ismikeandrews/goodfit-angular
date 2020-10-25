import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  public mapsAPIKey : string = 'AIzaSyAhH4jMj8gRXO_Cd4Igar0TBvnnXe3RSVQ'
  
  constructor(
    private http: HttpClient,
  ) { }

  async setEndereco(endereco){
    return await this.http.post(`${environment.originalUrlApi}/endereco/store`, endereco).toPromise();
  }

  async getEnderecoByIds(ids){
    return await this.http.post(`${environment.originalUrlApi}/endereco`, ids).toPromise();
  }

  async getEnderecoPorCod(codEndereco : number) {
      return await this.http.get(`${environment.originalUrlApi}/endereco/${codEndereco}`).toPromise()
  }
  
  async getLatAndLong(endereco : string) {
      return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=${this.mapsAPIKey}`).toPromise();
  }
}
