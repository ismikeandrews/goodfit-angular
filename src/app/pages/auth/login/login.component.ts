import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AUTOCOMPLETE_OPTION_HEIGHT } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.FormBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  async authenticate(form){
    const values = form.values
    const params = {
      "email" : values.email,
      "password": values.password
    }

    const res = await this.userService.authenticate(params);
    if(res.success){
      alert("logado ta ligado kkkk")
    } else {
      alert("email ou senha invalidos")
    }
  }

}
