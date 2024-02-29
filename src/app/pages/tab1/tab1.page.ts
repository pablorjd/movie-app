import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieapiService } from '../../services/movieapi.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  movies: Movie[]=[];

  constructor(
    private movieapiService: MovieapiService
  ) {}


  ngOnInit(): void {
    this.movieapiService.getMovie().subscribe(resp => this.movies = resp);
  }

}
