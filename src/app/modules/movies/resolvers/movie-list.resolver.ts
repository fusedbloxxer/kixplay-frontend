import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesApiService } from 'src/app/services/api/movies-api.service';
import { MovieDetailsModel } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class MovieListResolver implements Resolve<MovieDetailsModel[]> {
  constructor(private moviesService: MoviesApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieDetailsModel[]> {
    return this.moviesService.getAllMoviesWithDetails();
  }
}
