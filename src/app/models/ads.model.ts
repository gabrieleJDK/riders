import { Restaurant } from './restaurant.model';
import { CndRider } from './cndRider.model';

export interface Ads{
  adsRestaurant_Id: number | string;
  restaurant: Restaurant;
  dateStartAd: string;
  dateFinishAd: string;
  geO_Radius_Km: number,
  text: string;
  resaturant_Id: number | string;
  vehicleType: string;
  price: number;
  numRiders: number;
  cnd: CndRider[];
}
