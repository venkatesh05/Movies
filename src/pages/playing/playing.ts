import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../data/movie.interface';
import { MoviedetailPage } from '../moviedetail/moviedetail';

/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playing',
  templateUrl: 'playing.html',
})
export class PlayingPage implements OnInit{
  moviesObj: any;
  moviesList: any;
  header: boolean;
  imagePath: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesService: MoviesService) {
    this.header = this.navParams.get('header')? this.navParams.get('header'): false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayingPage ');
  }

  ngOnInit(){
    this.imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    this.loadNowPlaying();
  }

  loadNowPlaying(){
    this.moviesService.getNowPlaying().subscribe(
      (data) => {
        console.log("playing "+JSON.stringify(data));
        this.moviesObj = JSON.parse(JSON.stringify(data));
        this.moviesList = this.moviesObj.results;
      },(error) => {
        console.log("erroe "+JSON.stringify(error));
      }
    )
  }

  isNeed(){
    return this.header;
  }

  showMovieDetail(movie: Movie){
    this.navCtrl.push(MoviedetailPage,{movieInfo:movie});
  }

}
