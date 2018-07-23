import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesService } from '../../services/movies';

/**
 * Generated class for the TopratedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toprated',
  templateUrl: 'toprated.html',
})
export class TopratedPage {

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
    this.loadTopMovies();
  }

  loadTopMovies(){
    this.moviesService.getTopMovies().subscribe(
      (data) => {
        console.log("toprated "+JSON.stringify(data));
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
