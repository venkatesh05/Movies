import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../data/movie.interface';

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage implements OnInit{
  movie: Movie;
  imagePath: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  ngOnInit(){
    this.imagePath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    this.movie = this.navParams.get('movieInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
  }


}
