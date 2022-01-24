import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieItemDetailsComponent } from './components/movie-item-details/movie-item-details.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent,
    MovieItemDetailsComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
