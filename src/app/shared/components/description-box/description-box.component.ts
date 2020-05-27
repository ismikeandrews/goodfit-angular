import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-box',
  templateUrl: './description-box.component.html',
  styleUrls: ['./description-box.component.scss']
})
export class DescriptionBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // submenuDescription() {
  //   const submenu = document.querySelectorAll('.curriculo-etapa1-submenu-item');
  //   const content = document.querySelectorAll('.curriculo-etapa1-content');

  //   submenu.forEach((elem, idx) => {
  //     submenu[idx].addEventListener('click', function() {
  //       if (submenu[0].classList.contains('is-active')) {
  //         submenu[0].classList.remove('is-active');
  //         submenu[1].classList.add('is-active');
  //         content[0].classList.remove('is-active');
  //         content[1].classList.add('is-active');
  //       } else {
  //         submenu.forEach(elem => {
  //           submenu[0].classList.add('is-active');
  //           submenu[1].classList.remove('is-active');
  //           content[0].classList.add('is-active');
  //           content[1].classList.remove('is-active');
  //         });
  //       }
  //     });
  //   });
  // }

}
