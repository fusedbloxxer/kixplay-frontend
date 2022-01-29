import { AirStatusModel } from '../models/airing-status.model';

export interface MediaUpdateRequestDto {
  title: string;
  synopsis: string;
  description?: string;
  bannerUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  releaseDate?: number;
  airingStatus: AirStatusModel;
}
