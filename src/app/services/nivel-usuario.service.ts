import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NivelUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

 async getAllCustomer() {
    let Headers = {
      headers: new HttpHeaders({
          'APP_KEY': 'DBD0xnx6TUruCgM5fUaoMuO2u9I2RYZA'
      })
    }
    return await this.http.get(`${environment.baseUrlApi}/nivel-usuario`).toPromise();
  }
}
