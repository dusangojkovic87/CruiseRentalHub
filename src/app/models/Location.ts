import { Destination } from './Destination';

export interface Location {
  id: number;
  locationName: string;
  locationImage: string;
  description: string;
  destinations: Destination[];
}
