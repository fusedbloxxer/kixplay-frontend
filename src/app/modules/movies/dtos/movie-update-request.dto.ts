import { MetreageModel } from './../models/metreage.model';
import { MediaUpdateRequestDto } from './media-update-request.dto';

export interface MovieUpdateRequestDto extends MediaUpdateRequestDto {
  wonAwards: number;
  metreageType: MetreageModel;
}
