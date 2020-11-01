import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  Genre:string="Action/Adventure";
  Rating:string="4-5"
  Releaseyear:string="2020";
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
    
  }
  ngOnInit(): void {
    
  }


  

}
