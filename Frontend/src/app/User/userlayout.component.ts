import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({ 
    templateUrl: 'userlayout.component.html',
    styleUrls: [
        './userlayout.component.css',
        './bootstrap-grid.min.css',
        './bootstrap-reboot.min.css',
        './css/owl.carousel.min.css',
        "css/jquery.mCustomScrollbar.min.css"
        ,"css/nouislider.min.css",
        "css/ionicons.min.css",
        "css/plyr.css",
        "css/photoswipe.css",
        "css/default-skin.css"
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