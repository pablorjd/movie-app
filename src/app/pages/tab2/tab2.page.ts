import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { delay, finalize } from 'rxjs/operators';
import { DetailmovieComponent } from 'src/app/components/detailmovie/detailmovie.component';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieapiService } from 'src/app/services/movieapi.service';

import { Share } from '@capacitor/share';
import { DatabaseService } from 'src/app/db/database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  textoBuscar = '';
  movies: Movie[]=[];
  loading: any;
  listMovie = [];
  constructor(
    private movieapiService: MovieapiService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private databaseService: DatabaseService
  ) {


  }
  ngOnInit(): void {
    this.getData();
    console.log(this.listMovie);
  }


  async serchMovie(query ) {

    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: false,
      backdropDismiss: true
    });

    loading.present();

    this.movieapiService.searchMovie(query.target.value)
        .pipe(
          delay(3000),
          finalize(()=> loading.dismiss()),
        )
        .subscribe(movie => {
          this.movies = movie;
        });
  }

  async openmovie(movie: Movie) {
    const modal = await this.modalController.create({
      component:DetailmovieComponent,
      componentProps: {
        movie
      }
    });

    modal.present();
  }

  async onOpenMenu() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  async getData(){
    this.listMovie = await this.databaseService.getData();
    // this.getData();
  }

  async saveMovieData(movie){
    await this.databaseService.addData(movie);
  }

}
