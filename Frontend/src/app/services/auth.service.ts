import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user'

@Injectable()
export class AuthService {

  user:any;
  GUser:User[];

  constructor() { }

  login(user){
    this.user = user;
    localStorage.setItem('token', this.user.email)
    //GUser=http.get....
    return true
  }
  
  logoutUser() {
    localStorage.removeItem('token')
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
