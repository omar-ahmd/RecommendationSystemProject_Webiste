import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    'util.css',
    "fonts/font-awesome-4.7.0/css/font-awesome.min.css",
    "fonts/Linearicons-Free-v1.0.0/icon-font.min.css",
    "vendor/animate/animate.css",
    "vendor/css-hamburgers/hamburgers.min.css",
    "vendor/select2/select2.min.css"
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router) { }
  
  User={email:"",password:""};

  ngOnInit(): void {
  }

  loginUser () {
 
    localStorage.setItem('token', "omarahmad")
    this._router.navigate(['./Main/movie'])


  }


}
