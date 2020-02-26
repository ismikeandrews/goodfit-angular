import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NivelUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCustomer() {
    return this.http.get(`${environment.baseUrlApi}/nivel-usuario`).toPromise();
  }
}
