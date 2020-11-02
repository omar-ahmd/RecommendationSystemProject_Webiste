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
    "../css/ionicons.min.css",
   

  ]
})
export class MovieComponent implements OnInit {

  constructor(movies : MovieService,private route:ActivatedRoute,private router:Router,private authservice : AuthService,private movieservice:MovieService) { 
    this.LoggedIn=this.authservice.loggedIn()

  }
  toprated:boolean=true;
  LoggedIn:boolean=false;
  NewMovie: any[]
  Toprated: any[]
  Recommended: any[]
  Other:any[]
  ngOnInit(): void {

    this.NewMovie = this.movieservice.getNewMovies()
    this.Toprated = this.movieservice.TopRatedMovies()
    
    this.Other = this.movieservice.getMovies();
    
    if(this.LoggedIn){
      this.Recommended = this.movieservice.getRecommendedMovies()
    }

   

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


  TopMovies(){
    if(!this.toprated){
      this.toprated = true;
      this.router.navigate(['./Main/movie'])
      
    }
  }
  Recomnended(){
    if(this.toprated){
      this.toprated = false;
      this.router.navigate(['./Main/movie'])
    }

  }
  

}
