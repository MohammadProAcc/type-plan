
  import { FQl_response_country_ICountry } from "../../../declarations/response/schema";
  import {  Response } from "../../../index";
      
     export interface Country {
        country: Response<FQl_response_country_ICountry>;
        countries: Response<FQl_response_country_ICountry[]>;
      }
     
     export const singleCountryInitial:FQl_response_country_ICountry ={

      };
      
     export const countryInitials:Country ={
    country: {
        error: "",
        data: singleCountryInitial,
        loader: false,
      },
      countries: {
        error: "",
        data: [],
        loader: false,
      }};
      