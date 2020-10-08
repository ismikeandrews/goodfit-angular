import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http : HttpClient
  ) {}

  async login(data) {
    return await this.http.post(`${environment.baseUrlApi}/login`, data).toPromise()
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
      return JSON.parse(userDataString)
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
