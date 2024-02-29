import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { DetailmovieComponent } from './detailmovie/detailmovie.component';
import { CharactersComponent } from './characters/characters.component';
import { PopularListComponent } from './popular-list/popular-list.component';



@NgModule({
  declarations: [
    MovieComponent,
    MoviesComponent,
    DetailmovieComponent,
    CharactersComponent,
    PopularListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    MoviesComponent,
    PopularListComponent
  ]
})
export class ComponentModule { }
