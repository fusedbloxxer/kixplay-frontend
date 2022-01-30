import { AirStatusModel } from './airing-status.model';

export interface MediaModel {
  id: string;
  title: string;
  synopsis: string;
  description: string;
  bannerUrl: string;
  thumbnailUrl: string;
  duration?: string;
  releaseDate?: Date;
  previewImageUrls: string[];
  previewVideoUrls: string[];
  airingStatus: AirStatusModel;
}
