import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../login/login.component.css',
    '../login/util.css',
    "../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
    "../login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css",
    "../login/vendor/animate/animate.css",
    "../login/vendor/css-hamburgers/hamburgers.min.css",
    "../login/vendor/select2/select2.min.css"
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
