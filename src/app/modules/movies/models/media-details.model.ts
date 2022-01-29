import { MediaModel } from './media.model';
import { ProviderModel } from './provider.model';

export interface MediaDetailsModel extends MediaModel {
  providers: ProviderModel[];
  genres: string[];
}
