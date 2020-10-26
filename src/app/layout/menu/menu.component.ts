import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public itensMenu   : any[]
    public nomeUsuario : string
    public username    : string

    constructor(
        private authService : AuthService
    ) {}

    ngOnInit() {
        const sideBar    = document.querySelector('#side-bar');
        const menuButton = document.querySelector('#menu-button');
        const menu       = document.querySelector('#menu');
    
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            sideBar.classList.toggle("is-active");
        })
        
        this.setUsuario()
    }

    async logOut() {
        await this.authService.logout()
    }
    
    setUsuario() {
        const params = this.authService.getLoggedUser()
        this.nomeUsuario = params.nomeUsuario
        this.username    = params.username
    }
}
