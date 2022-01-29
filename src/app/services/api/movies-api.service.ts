import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/modules/movies/models/movie.model';
import { MovieDetailsModel } from 'src/app/modules/movies/models/movie-details.model';
import { MovieCreateRequestDto } from 'src/app/modules/movies/dtos/movie-create-request.dto';
import { MovieUpdateRequestDto } from 'src/app/modules/movies/dtos/movie-update-request.dto';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(
      `${environment.baseApiServer}/movies/all`
    );
  }

  public getAllMoviesWithDetails(): Observable<MovieDetailsModel[]> {
    return this.http.get<MovieDetailsModel[]>(
      `${environment.baseApiServer}/movies/all/details`
    );
  }

  public getMovieById(movieId: string): Observable<MovieModel> {
    return this.http.get<MovieModel>(
      `${environment.baseApiServer}/movies/find/${movieId}`
    );
  }

  public getMovieWithDetailsById(
    movieId: string
  ): Observable<MovieDetailsModel> {
    return this.http.get<MovieDetailsModel>(
      `${environment.baseApiServer}/movies/find/${movieId}/details`
    );
  }

  public createMovie(movie: MovieCreateRequestDto): Observable<void> {
    return this.http.post<void>(
      `${environment.baseApiServer}/movies/create`,
      movie
    );
  }

  public updateMovie(
    movieId: string,
    movie: MovieUpdateRequestDto
  ): Observable<void> {
    return this.http.put<void>(
      `${environment.baseApiServer}/movies/update/${movieId}`,
      movie
    );
  }

  public deleteMovie(movieId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.baseApiServer}/movies/delete/${movieId}`
    );
  }
}
