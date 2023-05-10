import { Restaurant } from "./restaurant.model";

export interface RestaurantOwner{
    restaurantOwner_Id: number | string;
    User_ID: number | string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    taxCode: string;
    avatar_Img: string;
    restaurants: Restaurant[];
}
