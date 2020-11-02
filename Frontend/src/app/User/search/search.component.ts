import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    '../userlayout.component.css',
    '../css/bootstrap-grid.min.css',
    '../css/bootstrap-reboot.min.css',
    "../css/ionicons.min.css",
   
]
})
export class SearchComponent implements OnInit {


  Search:any[];
  constructor(private movieservice : MovieService,private route:ActivatedRoute,private router:Router) { 
    this.Search = this.movieservice.NewMovie; 
   
  }
 

  ngOnInit(): void {
  }

}
