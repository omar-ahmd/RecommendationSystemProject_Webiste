import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  constructor(private movies : MovieService,private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movies.getmovie(this.id);
    console.log(this.id)
    
  }

}
