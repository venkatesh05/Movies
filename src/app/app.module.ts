import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GoogleplayTabsPage } from '../pages/googleplay-tabs/googleplay-tabs';
import { PlayingPage } from '../pages/playing/playing';
import { LatestPage } from '../pages/latest/latest';
import { PopularPage } from '../pages/popular/popular';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { TopratedPage } from '../pages/toprated/toprated';
import { MoviesService } from '../services/movies';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { MoviedetailPage } from '../pages/moviedetail/moviedetail';

@NgModule({
  declarations: [
    MyApp,
    GoogleplayTabsPage,
    PlayingPage,
    LatestPage,
    PopularPage,
    UpcomingPage,
    TopratedPage,
    MoviedetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoogleplayTabsPage,
    PlayingPage,
    LatestPage,
    PopularPage,
    UpcomingPage,
    TopratedPage,
    MoviedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MoviesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
