import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService{
    constructor(private http: HttpClient){}

    getNowPlaying(){
        console.log("https://api.themoviedb.org/3/movie/now_playing?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
        return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
    }

    getPopularMovies(){
        console.log("https://api.themoviedb.org/3/movie/popular?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
    }

    getUpcomingMovies(){
        console.log("https://api.themoviedb.org/3/movie/upcoming?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
        return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
    }

    getTopMovies(){
        console.log("https://api.themoviedb.org/3/movie/top_rated?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
        return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=71c06d28840e8732581de79160c2dd37&language=en&page=1");
    }

}