import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [

    '../userlayout.component.css',
    '../css/bootstrap-grid.min.css',
    '../css/bootstrap-reboot.min.css',
    "../css/ionicons.min.css",
    "../css/jquery.mCustomScrollbar.min.css"
   

  ]
})
export class CatalogComponent implements OnInit {

  constructor(private movieservice:MovieService,private router:Router) { }
  Genres:any[];
  Genre:string="Action/Adventure";
  Rating:string="4-5"
  Releaseyear:string="2020";
  FilteredMovies:any[]
  num:any;
  numA:Array<any>=[]
  ClickGenre(event){
    this.Genre = event.path[0].innerHTML 
  }
  Clickrating(event){
    this.Rating = event.path[0].innerHTML 
  }
  Clickreleaseyear(event){
    this.Releaseyear = event.path[0].innerHTML 
  }

  ApplyFilter(){
    this.FilteredMovies = this.movieservice.getFilteredMovie(this.Genre,this.Rating,this.Releaseyear)
    
  }
  ngOnInit(): void {
    this.Genres = this.movieservice.getGenres()
    this.FilteredMovies = this.movieservice.getFilteredMovie(this.Genre,this.Rating,this.Releaseyear)
    this.num = Math.ceil(this.Genres.length/6)
    for (var index = 1; index <= this.num; index++) {
      this.numA.push(index)
      
    }
    console.log(this.numA)
    document.getElementById("1").classList.add("paginator__item--active")

  }
  pagClick(event){
    console.log(event)
  }


  

}
