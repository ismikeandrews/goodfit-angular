import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.scss']
})
export class CandidatosListComponent implements OnInit {
  public candidaturas : Object

  constructor(private vagaService : VagaService) { }

  ngOnInit() {
      this.getCandidatosPorVaga()
  }

  async getCandidatosPorVaga() {
      this.candidaturas = await this.vagaService.getCandidatosPorVaga(3)
    console.log(this.candidaturas)
  }

}
