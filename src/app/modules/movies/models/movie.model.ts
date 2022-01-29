import { MediaModel } from './media.model';
import { MetreageModel } from './metreage.model';

export interface MovieModel extends MediaModel {
  wonAwards: number;
  metrageType: MetreageModel;
}
