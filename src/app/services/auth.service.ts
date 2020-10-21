import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Injectable} from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public nivelEmpresa   : number
  public nivelModerador : number

  constructor(
    private http : HttpClient
  ) {
      this.nivelEmpresa   = 3
      this.nivelModerador = 1
  }

  async login(data) {
    return await this.http.post(`${environment.originalUrlApi}/login`, data).toPromise()
  }

  setLoggedUser(userData) {
      try {
          let userDataString = JSON.stringify(userData)

          localStorage.setItem('loggedUser', userDataString)
      } catch (error) {
          console.log(error)
      }
  }

  getLoggedUser() {
      try {
          let userDataString = localStorage.getItem('loggedUser')
          const token        = JSON.parse(userDataString).token
          const helper       = new JwtHelperService()
          const decoded      = helper.decodeToken(token)

          return {
              token        : token,
              codUsuario   : decoded.cod,
              nivelUsuario : decoded.nivel
          }
      } catch (error) {
          console.log(error)
          return null
      }
  }

  isSpecialUser() {
      const user = this.getLoggedUser()
      return [this.nivelEmpresa, this.nivelEmpresa].includes(user.nivelUsuario)
  }
}
