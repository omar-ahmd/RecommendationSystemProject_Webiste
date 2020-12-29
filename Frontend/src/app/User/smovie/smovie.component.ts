import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-smovie',
  templateUrl: './smovie.component.html',
  styleUrls: [


    '../userlayout.component.css',
    '../css/bootstrap-grid.min.css',
    '../css/bootstrap-reboot.min.css',
    "../css/ionicons.min.css",
  ]
})
export class SmovieComponent implements OnInit {
  id:any;
  movie:any;
  constructor(private movies : MovieService,private route: ActivatedRoute,private authservice : AuthService) { 
    
  }
  star:number=0;
  clicked:boolean=false;
  LoggedIn:boolean;
  RMovies:Movie[];
  done=false;
  ngOnInit(): void {
    
    this.LoggedIn = this.authservice.loggedIn();
    this.id = this.route.snapshot.paramMap.get('id');

    this.movies.getMovie(this.id);
    this.movies.getMovies(this.id)
 

    this.movies.DataChange.subscribe(()=>{
      this.movie = this.movies.selectedMovie;
    })
    this.movies.DataChange1.subscribe(()=>{
      this.RMovies = this.movies.RecomMovies
      this.done=true
    })
    
    
  }


  starhover(star){
    this.clicked=false;
    for (let index = 1; index <= star; index++) {
      var s="star"+index;
      document.getElementById(s).className="card__rate_act1"
      
    }
  }
  starleave(){
    
    if(!this.clicked){
    for (let index = 1; index <= 5; index++) {
      var s="star"+index;
      document.getElementById(s).className="card__rate1"
      
    }
  }
  }
  starclick(n){
    for (let index = 1; index <= n; index++) {
      var s="star"+index;
      document.getElementById(s).className="card__rate_act1"
      
    }
    this.clicked=true;

  }

}
