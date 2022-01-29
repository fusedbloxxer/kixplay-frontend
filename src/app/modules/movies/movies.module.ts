import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent, MovieItemComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class MoviesModule {}
