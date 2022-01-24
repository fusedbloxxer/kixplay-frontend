import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './movies.routes';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
