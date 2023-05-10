import { User } from "./user.model";

export interface RiderVehicles{
  riderVehicle_Id: number | string;
  riderVehicleType: string;
  desc: string;
  type: number;
  user_ID: number | string;
  user: User;
}
