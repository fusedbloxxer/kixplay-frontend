import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsResolver } from './resolvers/movie-details.resolver';
import { MovieListResolver } from './resolvers/movie-list.resolver';

export const moviesRoutes = [
  {
    path: '',
    component: MovieListComponent,
    resolve: {
      movies: MovieListResolver,
    },
  },
  {
    path: ':movieId/:movieTitle/details',
    component: MovieDetailsComponent,
    resolve: {
      movie: MovieDetailsResolver,
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
