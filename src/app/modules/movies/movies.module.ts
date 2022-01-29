import { NgModule } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent, MovieItemComponent],
  imports: [SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
