import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({ 
    templateUrl: 'userlayout.component.html',
    styleUrls: [
        './userlayout.component.css',
        'css/bootstrap-grid.min.css',
        'css/bootstrap-reboot.min.css',
        "css/jquery.mCustomScrollbar.min.css",
        "css/ionicons.min.css"
        ]
 })
export class UserlayoutComponent {
    constructor(
        private router: Router,
        
    ) { 
    }

    MenuBtn:boolean=false;
    SearchBtn:boolean=false;
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
}