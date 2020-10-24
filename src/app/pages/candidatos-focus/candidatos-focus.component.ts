import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos-focus',
  templateUrl: './candidatos-focus.component.html',
  styleUrls: ['./candidatos-focus.component.scss']
})
export class CandidatosFocusComponent implements OnInit {

  constructor() { }

  public itens = [
      { name: 'Atendente', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { name: 'Estagiário de TI', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ]

  ngOnInit() {
  }

}
