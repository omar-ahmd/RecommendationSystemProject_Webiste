import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';



@Component({ 
    templateUrl: 'userlayout.component.html',
    styleUrls: [
        './userlayout.component.css',
        'css/bootstrap-grid.min.css',
        'css/bootstrap-reboot.min.css',
        "css/ionicons.min.css"
        ]
 })
export class UserlayoutComponent {
    constructor(
        private router: Router,
        private authservice : AuthService,
        private movieservice : MovieService
    ) { 
        this.LoggedIn = authservice.loggedIn();
    }
    LoggedIn:boolean=false;
    MenuBtn:boolean=false;
    SearchBtn:boolean=false;
    Stext:any;


    MenuClick(){
        if(!this.MenuBtn){
            if(this.SearchBtn)this.SearchBtn=false;
        }
        this.MenuBtn=!this.MenuBtn;
            
    }
    SearchClick(){
        if(!this.SearchBtn){
            if(this.MenuBtn)this.MenuBtn=false;
        }
        this.SearchBtn=!this.SearchBtn;
    }

    Search(){
        console.log("jj")
        this.movieservice.getSearch(this.Stext);
        this.router.navigate(['/Main/search'])

    }

    SignOut(){
        this.authservice.logoutUser()
    }
}