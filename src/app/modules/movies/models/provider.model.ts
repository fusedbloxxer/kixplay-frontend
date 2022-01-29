import { ReliabilityModel } from './reliability.model';

export interface ProviderModel {
  id: string;
  url: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  reliable: ReliabilityModel;
  sources: string[];
}
