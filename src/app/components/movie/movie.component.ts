import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/Movie';
import { DetailmovieComponent } from '../detailmovie/detailmovie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}


  async openmovie(movie: Movie) {
    const modal = await this.modalController.create({
      component:DetailmovieComponent,
      componentProps: {
        movie
      }
    });

    modal.present();
  }

  onOpenMenu(){

  }

}
