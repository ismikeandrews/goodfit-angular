import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ExperienciaProfissionalService {
    
    constructor(
        private http: HttpClient,
    ) { }
    
    async getPorCandidato(codCandidato : number, token : string) {
        return await this.http.get(`${environment.baseUrlApi}/experiencia-profissional/candidato/${codCandidato}?token=${token}`).toPromise()
    }
}
