import { AirStatus } from './airing-status.model';
import { Metreage } from './metreage.model';

export interface Movie {
  id: string;
  title: string;
  synopsis: string;
  description: string;
  bannerUrl: string;
  thumbnailUrl: string;
  duration: string;
  releaseDate: Date;
  airingStatus: AirStatus;
  wonAwards: number;
  metrageType: Metreage;
}
