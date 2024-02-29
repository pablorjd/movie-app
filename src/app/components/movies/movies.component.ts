import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  @Input() movies: Movie[]=[];

  optionSlice = {
    slidesPerView:1.1,
    freeMode:true
  };

  constructor() { }

  ngOnInit() {}


}
