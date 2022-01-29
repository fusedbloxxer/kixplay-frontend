import { MediaDetailsModel } from './media-details.model';
import { MovieModel } from './movie.model';

export interface MovieDetailsModel extends MovieModel, MediaDetailsModel {}
