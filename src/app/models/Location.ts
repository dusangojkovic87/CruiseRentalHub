import { Destination } from './Destination';

export interface ILocation {
  id: number;
  locationName: string;
  locationImage: string;
  description: string;
  destinations: Destination[];
}
