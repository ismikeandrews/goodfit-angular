import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {LoginService} from "../../../services/login.service";
import {LoginModel} from "../../../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm  : FormGroup
  public loginModel : LoginModel

  constructor(private FormBuilder : FormBuilder, private loginService : LoginService) {
      this.loginForm = new FormGroup({
          user     : new FormControl('', [Validators.required]),
          password : new FormControl('', [Validators.required])
      })
  }

  async submit(){
      if (this.loginForm.valid) {
          this.loginModel = this.loginForm.value
          const token : any = await this.loginService.login(this.loginModel)
      }
  }

  ngOnInit(): void {}

}
