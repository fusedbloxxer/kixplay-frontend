import { AirStatusModel } from '../models/airing-status.model';

export interface MediaCreateRequestDto {
  title: string;
  synopsis: string;
  description?: string;
  bannerUrl?: string;
  thumbnailUrl: string;
  duration?: string;
  releaseDate?: string;
  airingStatus: AirStatusModel;
}
