import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel'
import { nextTick } from 'process';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [

    '../userlayout.component.css',
    '../css/bootstrap-grid.min.css',
    '../css/bootstrap-reboot.min.css',
    "../css/jquery.mCustomScrollbar.min.css"
    ,"../css/nouislider.min.css",
    "../css/ionicons.min.css",
    "../css/plyr.css",
    "../css/photoswipe.css",
    "../css/default-skin.css"

  ]
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions={
    mouseDrag: false,
    touchDrag: false,
   
    
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 600,
    margin: 30,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 4,
        },}
    
  }

  Prev(){
     
  }
  Forw(){
    

  }
  
  

}
