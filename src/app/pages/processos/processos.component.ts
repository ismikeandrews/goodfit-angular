import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit() {
  }

  btnSearch() {
    const search = document.getElementById('search')
    
    if (search.classList.contains('is-active')) {
      search.classList.remove('is-active')
    } else {
      search.classList.add('is-active')
    }
  }
}
