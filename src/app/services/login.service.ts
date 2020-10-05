import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    constructor(
        private http : HttpClient
    ) {}

    async login(data) {
      return await this.http.post(`${environment.baseUrlApi}/login`, data).toPromise()
    }
}
