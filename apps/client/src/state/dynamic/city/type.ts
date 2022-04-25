
  import { FQl_response_city_ICity } from "../../declarations/response/schema";
  import {  Response } from "../../index";
      
     export interface City {
        city: Response<FQl_response_city_ICity>;
        cities: Response<FQl_response_city_ICity[]>;
      }
     
     export const singleCityInitial:FQl_response_city_ICity ={

      };
      
     export const cityInitials:City ={
    city: {
        error: "",
        data: singleCityInitial,
        loader: false,
      },
      cities: {
        error: "",
        data: [],
        loader: false,
      }};
      