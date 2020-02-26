import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  
  user: string = "unset";

  constructor() { }

  ngOnInit() {
  }

  setUserType(input: string){
    this.user = input;
  }
}
