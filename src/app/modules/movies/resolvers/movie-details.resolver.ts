import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieDetailsModel } from 'src/app/modules/movies/models/movie-details.model';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';
import { MoviesApiService } from 'src/app/services/api/movies-api.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolver implements Resolve<MovieDetailsModel> {
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private moviesService: MoviesApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MovieDetailsModel> {
    if (!this.isValidRoute(route)) {
      return throwError(() => {
        console.error('Invalid movie details url.');
        this.router.navigate(['/movies']);
      });
    }

    return this.moviesService
      .getMovieWithDetailsById(route.paramMap.get('movieId')!)
      .pipe(
        catchError((error, caught) => {
          this.snackBar.open('Movie does not exist.', 'DISMISS', {
            duration: 3000,
          });
          this.router.navigate(['/movies']);
          return caught;
        })
      );
  }

  private isValidRoute(route: ActivatedRouteSnapshot): boolean {
    return route.paramMap.has('movieId') && route.paramMap.has('movieTitle');
  }
}
