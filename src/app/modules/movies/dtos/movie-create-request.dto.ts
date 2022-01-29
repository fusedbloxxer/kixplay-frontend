import { MetreageModel } from '../models/metreage.model';
import { MediaCreateRequestDto } from './media-create-request.dto';

export interface MovieCreateRequestDto extends MediaCreateRequestDto {
  wonAwards: number;
  metrageType: MetreageModel;
}
