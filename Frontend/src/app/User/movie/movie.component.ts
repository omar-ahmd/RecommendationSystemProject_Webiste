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
    this.movieservice.PopularMovies();
    this.movieservice.TopRatedMovies();
    this.movieservice.getNewMovies()

    
    
    
    
    this.movieservice.DataChange.subscribe(()=>{
      this.NewMovie = this.movieservice.NewMovie;
      this.load = true;
      this.Toppopular = this.movieservice.Popmovie;
      this.Toprated = this.movieservice.Ratmovie;

      
    })

  }
  TopRecommended:boolean=false;
  TopRated:boolean=true;
  Popular:boolean=false;
  LoggedIn:boolean=false;
  load:boolean=false;
  public NewMovie: any[]
  Toprated: any[]
  Recommended: any[]
  Toppopular:any[]
  Other:any[]
  ngOnInit(): void {
    
    
    
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


  Select(idd){
    this.router.navigate(['./Main/movie',idd])
  }


  TopMovies(){
    if(!this.TopRated){
      this.TopRated = true;
      this.TopRecommended = false;
      this.Popular = false;
      
    }
  }
  Recomnended(){
    if(!this.TopRecommended){
      this.TopRated = false;
      this.TopRecommended = true;
      this.Popular = false;
    }

  }
  TopPopular(){
    if(!this.Popular){
      this.TopRated = false;
      this.TopRecommended = false;
      this.Popular = true
    }

  }
  

}
