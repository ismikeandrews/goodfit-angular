import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthModule } from '../auth.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public loginForm: FormGroup;
  public authModule : AuthModule;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FormBuilder: FormBuilder, private authService: AuthService, private router : Router){
    this.loginForm = new FormGroup({
      user     : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }

  async submit(){
    if ( ! this.loginForm.valid ) {
      console.log('preencha o formulário corretamente')
      return
    }

    this.authModule = this.loginForm.value

    try {
      const token : any = await this.authService.login(this.authModule)

      this.authService.setLoggedUser(token)

      await this.router.navigate(['/vagas'])
    } catch (error) {
      console.log(error)
    }

  }

  ngOnInit() {
  }

}
