import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesApiService } from 'src/app/services/api/movies-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$!: Observable<string[]>;

  constructor(private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesApiService
      .getAllMovies()
      .pipe(
        map((movies: Movie[]) =>
          movies.map((movie) => JSON.stringify(movie, null, '\t'))
        )
      );
  }
}
