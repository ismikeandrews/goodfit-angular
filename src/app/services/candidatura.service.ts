import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';

import { environment }      from 'src/environments/environment';
import { CandidaturaModel } from '../models/candidatura.model';

@Injectable({
  providedIn: 'root'
})

export class CandidaturaService {
    constructor(
      private http: HttpClient,
    ) { }

    async mudarStatusCandidatura(candidatura : CandidaturaModel, token : string) {
        return await this.http.put(`${environment.baseUrlApi}/candidatura/${candidatura.codCandidatura}/status?token=${token}`, candidatura).toPromise()
    }
}
