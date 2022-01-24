import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${environment.baseApiServer}/movies/all`
    );
  }
}
