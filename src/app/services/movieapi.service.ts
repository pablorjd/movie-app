import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie, ReqResMovie } from '../interfaces/Movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cast, ReqResCharacters } from '../interfaces/Cast';

const apikey = environment.apikey;
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(
    private http: HttpClient
  ) { }


  getMovie(fechaInicio: string = '', fechaTermino: string = '', language: string = ''): Observable<Movie[]> {
    return this.http.get<ReqResMovie>(`${url}discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-05-12`,
    ).pipe(
      map(({ results }) => results)
    );
  }

  /******************************* buscar peliculas *********************************/
  //https://developers.themoviedb.org/3/search/search-movies
  searchMovie(query: string): Observable<Movie[]> {
    return this.http.get<ReqResMovie>(`${url}search/movie`, {
      params: {
        query,

      }
    }).pipe(
      map(({ results }) => results)
    );
  }

  //genre/movie/list
  getGenderMovies() {
    return this.http.get<any>(`${url}genre/movie/list`, {
      params: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        api_key: apikey,
        language: 'es',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        include_image_language: 'es',
      }
    });
  }

  ///movie/414906/similar
  similarMovie(idMovie: number): Observable<Movie[]> {
    return this.http.get<ReqResMovie>(`${url}movie/${idMovie}/similar`, {
      params: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        api_key: apikey,
        language: 'es',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        include_image_language: 'es',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        include_adult: false
      }
    }).pipe(
      map(({ results }) => results)
    );
  }

  //https://api.themoviedb.org/3/movie/675353/credits?api_key=e2f489839e00bc8cdaa4be7ca99ad3e3&language=es
  getCharactersMovie(id: number): Observable<Cast[]>{
    return this.http.get<ReqResCharacters>(`${url}movie/${id}/credits`)
      .pipe(
        map(({ cast }) => cast )
      );
  }

  getPopularMovie(page = 1): Observable<Movie[]>{
    console.log(page,'paginas en el servicio');
    return this.http.get<ReqResMovie>(`${url}movie/popular`, {
      params: {
        page,
      }
      }).pipe(
        map(({ results }) => results )
      );
  }
}

