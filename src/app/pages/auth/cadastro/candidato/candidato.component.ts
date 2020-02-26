import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

  nextPage(){
    this.page = this.page + 1;
  }

  prevPage(){
    this.page = this.page - 1;
  }
}
