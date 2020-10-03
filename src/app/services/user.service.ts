import { ɵangular_packages_animations_browser_browser_a } from '@angular/animations/browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  

  authenticate(params) {
    const email = params.email
    const password = params.password
    console.log(email, password)
    return { success: true}
  }
}
