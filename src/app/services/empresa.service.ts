import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {EmpresaModel } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(
    private http: HttpClient,
  ) { }

  async create(empresa: EmpresaModel) {
    return this.http.post(`${environment.baseUrlApi}/empresa`, empresa).toPromise()
  }
}
