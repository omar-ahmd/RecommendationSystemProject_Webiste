import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel'
import { nextTick } from 'process';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(movies : MovieService,private route:ActivatedRoute,private router:Router,authservice : AuthService) { 
    if(authservice.loggedIn()){
      this.movie = movies.getMovies()
    }
    else{
      
    }
    
  
  }

  movie: any[]

  ngOnInit(): void {
    
  }

  customOptions={
    mouseDrag: false,
    touchDrag: false,
   
    
    dots: false,
    loop: false,
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

  tabclick(event){
    
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target.text)
  }
  Select(idd){
    this.router.navigate(['./Main/movie',idd])
  }
  
  

}
