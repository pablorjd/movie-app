import { Component, Input, OnInit } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { Movie } from '../../interfaces/Movie';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss'],
})
export class PopularListComponent implements OnInit {

  moviespopular: Movie[]=[];
  page = 1;
  next = 20;
  cargando = false;


  constructor(
    private movieapiService: MovieapiService
  ) { }

  ngOnInit() {
    this.getPopularMovie();
  }

  vote(movie: Movie) {
    console.log(movie);
  }

  getPopularMovie(){
    this.movieapiService.getPopularMovie(this.page)
    .pipe(
      delay(150),
      finalize(() => {
      })
    ).subscribe(resp => {

      this.moviespopular.push(...resp);
      }
    );
  }


  loadData($event) {

    setTimeout(() => {
      $event.target.complete();
      this.page +=1;
      this.getPopularMovie();
      // if(this.moviespopular.length <= 673058){
      //   $event.target.disabled = true;
      // }
    }, 2500);
    // this.infiniteScroll.complete();
  }


}
