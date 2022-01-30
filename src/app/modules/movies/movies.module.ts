import { NgModule } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SharedModule } from '../shared/shared.module';
import { OverlayComponent } from '../shared/components/overlay/overlay.component';
import { MovieProviderComponent } from './components/movie-provider/movie-provider.component';
import { ProviderSourceComponent } from './components/provider-source/provider-source.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    OverlayComponent,
    MovieProviderComponent,
    ProviderSourceComponent,
  ],
  imports: [SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
