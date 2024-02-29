import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.scss'],
})
export class DetailmovieComponent implements OnInit {

  @Input() movie: Movie;
  constructor(
    private movieapiService: MovieapiService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.movie,'pelicual');
    this.movieapiService.getCharactersMovie(537056)
        .subscribe(resp=> resp);
  }

  dismissModal(){
    this.modalController.dismiss();
  }

}
