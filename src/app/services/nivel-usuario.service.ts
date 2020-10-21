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
    return this.http.get(`${environment.originalUrlApi}/nivel-usuario`).toPromise();
  }

  async getNivelUsuarioById(id: number){
    return this.http.get(`${environment.originalUrlApi}/nivel-usuario/${id}`).toPromise();
  }
 
  async setNivelUsuario(nivelUsuario: any){
    return this.http.post(`${environment.originalUrlApi}/nivel-usuario/register`, nivelUsuario).toPromise()
  } 

  async deleteNivelUsuario(id: number){
    return this.http.delete(`${environment.originalUrlApi}/nivel-usuario/delete/${id}`).toPromise()
  }
}
