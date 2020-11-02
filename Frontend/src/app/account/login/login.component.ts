import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
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

  constructor(private _router : Router,private auth:AuthService) { }
  
  User={email:"",password:""};
  user:User;
  ngOnInit(): void {
  }



  validateEmail(email) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
   }
   


  loginUser() {
    if(this.validateEmail(this.User.email)&& this.User.password !=""){
      
      if(this.auth.login(this.User)){
      this._router.navigate(['./Main/movie'])
      }
      else{
        alert("error")
      }

    }
    else {
      var email = document.getElementById("emailId")
      email.classList.add("alert-validate")
      var pass = document.getElementById("passId")
      pass.classList.add("alert-validate")
    }

    

  }

  emailFocus(){
    var email = document.getElementById("emailId")
    email.classList.remove("alert-validate")
  }

  passFocus(){
    var pass = document.getElementById("passId")
    pass.classList.remove("alert-validate")
  }


}
