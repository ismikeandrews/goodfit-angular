import { Injectable } from '@angular/core';
import {UsuarioModel} from '../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public codNivelEmpresa : number

  constructor(
    private http: HttpClient,
  ) {
      this.codNivelEmpresa = 3
  }

  authenticate(params) {
    const email = params.email
    const password = params.password
    console.log(email, password)
    return { success: true}
  }

  async create(usuario: UsuarioModel){
    return this.http.post(`${environment.baseUrlApi}/usuario`, usuario).toPromise()
  }
}
