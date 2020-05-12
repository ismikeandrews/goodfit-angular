import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itensMenu : any[];

  constructor() {
      this.itensMenu = [
        { label: 'Vagas', link: '/vagas', img: '../../../../assets/images/componentes/vagas.svg' },
        { label: 'Candidatos', link: '/candidatos', img: '../../../../assets/images/componentes/candidatos.png' },
        { label: 'Processos', link: '/processos', img: '../../../../assets/images/componentes/processos.png' },
      ]
  }

  ngOnInit() {
    const sideBar = document.querySelector('#side-bar');
    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    
    menuButton.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      sideBar.classList.toggle("is-active");
    });
  }
}
