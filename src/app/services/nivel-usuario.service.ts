import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NivelUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  async getAllNivelUsuario() {
    return await this.http.get(`${environment.baseUrlApi}/nivel-usuario`).toPromise();
  }

  async getNivelUsuarioById(id: number){
    return await this.http.get(`${environment.baseUrlApi}/nivel-usuario/${id}`).toPromise();
  }
 
  async setNivelUsuario(nivelUsuario: any){
    return await this.http.post(`${environment.baseUrlApi}/nivel-usuario/register`, nivelUsuario).toPromise()
  } 

  async deleteNivelUsuario(id: number){
    return await this.http.delete(`${environment.baseUrlApi}/nivel-usuario/delete/${id}`).toPromise()
  }
}
