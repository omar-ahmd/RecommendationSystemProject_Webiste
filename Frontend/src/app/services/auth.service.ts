import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {



  constructor() { }

 logoutUser() {
    localStorage.removeItem('token')
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
