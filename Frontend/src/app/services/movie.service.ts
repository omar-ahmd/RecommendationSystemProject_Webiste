import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable( {providedIn: 'root'})
export class MovieService {
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
     
    public Genre=[  'Crime',
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

    
    constructor() {
        
    }

    public getGenres(){
        return this.Genre

    }

    public getRecommendedMovies(){
        return this.movie;

    }
    public getRecommendedmovies(movie){
        return this.movie;

    }
    public getFilteredMovie(Genre,Rating,Releaseyear){
        return this.movie;

    }
    public getNewMovies(){
        return this.movie;

    }
    public PopularMovies(){
        return this.movie;
    }


    public TopRatedMovies(){
        return this.movie;
    }

    public getMovies(){
        return this.movie;
    }
    
    public getMovie(id){
        return this.movie[id=id-1]
    }
    

    
}