import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesService } from '../../services/movies';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage implements OnInit{
  moviesObj: any;
  moviesList: any;
  header: boolean;
  imagePath: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesService: MoviesService) {
    this.header = this.navParams.get('header')? this.navParams.get('header'): false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  ngOnInit(){
    this.imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    this.loadPopularMovies();
  }

  loadPopularMovies(){
    this.moviesService.getPopularMovies().subscribe(
      (data) => {
        console.log("popular "+JSON.stringify(data));
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

}
