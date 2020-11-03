import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable( {providedIn: 'root'})
export class MovieService {

    DataChange=new Subject<any>();
    DataChange1=new Subject<any>();

    public movie: Movie[]=[
        {
            id: "1",
            title: "I Dream in Another Language1",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
        {
            id: "2",
            title: "I Dream in Another Language2",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
        {
            id: "3",
            title: "I Dream in Another Language3",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
        {
            id: "4",
            title: "I Dream in Another Language4",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
        {
            id: "5",
            title: "I Dream in Another Language5",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
        {
            id: "6",
            title: "I Dream in Another Language6",
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            category: ['Action','Triler'],
            url: "../../assets/img/covers/cover.jpg",
            rating: 5,
            Releaseyear:"",
            Runningtime:"",
            Language:"",
        },
    ]
    public Popmovie:any[];
    public Ratmovie:any[];
    public NewMovie:any[];
    selectedMovie:any;
    RecomMovies:any[];
    SearchMovie:any[]
    FilterMovie:any[]

    PopularURL="http://localhost:8000/api/popularity/"
    TopRatedURL="http://localhost:8000/api/vote/"
    NewMoviesURL="http://localhost:8000/api/year/"
    MovieURL="http://localhost:8000/api/movieid/"
    RecommendURL="http://localhost:8000/api/recommendation/"
    SearchURL="http://localhost:8000/api/search/"
    FilterURL="http://localhost:8000/api/genre-year-rating/"
    public Genre=[ 'all', 'Crime',
                    'History',
                    'Adventure',
                    'Family',
                    'Animation',
                    'War',
                    'Documentary',
                    'Horror',
                    'Foreign',
                    'Romance',
                    'Mystery',
                    'Thriller',
                    'Western',
                    'Action',
                    'Drama',
                    'Fantasy',
                    'Science Fiction',
                    'Music',
                    'TV Movie',
                    'Comedy']

    
    constructor(private http:HttpClient) { }

    public getGenres(){
        return this.Genre;
    }


    public getRecommendedMovies(){
        return this.movie;

    }
    public getRecommendedmovies(movie){
        return this.movie;

    }
    public getFilteredMovie(Genre,Rating,Releaseyear){

        this.http.post(this.FilterURL,{genres:Genre,rating:Rating,release_date:Releaseyear})
        .subscribe((data) => {
            this.FilterMovie=data["Movies"]
            console.log(this.FilterMovie)
        },
        (err)=>{
            alert("error")
        },
        ()=>{
            this.DataChange.next()
    })

    }
    public getNewMovies(){
        this.http.post(this.NewMoviesURL,{year:"2016"})
        .subscribe((data) => {
            this.NewMovie=data["Movies"]
        },
        (err)=>{
            alert("error")
        },
        ()=>{this.DataChange.next()
    })

    }
    public PopularMovies(){
        this.http.get(this.PopularURL)
            .subscribe((data) => {
                this.Popmovie=data["Movies"]
            },
            (err)=>{
                alert("error")
            },
            ()=>{this.DataChange.next()
        })
                    
        
        
        
    }
    public TopRatedMovies(){
        this.http.get(this.TopRatedURL)
        .subscribe((data) => {
            this.Ratmovie=data["Movies"]
        },
        (err)=>{
            alert("error")
        },
        ()=>{this.DataChange.next()
    })
                
    
    
               
    }

    public getMovies(id){
        console.log(id)
        this.http.post(this.RecommendURL,{id:id})
        .subscribe((data) => {
            this.RecomMovies=data["Recommendations"]
        },
        (err)=>{
            alert("error")
        },
        ()=>{
            this.DataChange1.next()
    })
    }
    public getMovie(idd){
        this.http.post(this.MovieURL,{id:idd})
        .subscribe((data) => {
            this.selectedMovie=data["Movies"][0]
        },
        (err)=>{
            alert("error")
        },
        ()=>{this.DataChange.next()
    })
        
    }
    public getSearch(text){
        this.http.post(this.SearchURL,{title:text})
        .subscribe((data) => {
            this.SearchMovie=data["Movies"]
            console.log(this.SearchMovie)
        },
        (err)=>{
            alert("error")
        },
        ()=>{this.DataChange.next();
    })

       

    }

    

    
}