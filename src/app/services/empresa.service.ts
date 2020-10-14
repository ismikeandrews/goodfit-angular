import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Empresa} from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(
    private http: HttpClient,
  ) { }

  async create(empresa: Empresa) {
    return this.http.post(`${environment.baseUrlApi}/empresa`, empresa).toPromise()
  }
}
